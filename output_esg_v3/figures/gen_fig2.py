
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

groups = ["Precision","Recall","F1 Score","Cohen’s Kappa"]
categories = ["Manual","Rule-based","LLM-Assisted"]
values = np.array([[0.72,0.68,0.85],[0.7,0.67,0.83],[0.71,0.67,0.84],[0.65,0.6,0.78]])
errors = np.array([[0.03,0.04,0.02],[0.04,0.03,0.02],[0.03,0.04,0.02],[0.05,0.04,0.03]])

x = np.arange(len(groups))
width = 0.27
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
ax.set_ylabel('Performance Metrics (Precision, Recall, F1, Cohen’s Kappa)')
ax.set_title('Comparison of ESG Scoring Accuracy and Consistency: LLM vs. Manual and Rule-based Methods', fontsize=16, fontweight='bold')
ax.legend(loc='upper right', framealpha=0.9)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig2.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig2.svg')
plt.close()
