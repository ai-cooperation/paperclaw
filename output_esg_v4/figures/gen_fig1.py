
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

# Row 0: Data Collection
ax.text(5, 12.8, 'Data Collection', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 11.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#6BAED6', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 12.0, 'Mandarin-English ESG Reports', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 11.5), xytext=(5, 10.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 1: Preprocessing
ax.text(5, 10.8, 'Preprocessing', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#6BAED6', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 10.0, 'Data Cleaning & Standardization', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 9.5), xytext=(5, 8.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 2: Bilingual Fine-tuned LLM Model
ax.text(5, 8.8, 'Bilingual Fine-tuned LLM Model', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#3182BD', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 8.0, 'LLM Fine-tuning on Mandarin & English Data', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 7.5), xytext=(5, 6.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 3: Bias Correction Module
ax.text(5, 6.8, 'Bias Correction Module', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#E6550D', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 6.0, 'Bias Detection & Adjustment', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 5.5), xytext=(5, 4.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 4: Benchmarking Components
ax.text(5, 4.8, 'Benchmarking Components', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.6, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9E9AC8', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.5, 4.0, 'Manual Assessment', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((4.1, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9E9AC8', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 4.0, 'Rule-based Method', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((6.6, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#3182BD', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(7.5, 4.0, 'LLM Assessment', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 3.5), xytext=(5, 2.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 5: Evaluation Metrics
ax.text(5, 2.8, 'Evaluation Metrics', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#6BAED6', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 2.0, 'Accuracy, Consistency, Efficiency', ha='center', va='center', fontsize=13, fontweight='bold', color='white')


ax.set_title('The proposed LLM-assisted ESG disclosure assessment framework', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.svg')
plt.close()
