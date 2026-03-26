/**
 * Phase 7: Results Analysis
 * Analyzes experiment results, generates tables and figure specifications.
 */

import { Agent, runParallel } from '../core/agent.js';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const TABLE_SYSTEM = `You are a results table specialist. Generate publication-ready markdown tables from experiment results. Rules:
- All cells must have visible values (no blanks)
- Use 3 decimal places for metrics
- Bold the best result in each column
- Include statistical significance markers (* p<0.05, ** p<0.01, *** p<0.001)
- Add tbl-colwidths for Quarto compatibility`;

const FIGURE_SYSTEM = `You are a figure specification designer. For each figure needed, produce a JSON specification:
{
  "id": "fig1",
  "type": "heatmap|bar|line|scatter|framework",
  "title": "...",
  "caption": "...",
  "data_source": "which table/results",
  "narrative_role": "Framework|Main Results|Comparison|Ablation|Mechanism",
  "axes": { "x": "...", "y": "..." },
  "notes": "implementation hints"
}
Output a JSON array of figure specs.`;

export async function execute(state, llm) {
  const tableAgent = new Agent('table-generator', llm, { system: TABLE_SYSTEM });
  const figureAgent = new Agent('figure-designer', llm, { system: FIGURE_SYSTEM });

  const structure = await readFile(join(state.outputDir, 'phase4_structure.md'), 'utf-8');

  // Try to load real or simulated results
  let results;
  try {
    results = await readFile(join(state.outputDir, 'phase6_simulated_results.md'), 'utf-8');
  } catch {
    try {
      results = await readFile(join(state.outputDir, 'phase6_execution.md'), 'utf-8');
    } catch {
      results = 'No experiment results available yet.';
    }
  }

  const context = `${structure}\n\nResults:\n${results}`;

  // Run table and figure agents in parallel
  const [tableResult, figureResult] = await runParallel(
    [tableAgent, figureAgent],
    [
      `Context:\n${context}\n\nTask:\nGenerate all tables needed for the paper (at least main results + ablation). Use markdown format.`,
      `Context:\n${context}\n\nTask:\nDesign figure specifications for at least 3 figures. Output as JSON array.`,
    ]
  );

  await writeFile(join(state.outputDir, 'tables', 'all_tables.md'), tableResult);
  await writeFile(join(state.outputDir, 'figures', 'fig_specs.json'), figureResult);

  return {
    tablesPath: join(state.outputDir, 'tables', 'all_tables.md'),
    figSpecsPath: join(state.outputDir, 'figures', 'fig_specs.json'),
  };
}
