
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

fig, ax = plt.subplots(figsize=(12, 12))
ax.set_xlim(0, 10)
ax.set_ylim(0, 11)
ax.axis('off')

COLORS = ['#2563eb', '#16a34a', '#ca8a04', '#dc2626', '#7c3aed', '#0891b2']

# Row 0: Data Input
ax.text(5, 10.8, 'Data Input', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((2.4, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#1f77b4', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(3.3, 10.0, 'Mandarin ESG Disclosures', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.8, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#ff7f0e', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.7, 10.0, 'English ESG Disclosures', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 9.5), xytext=(5, 8.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 1: Preprocessing
ax.text(5, 8.8, 'Preprocessing', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((2.4, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#2ca02c', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(3.3, 8.0, 'Text Normalization', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.8, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#2ca02c', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.7, 8.0, 'Language Detection', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 7.5), xytext=(5, 6.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 2: LLM Fine-tuning
ax.text(5, 6.8, 'LLM Fine-tuning', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((2.4, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9467bd', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(3.3, 6.0, 'Multilingual LLM Model', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.8, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#8c564b', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.7, 6.0, 'ESG Lexicon Integration', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 5.5), xytext=(5, 4.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 3: Automated Scoring
ax.text(5, 4.8, 'Automated Scoring', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#e377c2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 4.0, 'ESG Disclosure Scoring Module', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 3.5), xytext=(5, 2.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 4: Output Generation
ax.text(5, 2.8, 'Output Generation', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((2.4, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#7f7f7f', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(3.3, 2.0, 'Assessment Reports', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.8, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#bcbd22', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.7, 2.0, 'Visualization Dashboards', ha='center', va='center', fontsize=13, fontweight='bold', color='white')


ax.set_title('LLM-Based Analytic Framework for Multilingual ESG Disclosure Assessment in Taiwan-Listed Companies', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.svg')
plt.close()
