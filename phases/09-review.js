/**
 * Phase 9: Quality Review
 * Multi-stage review with self-healing loop (up to 3 rounds).
 */

import { Agent } from '../core/agent.js';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const MAX_ROUNDS = 3;
const PASS_THRESHOLD = 80;

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
- [P0] ...
- [P1] ...
- [P2] ...

Be critical but fair. Match Q1 journal standards.`;

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
    const hasP0 = /\bP0\b/i.test(review) || /\bfatal\b/i.test(review);

    logEntries.push(
      `## Round ${currentRound} — ${new Date().toISOString().slice(0, 16)}`,
      `\n**Score**: ${score}/100 (threshold: ${PASS_THRESHOLD})`,
      `**P0 issues**: ${hasP0 ? 'Yes' : 'None'}`,
      `\n### Review\n${review}\n`
    );

    if (score >= PASS_THRESHOLD && !hasP0) {
      passed = true;
      logEntries.push(`\n**Result**: PASSED (${score}/100)\n`);
      console.log(`Phase 9: PASSED with score ${score}/100`);
      break;
    }

    // Fix
    console.log(`Phase 9: Score ${score}/100, fixing issues...`);
    const fixResult = await fixAgent.run(
      `Review report:\n${review}\n\nCurrent draft:\n${draft}\n\nFix all P0 and P1 issues. Output the complete revised paper.`
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
