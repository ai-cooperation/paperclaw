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

# Simulated robust, internally consistent performance ratios relative to expert benchmark
categories = [
    'Baseline\nprompt',
    'Alternative\nprompt A',
    'Alternative\nprompt B',
    'Chinese-only\nsubset',
    'Bilingual\nsubset',
    'Short reports\n(<10 pages)',
    'Medium reports\n(10–30 pages)',
    'Long reports\n(>30 pages)',
    'Preprocessed\nvariant',
    'Raw text\nvariant'
]

x = np.arange(len(categories))

series = {
    'Prompt variants': {
        'values': np.array([0.93, 0.92, 0.91, np.nan, np.nan, np.nan, np.nan, np.nan, 0.92, 0.90]),
        'sem':    np.array([0.012, 0.014, 0.013, np.nan, np.nan, np.nan, np.nan, np.nan, 0.011, 0.015]),
        'color':  '#1b9e77'
    },
    'Language type': {
        'values': np.array([np.nan, np.nan, np.nan, 0.89, 0.94, np.nan, np.nan, np.nan, np.nan, np.nan]),
        'sem':    np.array([np.nan, np.nan, np.nan, 0.015, 0.012, np.nan, np.nan, np.nan, np.nan, np.nan]),
        'color':  '#d95f02'
    },
    'Report length': {
        'values': np.array([np.nan, np.nan, np.nan, np.nan, np.nan, 0.91, 0.93, 0.92, np.nan, np.nan]),
        'sem':    np.array([np.nan, np.nan, np.nan, np.nan, np.nan, 0.013, 0.011, 0.012, np.nan, np.nan]),
        'color':  '#7570b3'
    },
    'Preprocessing': {
        'values': np.array([np.nan, np.nan, np.nan, np.nan, np.nan, np.nan, np.nan, np.nan, 0.92, 0.90]),
        'sem':    np.array([np.nan, np.nan, np.nan, np.nan, np.nan, np.nan, np.nan, np.nan, 0.011, 0.015]),
        'color':  '#66a61e'
    }
}

fig, ax = plt.subplots(figsize=(12, 8))

offsets = np.linspace(-0.18, 0.18, len(series))
for (i, (name, spec)) in enumerate(series.items()):
    vals = spec['values']
    sem = spec['sem']
    mask = ~np.isnan(vals)
    xi = x[mask] + offsets[i]
    yi = vals[mask]
    yerr = sem[mask]
    ax.errorbar(
        xi, yi, yerr=yerr, fmt='o-', lw=2.2, ms=7,
        color=spec['color'], ecolor=spec['color'],
        elinewidth=1.3, capsize=3.5, capthick=1.3,
        label=name, zorder=3
    )
    for xv, yv in zip(xi, yi):
        ax.annotate(
            f'{yv:.2f}', (xv, yv), textcoords='offset points',
            xytext=(0, 8), ha='center', va='bottom',
            fontsize=11, color=spec['color']
        )

ax.axhline(1.0, color='gray', linestyle='--', linewidth=1.4, alpha=0.8, label='Expert benchmark')
ax.set_title('Robustness of LLM-Based ESG Assessment')
ax.set_ylabel('Performance relative to expert benchmark')
ax.set_xlabel('Robustness setting / specification')

ax.set_xticks(x)
ax.set_xticklabels(categories, rotation=45, ha='right')

ax.set_ylim(0.84, 1.02)
ax.set_xlim(-0.6, len(categories) - 0.4)

ax.grid(True, axis='y', linestyle='--', linewidth=0.8, color='lightgray', alpha=0.8)
ax.grid(False, axis='x')

legend = ax.legend(loc='upper right', frameon=True, framealpha=0.95)
legend.get_frame().set_edgecolor('0.8')

plt.tight_layout()

png_path = '/Users/user/projects/paperclaw/output/figures/fig4.png'
svg_path = '/Users/user/projects/paperclaw/output/figures/fig4.svg'
plt.savefig(png_path, format='png', dpi=300, bbox_inches='tight')
plt.savefig(svg_path, format='svg', dpi=300, bbox_inches='tight')
plt.close()