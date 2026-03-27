
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

# Row 0: Input Data
ax.text(5, 12.8, 'Input Data', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 11.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#1f77b4', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 12.0, 'ESG Reports from Taiwan-listed Companies', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 11.5), xytext=(5, 10.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 1: Preprocessing
ax.text(5, 10.8, 'Preprocessing', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((2.4, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#ff7f0e', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(3.3, 10.0, 'Data Cleaning & Structuring', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.8, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#ff7f0e', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.7, 10.0, 'Taiwan-specific Language Adaptation', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 9.5), xytext=(5, 8.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 2: LLM Fine-Tuning Modules
ax.text(5, 8.8, 'LLM Fine-Tuning Modules', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((2.4, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#2ca02c', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(3.3, 8.0, 'Large Language Model Training', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.8, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#2ca02c', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.7, 8.0, 'Fine-tuning on ESG Texts', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 7.5), xytext=(5, 6.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 3: Lexicon Integration
ax.text(5, 6.8, 'Lexicon Integration', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#d62728', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 6.0, 'Sector-Specific ESG Lexicons', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 5.5), xytext=(5, 4.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 4: Assessment Engine
ax.text(5, 4.8, 'Assessment Engine', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9467bd', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 4.0, 'Automated ESG Disclosure Scoring', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 3.5), xytext=(5, 2.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 5: Output & Comparison Modules
ax.text(5, 2.8, 'Output & Comparison Modules', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((2.4, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#8c564b', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(3.3, 2.0, 'Comparison with Manual Analyst Assessments', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.8, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#8c564b', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.7, 2.0, 'ESG Assessment Reports', ha='center', va='center', fontsize=13, fontweight='bold', color='white')


ax.set_title('Overview of the LLM-based ESG Disclosure Assessment Framework for Taiwan-listed Companies', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.svg')
plt.close()
