
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

fig, ax = plt.subplots(figsize=(12, 14))
ax.set_xlim(0, 10)
ax.set_ylim(0, 13)
ax.axis('off')

COLORS = ['#2563eb', '#16a34a', '#ca8a04', '#dc2626', '#7c3aed', '#0891b2']

# Row 0: Data Ingestion
ax.text(5, 12.8, 'Data Ingestion', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 11.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#4A90E2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 12.0, 'Taiwan-listed Company ESG Disclosures', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 11.5), xytext=(5, 10.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 1: Preprocessing
ax.text(5, 10.8, 'Preprocessing', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#50E3C2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 10.0, 'Data Cleaning & Formatting', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 9.5), xytext=(5, 8.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 2: LLM Fine-Tuning
ax.text(5, 8.8, 'LLM Fine-Tuning', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#F5A623', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 8.0, 'Tailored to Regulatory & Linguistic Nuances', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 7.5), xytext=(5, 6.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 3: ESG Scoring Algorithm
ax.text(5, 6.8, 'ESG Scoring Algorithm', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#D0021B', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 6.0, 'ESG Assessment Modules', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 5.5), xytext=(5, 4.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 4: Interpretability / Explanation
ax.text(5, 4.8, 'Interpretability / Explanation', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9B9B9B', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 4.0, 'Case-Level Explanations', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 3.5), xytext=(5, 2.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 5: Output
ax.text(5, 2.8, 'Output', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#7ED321', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 2.0, 'Final ESG Scores & Reports', ha='center', va='center', fontsize=13, fontweight='bold', color='white')


ax.set_title('Architecture of the LLM-Assisted ESG Disclosure Assessment Framework for Taiwan Firms', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.svg')
plt.close()
