
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

data = np.array([[0.85,0.7,0.65,0.9,0.88,0.75,0.6,0.5,0.55,0.8],[0.8,0.68,0.63,0.85,0.82,0.7,0.58,0.48,0.5,0.78],[0.7,0.75,0.6,0.65,0.68,0.72,0.8,0.85,0.55,0.6],[0.68,0.72,0.58,0.62,0.65,0.68,0.78,0.8,0.5,0.58],[0.9,0.85,0.7,0.95,0.92,0.8,0.65,0.6,0.7,0.88],[0.88,0.82,0.68,0.9,0.88,0.78,0.6,0.58,0.68,0.85],[0.75,0.78,0.65,0.7,0.72,0.74,0.85,0.88,0.8,0.7],[0.72,0.75,0.63,0.68,0.7,0.72,0.82,0.85,0.78,0.68]])
fig, ax = plt.subplots(figsize=(10, 5))
im = ax.imshow(data, cmap='RdYlGn', aspect='auto', vmin=0, vmax=1)

ax.set_xticks(range(len(["Environmental","Social","Governance","Carbon Emissions","Energy Efficiency","Waste Management","Employee Welfare","Community Engagement","Board Diversity","Transparency"])))
ax.set_xticklabels(["Environmental","Social","Governance","Carbon Emissions","Energy Efficiency","Waste Management","Employee Welfare","Community Engagement","Board Diversity","Transparency"], rotation=0)
ax.set_yticks(range(len(["Manufacturing - Mandarin","Manufacturing - English","Financial - Mandarin","Financial - English","Technology - Mandarin","Technology - English","Retail - Mandarin","Retail - English"])))
ax.set_yticklabels(["Manufacturing - Mandarin","Manufacturing - English","Financial - Mandarin","Financial - English","Technology - Mandarin","Technology - English","Retail - Mandarin","Retail - English"])

# Add value annotations
for i in range(data.shape[0]):
    for j in range(data.shape[1]):
        val = data[i, j]
        color = 'white' if val < 0.5 else 'black'
        ax.text(j, i, f'{val:.2f}', ha='center', va='center', fontsize=13, fontweight='bold', color=color)

cbar = fig.colorbar(im, ax=ax, shrink=0.8)
cbar.ax.tick_params(labelsize=12)
ax.set_title('Semantic Patterns and Key ESG Themes Extracted from Bilingual Corporate Disclosures', fontsize=16, fontweight='bold')
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig3.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig3.svg')
plt.close()
