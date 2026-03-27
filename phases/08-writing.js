/**
 * Phase 8: Paper Writing
 * Generates all paper sections in parallel, then assembles into QMD.
 */

import { Agent, runParallel } from '../core/agent.js';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const SECTIONS = [
  { id: 'abstract', name: 'Abstract', words: '200-250', system: 'Write a concise abstract (200-250 words). Structure: background, problem, method, results, conclusion. No citations.' },
  { id: 'introduction', name: 'Introduction', words: '600-800', system: 'Write the introduction. Structure: (1) broad context, (2) specific problem + gap, (3) our contributions (3 bullet points), (4) paper outline. Cite references using @citekey.' },
  { id: 'related_work', name: 'Related Work', words: '500-800', system: 'Write related work organized by theme (3-4 subsections). End with a paragraph on limitations of existing work. Cite extensively using @citekey.' },
  { id: 'methods', name: 'Methodology', words: '800-1200', system: 'Write the methodology section. Include mathematical notation where appropriate. Reference the framework figure. Use passive voice for academic tone.' },
  { id: 'results', name: 'Results', words: '800-1000', system: 'Write the results section. Reference all tables and figures using @tbl-xx and @fig-xx. Include statistical significance. Structure: setup, main results, ablation.' },
  { id: 'discussion', name: 'Discussion', words: '500-700', system: 'Write the discussion. Interpret results, compare with prior work, acknowledge limitations (2-3 specific ones). Build reviewer trust through honest limitation acknowledgment.' },
  { id: 'conclusion', name: 'Conclusion', words: '150-250', system: 'Write a concise conclusion. Summarize contributions, state key finding, suggest future work (2-3 directions). Do not repeat the abstract.' },
];

