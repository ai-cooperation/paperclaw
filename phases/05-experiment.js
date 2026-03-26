/**
 * Phase 5: Experiment Design
 * Designs experiment protocols, baselines, ablation plans.
 * Skipped in MVP mode.
 */

import { Agent } from '../core/agent.js';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const SYSTEM = `You are an experiment design specialist. Given the paper structure and research questions, produce:

1. **Experiment Protocol** — Step-by-step procedure
2. **Dataset Specification** — Sources, splits, preprocessing
3. **Baseline Selection** — At least 3 baselines with justification
4. **Ablation Plan** — Components to isolate, expected outcomes
5. **Evaluation Metrics** — Primary and secondary metrics with definitions
6. **Reproducibility Checklist** — Seeds, hardware, hyperparameters

Output in Markdown with clear structure.`;

export async function execute(state, llm) {
  if (state.mode === 'mvp') {
    console.log('Phase 5 (experiment design): Skipped in MVP mode');
    const outPath = join(state.outputDir, 'phase5_experiment.md');
    await writeFile(outPath, '# Experiment Design\n\n> Skipped in MVP mode. Add experiment details when data is available.\n');
    return { path: outPath, skipped: true };
  }

  const agent = new Agent('experiment-designer', llm, { system: SYSTEM });

  const structure = await readFile(join(state.outputDir, 'phase4_structure.md'), 'utf-8');
  const concept = await readFile(join(state.outputDir, 'phase1_concept.md'), 'utf-8');

  const result = await agent.runWithContext(
    `${concept}\n\n${structure}`,
    'Design the complete experiment protocol.'
  );

  const outPath = join(state.outputDir, 'phase5_experiment.md');
  await writeFile(outPath, `# Experiment Design\n\n${result}`);

  return { path: outPath, content: result };
}
