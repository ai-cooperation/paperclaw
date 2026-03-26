/**
 * Phase 11: Rebuttal
 * Structures reviewer comments into actionable revision plan and drafts responses.
 * Triggered on demand (not part of automatic pipeline).
 */

import { Agent } from '../core/agent.js';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const PARSE_SYSTEM = `You are a rebuttal specialist. Parse reviewer comments into a structured matrix.

For each comment, extract:
1. Reviewer ID (R1, R2, R3)
2. Comment number
3. Type: Major / Minor / Positive
4. Category: Methodology / Results / Writing / References / Scope / Other
5. The exact comment text
6. Required action: Revise text / Add experiment / Add reference / Clarify / No action
7. Affected section(s)

Output as a markdown table.`;

const RESPONSE_SYSTEM = `You are a rebuttal response writer. For each reviewer comment, draft a response following this structure:

**Comment [R#-C#]:** [paraphrase the concern]

**Response:** [2-4 sentences addressing the concern directly]

**Changes made:** [specific changes with page/section references]

Rules:
- Be respectful and grateful, even for critical comments
- Never dismiss a comment — address it substantively
- If you disagree, provide evidence
- Reference specific changes in the manuscript
- Use phrases like "We thank the reviewer..." or "We have addressed this by..."`;

export async function execute(state, llm) {
  // Look for reviewer comments file
  const commentsPath = join(state.outputDir, 'reviewer_comments.md');
  let comments;
  try {
    comments = await readFile(commentsPath, 'utf-8');
  } catch {
    console.log('Phase 11: No reviewer_comments.md found.');
    console.log('Place reviewer comments in output/reviewer_comments.md and re-run.');
    return { status: 'awaiting_comments' };
  }

  const draft = await readFile(
    join(state.outputDir, 'paper_draft_v0.qmd'),
    'utf-8'
  ).catch(() => '');

  // Step 1: Parse comments into matrix
  console.log('Phase 11: Parsing reviewer comments...');
  const parseAgent = new Agent('comment-parser', llm, { system: PARSE_SYSTEM });
  const matrix = await parseAgent.run(
    `Reviewer comments:\n${comments}\n\nParse into structured matrix.`
  );

  await writeFile(join(state.outputDir, 'rebuttal_matrix.md'), matrix);

  // Step 2: Draft responses
  console.log('Phase 11: Drafting responses...');
  const responseAgent = new Agent('response-writer', llm, { system: RESPONSE_SYSTEM });
  const responses = await responseAgent.run(
    `Reviewer comment matrix:\n${matrix}\n\nCurrent manuscript (excerpt):\n${draft.slice(0, 3000)}\n\nDraft point-by-point responses for all comments.`
  );

  await writeFile(join(state.outputDir, 'response_to_reviewers.md'), responses);

  console.log('Phase 11: Rebuttal materials ready');
  console.log('  - rebuttal_matrix.md');
  console.log('  - response_to_reviewers.md');

  return {
    matrixPath: join(state.outputDir, 'rebuttal_matrix.md'),
    responsePath: join(state.outputDir, 'response_to_reviewers.md'),
  };
}
