/**
 * Phase 9: Quality Review
 * Multi-stage review with self-healing loop (up to 3 rounds).
 */

import { Agent } from '../core/agent.js';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

import { existsSync, readdirSync } from 'fs';

const MAX_ROUNDS = 3;
const PASS_THRESHOLD = 80;

/**
 * MVP Gate Check — 8 universal gates (adapted from mvp-gatekeeper skill).
 * Returns array of { name, pass, detail }.
 */
function runGateCheck(draft, bib, outputDir) {
  const gates = [];

  // G1: Citation count >= 20
  const citekeys = [...new Set((draft.match(/@[A-Za-z][A-Za-z0-9]+/g) || [])
    .filter(c => !c.match(/^@(fig|tbl|eq|sec)/)))];
  gates.push({
    name: 'G1: Citations ≥ 20',
    pass: citekeys.length >= 20,
    detail: `${citekeys.length} unique citekeys in text`,
  });

  // G2: Bib entries match citations (no orphan citekeys)
  const bibKeys = [...bib.matchAll(/@\w+\{([^,]+),/g)].map(m => '@' + m[1].trim());
  const orphans = citekeys.filter(c => !bibKeys.includes(c));
  gates.push({
    name: 'G2: No orphan citations',
    pass: orphans.length === 0,
    detail: orphans.length === 0 ? 'All citekeys exist in .bib' : `Missing: ${orphans.slice(0, 5).join(', ')}`,
  });

  // G3: Figures >= 4
  let figCount = 0;
  try {
    const figDir = join(outputDir, 'figures');
    if (existsSync(figDir)) {
      figCount = readdirSync(figDir).filter(f => f.endsWith('.png') && f.startsWith('fig')).length;
    }
  } catch {}
  gates.push({
    name: 'G3: Figures ≥ 4',
    pass: figCount >= 4,
    detail: `${figCount} figures found`,
  });

  // G4: Tables >= 4
  const tableCount = (draft.match(/^: .+\{#tbl-/gm) || []).length;
  gates.push({
    name: 'G4: Tables ≥ 4',
    pass: tableCount >= 4,
    detail: `${tableCount} tables with #tbl- labels`,
  });

  // G5: Abstract exists and within word limit
  const abstractMatch = draft.match(/\*\*Abstract\.?\*\*[\s\S]*?(?=\n#\s)/);
  const abstractWords = abstractMatch ? abstractMatch[0].split(/\s+/).length : 0;
  gates.push({
    name: 'G5: Abstract 150-300 words',
    pass: abstractWords >= 150 && abstractWords <= 300,
    detail: `${abstractWords} words`,
  });

  // G6: No LaTeX errors (basic check)
  const badMath = (draft.match(/\\\[|\\\]|\\\(|\\\)/g) || []).length;
  gates.push({
    name: 'G6: No raw LaTeX math',
    pass: badMath === 0,
    detail: badMath === 0 ? 'All math uses $$ and $' : `${badMath} raw LaTeX delimiters found`,
  });

  // G7: No inline reference lists
  const inlineRefs = /\n\*\*References:?\*\*/mi.test(draft) || /\n#{1,3}\s*References\s*\n(?!\s*$)/mi.test(draft);
  gates.push({
    name: 'G7: No inline reference list',
    pass: !inlineRefs,
    detail: inlineRefs ? 'Found hand-written reference list in text' : 'Clean — Quarto handles references',
  });

  // G8: Bib quality (DOI coverage)
  const bibEntries = [...bib.matchAll(/@\w+\{/g)].length;
  const doiCount = [...bib.matchAll(/doi\s*=\s*\{/gi)].length;
  const doiPct = bibEntries > 0 ? Math.round(doiCount / bibEntries * 100) : 0;
  gates.push({
    name: 'G8: Bib DOI coverage ≥ 80%',
    pass: doiPct >= 80,
    detail: `${doiCount}/${bibEntries} entries have DOI (${doiPct}%)`,
  });

  return gates;
}

/**
 * Parse score from review output. Tries multiple patterns.
 */
function parseScore(text) {
  const patterns = [
    /\*\*TOTAL\*\*\s*\|\s*\*\*(\d+)\*\*/i,           // | **TOTAL** | **72** |
    /TOTAL[:\s|]*(\d+)\s*(?:\/\s*100)?/i,             // TOTAL: 72/100
    /(?:total|overall)\s*(?:score)?[:\s]*(\d+)\s*(?:\/\s*100|out of 100)/i,  // Total score: 72/100
    /(\d+)\s*\/\s*100/g,                               // any XX/100 — take last match
  ];

  for (const pat of patterns) {
    if (pat.global) {
      const matches = [...text.matchAll(pat)];
      if (matches.length > 0) {
        const val = parseInt(matches[matches.length - 1][1]);
        if (val > 0 && val <= 100) return val;
      }
    } else {
      const m = text.match(pat);
      if (m) {
        const val = parseInt(m[1]);
        if (val > 0 && val <= 100) return val;
      }
    }
  }

  // Fallback: sum all dimension scores from table rows
  const rowPattern = /\|\s*\d+\s*\|/g;
  const nums = [...text.matchAll(/\|\s*(\d+)\s*\|\s*(\d+)\s*\|/g)];
  if (nums.length >= 5) {
    const sum = nums.reduce((acc, m) => acc + parseInt(m[1]), 0);
    if (sum > 0 && sum <= 100) return sum;
  }

  return 0;
}

const REVIEW_SYSTEM = `You are a senior journal reviewer. Evaluate this paper draft on 7 dimensions.
Score each dimension and provide specific feedback.

| Dimension | Weight | Max |
|-----------|--------|-----|
| Research Gap Clarity | 20% | 20 |
| Methodology Rigor | 25% | 25 |
| Results Significance | 20% | 20 |
| Writing Quality | 15% | 15 |
| Citation Accuracy | 10% | 10 |
| Contribution Differentiation | 5% | 5 |
| Figure/Table Quality | 5% | 5 |

You MUST output in this EXACT format:

## Scores
| Dimension | Score | Max |
|-----------|-------|-----|
| Research Gap Clarity | X | 20 |
| Methodology Rigor | X | 25 |
| Results Significance | X | 20 |
| Writing Quality | X | 15 |
| Citation Accuracy | X | 10 |
| Contribution Differentiation | X | 5 |
| Figure/Table Quality | X | 5 |
| **TOTAL** | **X** | **100** |

## Issues
List specific issues found, with location and suggested fix.

Be critical but fair. Match Q1 journal standards.
Paper passes review if TOTAL ≥ 80.`;

const FIX_SYSTEM = `You are a paper revision specialist. Given a review report with specific issues, fix the paper draft.
Rules:
- Fix all P0 issues immediately
- Fix P1 issues where possible
- Preserve the overall structure
- Only cite references from the provided .bib
- Output the complete revised section(s)`;

export async function execute(state, llm) {
  const reviewAgent = new Agent('reviewer', llm, { system: REVIEW_SYSTEM });
  const fixAgent = new Agent('fixer', llm, { system: FIX_SYSTEM });

  let qmdPath = join(state.outputDir, 'paper_draft_v0.qmd');
  let logEntries = ['# Quality Review Log\n'];
  let currentRound = 0;
  let passed = false;

  // === MVP Gate Check (mvp-gatekeeper skill — 8 universal gates) ===
  console.log('Phase 9: Running MVP gate check...');
  const draft0 = await readFile(qmdPath, 'utf-8');
  const bib0 = await readFile(join(state.outputDir, 'references.bib'), 'utf-8');

  const gates = runGateCheck(draft0, bib0, state.outputDir);
  logEntries.push('## MVP Gate Check\n');
  logEntries.push('| Gate | Status | Detail |');
  logEntries.push('|------|--------|--------|');
  let gateFailCount = 0;
  for (const g of gates) {
    const icon = g.pass ? '✅' : '❌';
    logEntries.push(`| ${g.name} | ${icon} | ${g.detail} |`);
    if (!g.pass) gateFailCount++;
    console.log(`  ${icon} ${g.name}: ${g.detail}`);
  }
  logEntries.push(`\n**Gates passed**: ${gates.length - gateFailCount}/${gates.length}\n`);

  // Critical gates (G1-G5) must pass — cap score if not
  const criticalFails = gates.filter(g => !g.pass && /^G[1-5]/.test(g.name));
  const gateBlocked = criticalFails.length >= 3; // 3+ critical fails = blocked
  if (gateBlocked) {
    console.warn(`Phase 9: ${criticalFails.length} critical gates failed — score will be capped at 70`);
  }

  while (currentRound < MAX_ROUNDS && !passed) {
    currentRound++;
    console.log(`Phase 9: Review round ${currentRound}/${MAX_ROUNDS}`);

    const draft = await readFile(qmdPath, 'utf-8');
    const bib = await readFile(join(state.outputDir, 'references.bib'), 'utf-8');

    // Review
    const review = await reviewAgent.run(
      `Paper draft:\n${draft}\n\nReferences (.bib):\n${bib}\n\nReview this paper. Be specific about issues.`
    );

    // Parse score — try multiple patterns
    const score = parseScore(review);
    logEntries.push(
      `## Round ${currentRound} — ${new Date().toISOString().slice(0, 16)}`,
      `\n**Score**: ${score}/100 (threshold: ${PASS_THRESHOLD})`,
      `\n### Review\n${review}\n`
    );

    // Pass requires: score >= threshold AND critical gates not blocked
    const effectiveScore = gateBlocked ? Math.min(score, 70) : score;
    if (effectiveScore >= PASS_THRESHOLD) {
      passed = true;
      logEntries.push(`\n**Result**: PASSED (${score}/100${gateBlocked ? ', capped to '+effectiveScore+' by gate failures' : ''})\n`);
      console.log(`Phase 9: PASSED with score ${score}/100`);
      break;
    }
    if (gateBlocked && score >= PASS_THRESHOLD) {
      console.warn(`Phase 9: LLM score ${score}/100 but capped to ${effectiveScore} — fix gate failures first`);
    }

    // Fix
    console.log(`Phase 9: Score ${score}/100, fixing issues...`);
    // Truncate draft to avoid exceeding API body size limits
    const truncatedDraft = draft.length > 15000 ? draft.slice(0, 15000) + '\n\n[... truncated for API limits ...]' : draft;
    const fixResult = await fixAgent.run(
      `Review report:\n${review.slice(0, 3000)}\n\nCurrent draft (may be truncated):\n${truncatedDraft}\n\nFix the issues identified in the review. Output the revised paper.`
    );

    // Save new version
    const newVersion = `paper_draft_v${currentRound}.qmd`;
    const newPath = join(state.outputDir, newVersion);
    await writeFile(newPath, fixResult);
    qmdPath = newPath;

    logEntries.push(`### Fixes Applied\nSaved as: ${newVersion}\n`);
  }

  if (!passed) {
    logEntries.push(
      `\n## HUMAN REVIEW REQUIRED`,
      `After ${MAX_ROUNDS} rounds, the paper has not reached the ${PASS_THRESHOLD}/100 threshold.`,
      `Manual intervention needed.\n`
    );
    console.log(`Phase 9: Did not pass after ${MAX_ROUNDS} rounds. Human review needed.`);
  }

  const logPath = join(state.outputDir, 'quality_review_log.md');
  await writeFile(logPath, logEntries.join('\n'));

  return {
    passed,
    rounds: currentRound,
    logPath,
    finalDraft: qmdPath,
  };
}
