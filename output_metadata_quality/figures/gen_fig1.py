
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

fig, ax = plt.subplots(figsize=(12, 10))
ax.set_xlim(0, 10)
ax.set_ylim(0, 9)
ax.axis('off')

COLORS = ['#2563eb', '#16a34a', '#ca8a04', '#dc2626', '#7c3aed', '#0891b2']

# Row 0: Metadata Quality Dimensions
ax.text(5, 8.8, 'Metadata Quality Dimensions', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.1, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#1f77b4', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.0, 8.0, 'Completeness', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((3.1, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#ff7f0e', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(4.0, 8.0, 'Accuracy', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.1, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#2ca02c', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.0, 8.0, 'Consistency', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((7.1, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#d62728', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(8.0, 8.0, 'Timeliness', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 7.5), xytext=(5, 6.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 1: Quantitative Metrics
ax.text(5, 6.8, 'Quantitative Metrics', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.1, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9467bd', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.0, 6.0, 'Missing Values Ratio', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((3.1, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#8c564b', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(4.0, 6.0, 'Error Rate', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.1, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#e377c2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.0, 6.0, 'Conflict Rate', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((7.1, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#7f7f7f', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(8.0, 6.0, 'Update Frequency', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 5.5), xytext=(5, 4.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 2: Academic Databases
ax.text(5, 4.8, 'Academic Databases', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.1, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#bcbd22', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.0, 4.0, 'Web of Science', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((3.1, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#17becf', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(4.0, 4.0, 'Scopus', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.1, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#aec7e8', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.0, 4.0, 'PubMed', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((7.1, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#ffbb78', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(8.0, 4.0, 'Google Scholar', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 3.5), xytext=(5, 2.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 3: Workflow Stages
ax.text(5, 2.8, 'Workflow Stages', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((0.8, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#393b79', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(1.7, 2.0, 'Data Collection', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((2.4, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#5254a3', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(3.3, 2.0, 'Preprocessing', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((4.1, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#6b6ecf', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 2.0, 'Metric Calculation', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.8, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9c9ede', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.7, 2.0, 'Statistical Testing', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((7.4, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#637939', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(8.3, 2.0, 'Interpretation', ha='center', va='center', fontsize=13, fontweight='bold', color='white')


ax.set_title('Standardized Framework for Quantitative Assessment of Metadata Quality across Academic Databases', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.svg')
plt.close()
