/**
 * Figure template library for PaperClaw.
 * Pre-designed matplotlib templates — LLM fills in content, not layout.
 */

/**
 * Framework diagram template: top-down flow with 3-5 boxes per row.
 * @param {Object} spec - { title, rows: [{ label, items: [{text, color}] }] }
 * @param {string} pngPath - output PNG path
 * @param {string} svgPath - output SVG path
 */
export function frameworkTemplate(spec, pngPath, svgPath) {
  const rows = spec.rows || [];
  const nRows = rows.length;

  return `
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as patches

plt.rcParams.update({
    'font.family': 'serif',
    'font.size': 14,
    'figure.dpi': 300,
    'savefig.dpi': 300,
    'savefig.pad_inches': 0.1,
})

fig, ax = plt.subplots(figsize=(12, ${2 + nRows * 2}))
ax.set_xlim(0, 10)
ax.set_ylim(0, ${nRows * 2 + 1})
ax.axis('off')

COLORS = ['#2563eb', '#16a34a', '#ca8a04', '#dc2626', '#7c3aed', '#0891b2']

${rows.map((row, ri) => {
  const y = (nRows - ri) * 2;
  const items = row.items || [];
  const n = items.length;
  const spacing = 10 / (n + 1);

  let code = `# Row ${ri}: ${row.label}\n`;
  code += `ax.text(5, ${y + 0.8}, '${row.label}', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')\n`;

  items.forEach((item, ii) => {
    const x = spacing * (ii + 1);
    const color = item.color || `COLORS[${ii % 6}]`;
    code += `rect = patches.FancyBboxPatch((${(x - 0.9).toFixed(1)}, ${(y - 0.4).toFixed(1)}), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='${typeof color === 'string' && color.startsWith('#') ? color : "white"}', edgecolor='#333', linewidth=1.5)\n`;
    code += `ax.add_patch(rect)\n`;
    code += `ax.text(${x.toFixed(1)}, ${y.toFixed(1)}, '${item.text}', ha='center', va='center', fontsize=13, fontweight='bold', color='${typeof color === 'string' && color.startsWith('#') ? 'white' : '#333'}')\n`;
  });

  // Arrows between rows
  if (ri < nRows - 1) {
    const nextItems = rows[ri + 1].items || [];
    const nextN = nextItems.length;
    const nextSpacing = 10 / (nextN + 1);
    code += `ax.annotate('', xy=(5, ${(y - 0.5).toFixed(1)}), xytext=(5, ${(y - 1.2).toFixed(1)}), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))\n`;
  }

  return code;
}).join('\n')}

ax.set_title('${spec.title || "Framework"}', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.savefig('${pngPath}')
plt.savefig('${svgPath}')
plt.close()
`;
}

/**
 * Heatmap template: databases × fields comparison.
 * @param {Object} spec - { title, xLabels, yLabels, data (2D array), cmap }
 */
export function heatmapTemplate(spec, pngPath, svgPath) {
  const data = JSON.stringify(spec.data || []);
  return `
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
    'figure.dpi': 300,
    'savefig.dpi': 300,
})

data = np.array(${data})
fig, ax = plt.subplots(figsize=(10, 5))
im = ax.imshow(data, cmap='${spec.cmap || 'RdYlGn'}', aspect='auto', vmin=${spec.vmin || 0}, vmax=${spec.vmax || 1})

ax.set_xticks(range(len(${JSON.stringify(spec.xLabels || [])})))
ax.set_xticklabels(${JSON.stringify(spec.xLabels || [])}, rotation=0)
ax.set_yticks(range(len(${JSON.stringify(spec.yLabels || [])})))
ax.set_yticklabels(${JSON.stringify(spec.yLabels || [])})

# Add value annotations
for i in range(data.shape[0]):
    for j in range(data.shape[1]):
        val = data[i, j]
        color = 'white' if val < 0.5 else 'black'
        ax.text(j, i, f'{val:.2f}', ha='center', va='center', fontsize=13, fontweight='bold', color=color)

cbar = fig.colorbar(im, ax=ax, shrink=0.8)
cbar.ax.tick_params(labelsize=12)
ax.set_title('${spec.title || ""}', fontsize=16, fontweight='bold')
plt.tight_layout()
plt.savefig('${pngPath}')
plt.savefig('${svgPath}')
plt.close()
`;
}

/**
 * Grouped bar chart template with error bars.
 * @param {Object} spec - { title, groups, categories, values (2D), errors (2D), ylabel }
 */
export function barChartTemplate(spec, pngPath, svgPath) {
  return `
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
})

groups = ${JSON.stringify(spec.groups || [])}
categories = ${JSON.stringify(spec.categories || [])}
values = np.array(${JSON.stringify(spec.values || [])})
errors = np.array(${JSON.stringify(spec.errors || [])})

x = np.arange(len(groups))
width = ${(0.8 / (spec.categories || []).length).toFixed(2)}
colors = ['#2563eb', '#16a34a', '#ca8a04', '#dc2626', '#7c3aed']

fig, ax = plt.subplots(figsize=(10, 5))
for i, cat in enumerate(categories):
    offset = (i - len(categories)/2 + 0.5) * width
    bars = ax.bar(x + offset, values[i], width, yerr=errors[i] if errors.size > 0 else None,
                  label=cat, color=colors[i % len(colors)], capsize=3, edgecolor='white', linewidth=0.5)
    for bar, val in zip(bars, values[i]):
        ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.01,
                f'{val:.2f}', ha='center', va='bottom', fontsize=11)

ax.set_xticks(x)
ax.set_xticklabels(groups)
ax.set_ylabel('${spec.ylabel || "Score"}')
ax.set_title('${spec.title || ""}', fontsize=16, fontweight='bold')
ax.legend(loc='upper right', framealpha=0.9)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
plt.tight_layout()
plt.savefig('${pngPath}')
plt.savefig('${svgPath}')
plt.close()
`;
}

/**
 * Scatter plot with regression line template.
 * @param {Object} spec - { title, xlabel, ylabel, series: [{label, x, y, color}] }
 */
export function scatterTemplate(spec, pngPath, svgPath) {
  return `
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
})

fig, ax = plt.subplots(figsize=(10, 6))
colors = ['#2563eb', '#16a34a', '#dc2626', '#ca8a04', '#7c3aed', '#0891b2', '#be185d', '#854d0e', '#4338ca', '#0d9488']

${(spec.series || []).map((s, i) => `
x${i} = np.array(${JSON.stringify(s.x || [])})
y${i} = np.array(${JSON.stringify(s.y || [])})
ax.scatter(x${i}, y${i}, label='${s.label}', color=${s.color ? `'${s.color}'` : `colors[${i}]`}, s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z${i} = np.polyfit(x${i}, y${i}, 1)
p${i} = np.poly1d(z${i})
xs${i} = np.linspace(x${i}.min(), x${i}.max(), 100)
ax.plot(xs${i}, p${i}(xs${i}), '--', color=${s.color ? `'${s.color}'` : `colors[${i}]`}, alpha=0.5, linewidth=1.5)
`).join('')}

ax.set_xlabel('${spec.xlabel || "X"}')
ax.set_ylabel('${spec.ylabel || "Y"}')
ax.set_title('${spec.title || ""}', fontsize=16, fontweight='bold')
ax.legend(loc='best', framealpha=0.9)
ax.grid(True, linestyle='--', alpha=0.3)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
plt.tight_layout()
plt.savefig('${pngPath}')
plt.savefig('${svgPath}')
plt.close()
`;
}
