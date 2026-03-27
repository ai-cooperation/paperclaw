
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

data = np.array([[0.72,0.68,0.75],[0.65,0.61,0.67],[0.58,0.55,0.6],[0.69,0.66,0.71],[0.62,0.59,0.64]])
fig, ax = plt.subplots(figsize=(10, 5))
im = ax.imshow(data, cmap='RdYlGn', aspect='auto', vmin=0, vmax=1)

ax.set_xticks(range(len(["Industry group"])))
ax.set_xticklabels(["Industry group"], rotation=0)
ax.set_yticks(range(len(["E","S","G"])))
ax.set_yticklabels(["E","S","G"])

# Add value annotations
for i in range(data.shape[0]):
    for j in range(data.shape[1]):
        val = data[i, j]
        color = 'white' if val < 0.5 else 'black'
        ax.text(j, i, f'{val:.2f}', ha='center', va='center', fontsize=13, fontweight='bold', color=color)

cbar = fig.colorbar(im, ax=ax, shrink=0.8)
cbar.ax.tick_params(labelsize=12)
ax.set_title('ESG Disclosure Quality Across Dimensions and Industries', fontsize=16, fontweight='bold')
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig3.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig3.svg')
plt.close()
