/**
 * Phase 7: Results Analysis
 * Analyzes experiment results, generates tables and figures.
 * Figures are generated via Python/matplotlib scripts.
 */

import { Agent, runParallel } from '../core/agent.js';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { execSync } from 'child_process';

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
Output a JSON array of figure specs. At least 3 figures.`;

const PYTHON_SYSTEM = `You are a publication-quality matplotlib expert for academic papers. Generate Python scripts following these STRICT rules:

## Mandatory rcParams (must be at the top of every script)
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np

plt.rcParams.update({
    'font.family': 'serif',
    'font.size': 14,
    'axes.titlesize': 16,
    'axes.titleweight': 'bold',
    'axes.labelsize': 14,
    'axes.labelweight': 'bold',
    'xtick.labelsize': 13,
    'ytick.labelsize': 13,
    'legend.fontsize': 12,
    'figure.dpi': 300,
    'savefig.dpi': 300,
    'savefig.pad_inches': 0.1,
})

## Figure sizing (MANDATORY ratios)
- Heatmap: figsize=(10, 5) — 2:1 landscape
- Bar chart: figsize=(10, 5) — 2:1 landscape
- Scatter plot: figsize=(10, 6) — 5:3
- Framework/flow diagram: figsize=(12, 8) — 3:2
- NEVER make portrait figures (taller than wide)

## Color rules
- Use colorblind-safe palettes: 'tab10', 'Set2', or specific hex codes
- Heatmaps: use 'RdYlGn' or 'YlOrRd' (semantic meaning)
- Comparison bars: use contrasting but harmonious colors
- Never use rainbow colormaps

## Typography rules
- Axis labels: ≥14pt bold (axes.labelsize + labelweight)
- Tick labels: ≥13pt
- Legend: ≥12pt
- Data labels on bars/points: ≥11pt
- NEVER use fig.suptitle() or fig.text() for captions — QMD handles captions
- Title inside the axes is OK: ax.set_title()

## Data rules
- If no real data provided, generate REALISTIC simulated data
- Values must be internally consistent (means, SDs, trends make sense)
- Include error bars (standard error) on bar charts
- Include confidence intervals on scatter regressions

## Layout rules
- Always call plt.tight_layout() before savefig
- No overlapping labels — use rotation=45 for long x-axis labels
- Grid: light gray dashed for scatter/line, none for heatmaps
- Legend: outside or upper-right, never overlapping data

## Output
- Save as PNG (300 DPI) and SVG to the ABSOLUTE paths provided
- Use plt.savefig(path) — no plt.show()
- Call plt.close() at the end

Output ONLY the Python code. No markdown fences, no explanation.`;

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

  // Step 1: Generate tables and figure specs in parallel
  console.log('Phase 7: Generating tables and figure specs...');
  const [tableResult, figureResult] = await runParallel(
    [tableAgent, figureAgent],
    [
      `Context:\n${context}\n\nTask:\nGenerate all tables needed for the paper (at least main results + ablation). Use markdown format.`,
      `Context:\n${context}\n\nTask:\nDesign figure specifications for at least 3 figures. Output as JSON array.`,
    ]
  );

  await writeFile(join(state.outputDir, 'tables', 'all_tables.md'), tableResult);
  await writeFile(join(state.outputDir, 'figures', 'fig_specs.json'), figureResult);

  // Step 2: Generate Python scripts for each figure and execute
  let specs;
  try {
    const jsonMatch = figureResult.match(/\[[\s\S]*\]/);
    specs = JSON.parse(jsonMatch ? jsonMatch[0] : '[]');
  } catch {
    console.warn('Phase 7: Could not parse figure specs JSON, skipping figure generation');
    specs = [];
  }

  const figuresDir = join(state.outputDir, 'figures');

  // Step 2a: Use templates for known figure types, LLM for custom ones
  const templateAgent = new Agent('figure-data-filler', llm, {
    system: `You fill data into figure templates. Given a figure spec and paper context, output ONLY a JSON object with the exact fields needed for the template. No explanation, just JSON.

For "framework" type: { "title": "...", "rows": [{"label": "Phase/Layer name", "items": [{"text": "Box label", "color": "#hex"}]}] }
For "heatmap" type: { "title": "...", "xLabels": [...], "yLabels": [...], "data": [[...]], "cmap": "RdYlGn" }
For "bar" type: { "title": "...", "groups": [...], "categories": [...], "values": [[...]], "errors": [[...]], "ylabel": "..." }
For "scatter" type: { "title": "...", "xlabel": "...", "ylabel": "...", "series": [{"label": "...", "x": [...], "y": [...]}] }`
  });

  const { frameworkTemplate, heatmapTemplate, barChartTemplate, scatterTemplate } = await import('../tools/figure-templates.js');
  const pythonAgent = new Agent('figure-coder', llm, { system: PYTHON_SYSTEM });

  for (const spec of specs) {
    console.log(`Phase 7: Generating ${spec.id} (${spec.type})...`);
    const pngPath = join(figuresDir, `${spec.id}.png`);
    const svgPath = join(figuresDir, `${spec.id}.svg`);

    try {
      let pyCode;
      const typeNorm = spec.type.toLowerCase().split('|')[0].trim();

      if (['framework', 'heatmap', 'bar', 'scatter'].includes(typeNorm)) {
        // Template path: LLM fills data, template handles layout
        const dataJson = await templateAgent.run(
          `Figure spec:\n${JSON.stringify(spec)}\n\nPaper context:\n${context.slice(0, 2000)}\n\nOutput JSON for "${typeNorm}" template.`
        );

        let data;
        try {
          const jsonMatch = dataJson.match(/\{[\s\S]*\}/);
          data = JSON.parse(jsonMatch ? jsonMatch[0] : '{}');
        } catch { data = {}; }

        const templateMap = { framework: frameworkTemplate, heatmap: heatmapTemplate, bar: barChartTemplate, scatter: scatterTemplate };
        pyCode = templateMap[typeNorm](data, pngPath, svgPath);
      } else {
        // Fallback: LLM writes full Python
        const rawCode = await pythonAgent.run(
          `Generate a Python matplotlib script for:\n${JSON.stringify(spec)}\n\nSave PNG to: ${pngPath}\nSave SVG to: ${svgPath}`
        );
        pyCode = rawCode.replace(/^```python\n?/m, '').replace(/^```\n?/m, '').trim();
      }

      const scriptPath = join(figuresDir, `gen_${spec.id}.py`);
      await writeFile(scriptPath, pyCode);

      try {
        execSync(`python3 "${scriptPath}"`, { timeout: 30000, stdio: 'pipe' });
        console.log(`  ✓ ${spec.id}.png generated`);
      } catch (execErr) {
        console.warn(`  ✗ ${spec.id} execution failed: ${execErr.stderr?.toString().slice(-200) || execErr.message?.slice(0, 200)}`);
      }
    } catch (err) {
      console.warn(`  ✗ ${spec.id} failed: ${err.message?.slice(0, 150)}`);
    }
  }

  // Check what was actually generated
  const generated = [];
  for (const spec of specs) {
    try {
      const stat = await import('fs').then(fs => fs.statSync(join(figuresDir, `${spec.id}.png`)));
      if (stat.size > 1000) generated.push(spec.id);
    } catch {}
  }

  console.log(`Phase 7: ${generated.length}/${specs.length} figures generated: ${generated.join(', ') || 'none'}`);

  return {
    tablesPath: join(state.outputDir, 'tables', 'all_tables.md'),
    figSpecsPath: join(state.outputDir, 'figures', 'fig_specs.json'),
    figuresGenerated: generated,
  };
}
