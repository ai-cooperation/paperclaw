/**
 * Phase 6: Experiment Execution
 * Runs experiments or generates simulated data for MVP mode.
 * Skipped in MVP mode.
 */

import { Agent } from '../core/agent.js';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const SYSTEM = `You are a results simulation expert. Given the experiment design and expected outcomes, generate statistically coherent simulated results:

1. All values must be internally consistent (means, SDs, t-stats, p-values)
2. Effect sizes should be realistic for the domain
3. Mark all simulated values with [S] annotation
4. Generate markdown tables ready for paper insertion

This is for MVP draft purposes only — real experiments will replace these values.`;

export async function execute(state, llm) {
  if (state.mode === 'mvp') {
    console.log('Phase 6 (execution): Skipped in MVP mode — generating simulated placeholders');
    const agent = new Agent('data-simulator', llm, { system: SYSTEM });

    const experiment = await readFile(join(state.outputDir, 'phase5_experiment.md'), 'utf-8');
    const structure = await readFile(join(state.outputDir, 'phase4_structure.md'), 'utf-8');

    const result = await agent.runWithContext(
      `${structure}\n\n${experiment}`,
      'Generate simulated results tables with [S] markers for all values. Include main comparison table and ablation table.'
    );

    const outPath = join(state.outputDir, 'phase6_simulated_results.md');
    await writeFile(outPath, `# Simulated Results [MVP]\n\n> All values marked [S] are simulated and must be replaced with real data.\n\n${result}`);

    return { path: outPath, simulated: true };
  }

  // Full mode: placeholder for user-provided results
  console.log('Phase 6 (execution): Looking for results in output/results/');
  const outPath = join(state.outputDir, 'phase6_execution.md');
  await writeFile(outPath, '# Experiment Execution\n\n> Place your experiment results in output/results/ directory.\n> Supported formats: .csv, .json, .pkl\n');

  return { path: outPath, status: 'awaiting_results' };
}
