/**
 * Phase 1: Concept Validation
 * Validates research question, hypothesis, and contributions.
 */

import { Agent } from '../core/agent.js';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const SYSTEM = `You are a research concept advisor. Given a research topic, produce:
1. A clear, answerable research question
2. A testable hypothesis
3. Three contributions (technical, empirical, practical)
4. Three limitations in existing literature (research gaps)
5. Suggested target journal with rationale

Output in Markdown format with clear headings.`;

export async function execute(state, llm) {
  const agent = new Agent('concept-validator', llm, { system: SYSTEM });

  const prompt = `Research topic: ${state.topic}
${state.journal ? `Target journal: ${state.journal}` : ''}

Generate a research concept document.`;

  const result = await agent.run(prompt);

  // Write output
  await mkdir(state.outputDir, { recursive: true });
  const outPath = join(state.outputDir, 'phase1_concept.md');
  await writeFile(outPath, `# Research Concept — ${state.topic}\n\n${result}`);

  return { path: outPath, content: result };
}
