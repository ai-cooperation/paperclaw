
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

data = np.array([[0.85,0.78,0.65,0.9,0.88,0.55,0.7,0.8],[0.6,0.73,0.5,0.65,0.68,0.4,0.55,0.6],[0.92,0.9,0.85,0.95,0.93,0.8,0.78,0.85],[0.7,0.68,0.6,0.75,0.72,0.5,0.45,0.6],[0.88,0.85,0.78,0.9,0.87,0.65,0.7,0.75],[0.55,0.5,0.45,0.58,0.6,0.35,0.4,0.5]])
fig, ax = plt.subplots(figsize=(10, 5))
im = ax.imshow(data, cmap='RdYlGn', aspect='auto', vmin=0, vmax=1)

ax.set_xticks(range(len(["Environmental Impact","Carbon Emissions","Water Usage","Waste Management","Labor Practices","Board Diversity","Supply Chain Ethics","Community Engagement"])))
ax.set_xticklabels(["Environmental Impact","Carbon Emissions","Water Usage","Waste Management","Labor Practices","Board Diversity","Supply Chain Ethics","Community Engagement"], rotation=0)
ax.set_yticks(range(len(["Technology","Manufacturing","Finance","Healthcare","Utilities","Consumer Goods"])))
ax.set_yticklabels(["Technology","Manufacturing","Finance","Healthcare","Utilities","Consumer Goods"])

# Add value annotations
for i in range(data.shape[0]):
    for j in range(data.shape[1]):
        val = data[i, j]
        color = 'white' if val < 0.5 else 'black'
        ax.text(j, i, f'{val:.2f}', ha='center', va='center', fontsize=13, fontweight='bold', color=color)

cbar = fig.colorbar(im, ax=ax, shrink=0.8)
cbar.ax.tick_params(labelsize=12)
ax.set_title('Examples of LLM and Analyst Assessment Discrepancies on Sector-Specific ESG Disclosure Elements', fontsize=16, fontweight='bold')
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig3.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig3.svg')
plt.close()
