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

  const context = `CONCEPT:\n${concept}\n\nPOSITIONING:\n${positioning}\n\nSTRUCTURE:\n${structure}\n\nTABLES:\n${tables}\n\nAVAILABLE CITEKEYS (from .bib):\n${extractCitekeys(bib).join(', ')}`;

  // Write sections in parallel
  console.log('Phase 8: Writing 7 sections in parallel...');
  const agents = SECTIONS.map(s =>
    new Agent(`writer-${s.id}`, llm, {
      system: `You are an academic paper writer. ${s.system}
Target: ${s.words} words. Use formal academic English.

CITATION RULES (MANDATORY):
- Cite using Quarto @citekey format: @Smith2021, [@Chen2023; @Wang2024], @Lee2020
- ONLY use citekeys from the provided list below
- NEVER write inline references like "(Smith, 2021)" or "Smith (2021)" — use @Smith2021
- NEVER add a References section or bibliography at the end — Quarto handles this automatically
- NEVER invent citations not in the citekey list

MATH RULES:
- Display equations: use $$ on separate lines (NOT \\[ \\])
- Inline math: use $x$ (NOT \\(x\\))

HEADING RULES:
- Do NOT repeat the section name as a heading (e.g., don't write "## Introduction" if section is Introduction)
- Use subsection headings (##) for structure within the section`,
    })
  );

  const prompts = SECTIONS.map(s =>
    `Context:\n${context}\n\nTask:\nWrite the "${s.name}" section (${s.words} words).`
  );

  const rawResults = await runParallel(agents, prompts);

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
  const qmd = assembleQMD(state, results, bib);
  const qmdPath = join(state.outputDir, 'paper_draft_v0.qmd');
  await writeFile(qmdPath, qmd);

  console.log(`Phase 8: Draft written → ${qmdPath}`);

  return { qmdPath, sections: SECTIONS.map(s => s.id) };
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

function assembleQMD(state, sectionResults, bib) {
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

  const sections = SECTIONS.map((s, i) => {
    const heading = s.id === 'abstract' ? '' : `# ${s.name}\n\n`;
    return heading + sectionResults[i];
  });

  return frontmatter + sections.join('\n\n') + '\n\n# References\n';
}
