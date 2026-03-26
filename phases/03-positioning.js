/**
 * Phase 3: Research Positioning
 * Analyzes literature to identify research gaps and position the paper.
 */

import { Agent } from '../core/agent.js';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const SYSTEM = `You are a research positioning expert. Given a research concept and verified literature, produce:

1. **Literature Landscape** — 3-4 paragraphs analyzing the current state of research
2. **Gap Matrix** — A markdown table with columns: Gap | Description | Existing Work | Our Approach
3. **Differentiation Statement** — "Unlike previous work that [X], our study [Y] by [Z]."
4. **Contribution Echo** — Confirm the 3 contributions from Phase 1 have literature support

Output in Markdown. Be specific — cite citekeys from the .bib when referring to existing work.`;

export async function execute(state, llm) {
  const agent = new Agent('positioning-analyst', llm, { system: SYSTEM });

  const concept = await readFile(join(state.outputDir, 'phase1_concept.md'), 'utf-8');
  const bib = await readFile(join(state.outputDir, 'references.bib'), 'utf-8');

  const prompt = `Research concept:\n${concept}\n\nVerified references (.bib):\n${bib}\n\nAnalyze the literature and produce the positioning document.`;
  const result = await agent.run(prompt);

  const outPath = join(state.outputDir, 'phase3_positioning.md');
  await writeFile(outPath, `# Research Positioning\n\n${result}`);

  return { path: outPath, content: result };
}
