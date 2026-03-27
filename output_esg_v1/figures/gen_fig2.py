
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

groups = ["Manual","LLM-assisted"]
categories = ["Accuracy - Environmental","Accuracy - Social","Accuracy - Governance","Accuracy - Overall","Consistency - Environmental","Consistency - Social","Consistency - Governance","Consistency - Overall","Timeliness - Environmental","Timeliness - Social","Timeliness - Governance","Timeliness - Overall"]
values = np.array([[78,83],[75,82],[80,85],[78,83],[72,80],[70,78],[74,79],[72,79],[65,90],[62,88],[68,91],[65,89]])
errors = np.array([[3,2.5],[4,3],[3.5,2],[3,2.5],[4,3.5],[3.8,3],[4,3],[3.5,2.8],[5,3],[4.5,2.5],[5,2],[4.8,2.2]])

x = np.arange(len(groups))
width = 0.07
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
ax.set_ylabel('Performance Metric Value (%)')
ax.set_title('Comparison of Accuracy, Consistency, and Timeliness Metrics Between LLM-assisted and Manual ESG Assessments', fontsize=16, fontweight='bold')
ax.legend(loc='upper right', framealpha=0.9)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig2.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig2.svg')
plt.close()
