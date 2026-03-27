
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

data = np.array([[0.1,0.3,0.7,0.6,0.2,0.4,0.8,0.5,0.3,0.1],[0.05,0.2,0.65,0.55,0.15,0.35,0.75,0.45,0.25,0.05]])
fig, ax = plt.subplots(figsize=(10, 5))
im = ax.imshow(data, cmap='RdYlGn', aspect='auto', vmin=0, vmax=1)

ax.set_xticks(range(len(["Token 1","Token 2","Token 3","Token 4","Token 5","Token 6","Token 7","Token 8","Token 9","Token 10"])))
ax.set_xticklabels(["Token 1","Token 2","Token 3","Token 4","Token 5","Token 6","Token 7","Token 8","Token 9","Token 10"], rotation=0)
ax.set_yticks(range(len(["Attention Weight","Explanation Relevance"])))
ax.set_yticklabels(["Attention Weight","Explanation Relevance"])

# Add value annotations
for i in range(data.shape[0]):
    for j in range(data.shape[1]):
        val = data[i, j]
        color = 'white' if val < 0.5 else 'black'
        ax.text(j, i, f'{val:.2f}', ha='center', va='center', fontsize=13, fontweight='bold', color=color)

cbar = fig.colorbar(im, ax=ax, shrink=0.8)
cbar.ax.tick_params(labelsize=12)
ax.set_title('Interpretability Examples of LLM-Generated ESG Scores on Sample Disclosures', fontsize=16, fontweight='bold')
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig3.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig3.svg')
plt.close()
