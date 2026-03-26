/**
 * Phase 4: Paper Structure
 * Creates paper skeleton with section outlines, figure/table plan.
 */

import { Agent } from '../core/agent.js';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const SYSTEM = `You are an academic paper architect. Given the research concept, positioning, and references, produce a detailed paper structure:

1. **Section Outline** — For each section (Abstract, Introduction, Related Work, Methodology, Results, Discussion, Conclusion), provide:
   - Key arguments / subsections
   - Target word count
   - Which references to cite (by citekey)

2. **Figure Plan** — At least 3 figures:
   - fig1: Framework / architecture diagram
   - fig2: Main results visualization
   - fig3+: Additional (comparison, ablation, etc.)
   For each: type, caption, data source, narrative role

3. **Table Plan** — At least 2 tables:
   - tbl1: Dataset / experimental setup
   - tbl2: Main results comparison
   For each: columns, rows, data source

4. **Research Contract** — Formalized scope:
   - RQs, hypotheses, methods, expected outcomes, limitations

Output everything in Markdown.`;

export async function execute(state, llm) {
  const agent = new Agent('paper-architect', llm, { system: SYSTEM });

  const concept = await readFile(join(state.outputDir, 'phase1_concept.md'), 'utf-8');
  const positioning = await readFile(join(state.outputDir, 'phase3_positioning.md'), 'utf-8');
  const bib = await readFile(join(state.outputDir, 'references.bib'), 'utf-8');

  const prompt = `Concept:\n${concept}\n\nPositioning:\n${positioning}\n\nReferences:\n${bib}\n\n${state.journal ? `Target journal: ${state.journal}` : ''}\n\nDesign the paper structure.`;
  const result = await agent.run(prompt);

  await mkdir(join(state.outputDir, 'figures'), { recursive: true });
  await mkdir(join(state.outputDir, 'tables'), { recursive: true });
  await mkdir(join(state.outputDir, 'sections'), { recursive: true });

  const outPath = join(state.outputDir, 'phase4_structure.md');
  await writeFile(outPath, `# Paper Structure\n\n${result}`);

  return { path: outPath, content: result };
}
