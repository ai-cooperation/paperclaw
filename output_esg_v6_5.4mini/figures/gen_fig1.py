
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

fig, ax = plt.subplots(figsize=(12, 16))
ax.set_xlim(0, 10)
ax.set_ylim(0, 15)
ax.axis('off')

COLORS = ['#2563eb', '#16a34a', '#ca8a04', '#dc2626', '#7c3aed', '#0891b2']

# Row 0: Document collection
ax.text(5, 14.8, 'Document collection', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.6, 13.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#4C78A8', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.5, 14.0, 'Annual reports', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((4.1, 13.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#4C78A8', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 14.0, 'Sustainability reports', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((6.6, 13.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#4C78A8', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(7.5, 14.0, 'Taiwan-listed firms', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 13.5), xytext=(5, 12.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 1: Preprocessing
ax.text(5, 12.8, 'Preprocessing', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.6, 11.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#72B7B2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.5, 12.0, 'Text extraction / cleaning', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((4.1, 11.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#72B7B2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 12.0, 'Chinese + bilingual handling', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((6.6, 11.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#72B7B2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(7.5, 12.0, 'Metadata structuring', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 11.5), xytext=(5, 10.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 2: ESG section detection
ax.text(5, 10.8, 'ESG section detection', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.6, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#54A24B', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.5, 10.0, 'Locate ESG-relevant passages', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((4.1, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#54A24B', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 10.0, 'Split by E / S / G dimensions', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((6.6, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#54A24B', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(7.5, 10.0, 'Identify section boundaries', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 9.5), xytext=(5, 8.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 3: Prompt-based LLM scoring
ax.text(5, 8.8, 'Prompt-based LLM scoring', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.6, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#F58518', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.5, 8.0, 'Semantic disclosure assessment', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((4.1, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#F58518', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 8.0, 'LLM-generated ESG scores', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((6.6, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#F58518', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(7.5, 8.0, 'Quality dimensions: specificity, completeness, relevance', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 7.5), xytext=(5, 6.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 4: Expert validation
ax.text(5, 6.8, 'Expert validation', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.6, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#E45756', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.5, 6.0, 'Expert-coded benchmark dataset', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((4.1, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#E45756', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 6.0, 'Human rating comparison', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((6.6, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#E45756', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(7.5, 6.0, 'Auditability checks', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 5.5), xytext=(5, 4.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 5: Benchmarking
ax.text(5, 4.8, 'Benchmarking', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.6, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#B279A2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.5, 4.0, 'Keyword/rule-based scoring', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((4.1, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#B279A2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 4.0, 'Compare against traditional methods', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((6.6, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#B279A2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(7.5, 4.0, 'Performance alignment analysis', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 3.5), xytext=(5, 2.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 6: Firm-level analysis
ax.text(5, 2.8, 'Firm-level analysis', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((1.6, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9D755D', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(2.5, 2.0, 'Disclosure quality profiles', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((4.1, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9D755D', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 2.0, 'Cross-firm ESG comparison', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((6.6, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9D755D', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(7.5, 2.0, 'Empirical analysis and implications', ha='center', va='center', fontsize=13, fontweight='bold', color='white')


ax.set_title('LLM-Assisted ESG Disclosure Assessment Workflow', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.svg')
plt.close()