export async function execute(state, llm) {
  // Load all context
  const concept = await readFile(join(state.outputDir, 'phase1_concept.md'), 'utf-8');
  const positioning = await readFile(join(state.outputDir, 'phase3_positioning.md'), 'utf-8');
  const structure = await readFile(join(state.outputDir, 'phase4_structure.md'), 'utf-8');
  const bib = await readFile(join(state.outputDir, 'references.bib'), 'utf-8');

  let tables;
  try {
    tables = await readFile(join(state.outputDir, 'tables', 'all_tables.md'), 'utf-8');
  } catch { tables = ''; }

  const citekeys = extractCitekeys(bib);
  const context = `CONCEPT:\n${concept}\n\nPOSITIONING:\n${positioning}\n\nSTRUCTURE:\n${structure}\n\nTABLES:\n${tables}\n\n=== AVAILABLE CITEKEYS (YOU MUST USE THESE — at least 20 total across all sections) ===\n${citekeys.map(k => `@${k}`).join('\n')}\n=== END CITEKEYS (${citekeys.length} available) ===`;

  // Write sections in parallel
  console.log('Phase 8: Writing 7 sections in parallel...');
  const agents = SECTIONS.map(s =>
    new Agent(`writer-${s.id}`, llm, {
      system: `You are an academic paper writer. ${s.system}
Target: ${s.words} words. Use formal academic English.

CITATION RULES (MANDATORY — HARD REQUIREMENT):
- Cite using Quarto @citekey format: @Smith2021, [@Chen2023; @Wang2024], @Lee2020
- ONLY use citekeys from the PROVIDED CITEKEY LIST
- You MUST cite at least 5 different citekeys in each major section (Introduction, Related Work, Discussion)
- NEVER write inline references like "(Smith, 2021)" or "Smith (2021)" — ALWAYS use @citekey
- NEVER add a References section or bibliography at the end — Quarto handles this
- NEVER invent citations not in the citekey list

TABLE RULES (MANDATORY):
- Tables use standard markdown pipe format
- Caption goes BELOW the table as ": Caption text {#tbl-label}"
- Do NOT put tbl-colwidths inside the table — put it in the Quarto attribute: {#tbl-label tbl-colwidths="[20,20,20,20,20]"}
- Example:
  | Col1 | Col2 | Col3 |
  |------|------|------|
  | val  | val  | val  |
  : My table caption {#tbl-main tbl-colwidths="[33,33,34]"}

MATH RULES:
- Display equations: use $$ on separate lines (NOT \\[ \\])
- Inline math: use $x$ (NOT \\(x\\))

HEADING RULES:
- Do NOT repeat the section name as a heading
- Use subsection headings (##) for structure within the section`,
    })
  );

  const prompts = SECTIONS.map(s =>
    `Context:\n${context}\n\nTask:\nWrite the "${s.name}" section (${s.words} words).`
  );

  // Write sections sequentially to avoid network overload
  const rawResults = [];
  for (let i = 0; i < agents.length; i++) {
    console.log(`  [${i+1}/${agents.length}] Writing ${SECTIONS[i].id}...`);
    const result = await agents[i].run(prompts[i]);
    rawResults.push(result);
  }

  // Post-process: clean up LLM output
  const results = rawResults.map(text => cleanSection(text));

  // Save individual sections
  await mkdir(join(state.outputDir, 'sections'), { recursive: true });
  for (let i = 0; i < SECTIONS.length; i++) {
    await writeFile(
      join(state.outputDir, 'sections', `${SECTIONS[i].id}.md`),
      results[i]
    );
  }

  // Assemble QMD
  const qmd = await assembleQMD(state, results, bib);
  const qmdPath = join(state.outputDir, 'paper_draft_v0.qmd');
  await writeFile(qmdPath, qmd);

  console.log(`Phase 8: Draft written → ${qmdPath}`);

  // Hard requirement checks
  const qmdContent = qmd;
  const usedCitekeys = [...new Set((qmdContent.match(/@[A-Za-z][A-Za-z0-9]+/g) || [])
    .filter(c => !c.match(/^@(fig|tbl|eq|sec)/)))];
  const tableCount = (qmdContent.match(/^: .+\{#tbl-/gm) || []).length;

  let figCount = 0;
  try {
    const specs = await readFile(join(state.outputDir, 'figures', 'fig_specs.json'), 'utf-8');
    const jsonMatch = specs.match(/\[[\s\S]*\]/);
    figCount = JSON.parse(jsonMatch ? jsonMatch[0] : '[]').length;
  } catch {}

  const warnings = [];
  if (usedCitekeys.length < 20) warnings.push(`Citations: ${usedCitekeys.length}/20 (need ≥20)`);
  if (figCount < 4) warnings.push(`Figures: ${figCount}/4 (need ≥4)`);
  if (tableCount < 4) warnings.push(`Tables: ${tableCount}/4 (need ≥4)`);

  if (warnings.length > 0) {
    console.warn('Phase 8: HARD REQUIREMENT WARNINGS:');
    warnings.forEach(w => console.warn(`  ⚠ ${w}`));
  } else {
    console.log('Phase 8: All hard requirements met ✓');
  }

  return { qmdPath, sections: SECTIONS.map(s => s.id), citations: usedCitekeys.length, figures: figCount, tables: tableCount, warnings };
}

/**
 * Clean up LLM section output:
 * - Remove hand-written reference lists
 * - Fix LaTeX math delimiters
 * - Remove duplicate headings
 */
function cleanSection(text) {
  let cleaned = text;

  // Remove inline reference/bibliography sections
  cleaned = cleaned.replace(/\n---\n[\s\S]*$/m, '');
  cleaned = cleaned.replace(/\n\*\*References:?\*\*[\s\S]*$/mi, '');
  cleaned = cleaned.replace(/\n#{1,3}\s*References[\s\S]*$/mi, '');
  cleaned = cleaned.replace(/\n- [A-Z][a-z]+,\s[A-Z]\.\s.*?\(\d{4}\)\..*$/gm, '');

  // Fix LaTeX: \[ \] → $$, \( \) → $
  cleaned = cleaned.replace(/\\\[/g, '$$').replace(/\\\]/g, '$$');
  cleaned = cleaned.replace(/\\\(/g, '$').replace(/\\\)/g, '$');

  // Remove markdown fences if LLM wrapped output
  cleaned = cleaned.replace(/^```markdown\n?/m, '').replace(/^```\n?$/m, '');

  return cleaned.trim();
}

function extractCitekeys(bib) {
  const matches = bib.matchAll(/@\w+\{([^,]+),/g);
  return [...matches].map(m => m[1].trim());
}

async function assembleQMD(state, sectionResults, bib) {
  const frontmatter = `---
title: "${state.topic}"
author:
  - name: Paper Lab
    affiliation: Cooperation.TW
    email: paperlab@cooperation.tw
date: "${new Date().toISOString().slice(0, 10)}"
format:
  pdf:
    documentclass: article
    geometry: margin=2.5cm
    fontsize: 12pt
    colorlinks: true
    link-citations: true
    citecolor: blue
    keep-tex: true
bibliography: references.bib
---

`;

  // Load tables from Phase 7
  let tables = '';
  try {
    tables = await readFile(join(state.outputDir, 'tables', 'all_tables.md'), 'utf-8');
  } catch {}

  // Load figure specs to build image references
  let figureBlocks = '';
  try {
    const specsRaw = await readFile(join(state.outputDir, 'figures', 'fig_specs.json'), 'utf-8');
    const jsonMatch = specsRaw.match(/\[[\s\S]*\]/);
    const specs = JSON.parse(jsonMatch ? jsonMatch[0] : '[]');
    for (const spec of specs) {
      const pngExists = await readFile(join(state.outputDir, 'figures', `${spec.id}.png`)).then(() => true).catch(() => false);
      if (pngExists) {
        figureBlocks += `\n![${spec.caption || spec.title}](figures/${spec.id}.png){#fig-${spec.id.replace('fig', '')} width=90%}\n\n`;
      }
    }
  } catch {}

  const sections = SECTIONS.map((s, i) => {
    const heading = s.id === 'abstract' ? '' : `# ${s.name}\n\n`;
    let content = heading + sectionResults[i];

    // Insert figures after Methodology section
    if (s.id === 'methods' && figureBlocks) {
      content += '\n\n' + figureBlocks;
    }

    // Insert tables before Results section content
    if (s.id === 'results' && tables) {
      content = heading + tables + '\n\n' + sectionResults[i];
    }

    return content;
  });

  return frontmatter + sections.join('\n\n') + '\n\n# References\n';
}
