
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

# Row 0: Input Data
ax.text(5, 10.8, 'Input Data', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((2.4, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#4A90E2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(3.3, 10.0, 'Mandarin ESG Documents', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.8, 9.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#4A90E2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.7, 10.0, 'English ESG Documents', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 9.5), xytext=(5, 8.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 1: Preprocessing & Fine-tuning
ax.text(5, 8.8, 'Preprocessing & Fine-tuning', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((2.4, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#50E3C2', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(3.3, 8.0, 'Multilingual Baseline Model', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
rect = patches.FancyBboxPatch((5.8, 7.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#9013FE', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(6.7, 8.0, 'Taiwan-specific Fine-tuning', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 7.5), xytext=(5, 6.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 2: Model Inference
ax.text(5, 6.8, 'Model Inference', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 5.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#F5A623', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 6.0, 'LLM ESG Assessment Outputs', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 5.5), xytext=(5, 4.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 3: Human Evaluation
ax.text(5, 4.8, 'Human Evaluation', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 3.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#D0021B', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 4.0, 'Expert Human Assessment', ha='center', va='center', fontsize=13, fontweight='bold', color='white')
ax.annotate('', xy=(5, 3.5), xytext=(5, 2.8), arrowprops=dict(arrowstyle='->', lw=2, color='#666'))

# Row 4: Quantitative Evaluation
ax.text(5, 2.8, 'Quantitative Evaluation', ha='center', va='center', fontsize=11, fontstyle='italic', color='gray')
rect = patches.FancyBboxPatch((4.1, 1.6), 1.8, 0.7, boxstyle='round,pad=0.1', facecolor='#7ED321', edgecolor='#333', linewidth=1.5)
ax.add_patch(rect)
ax.text(5.0, 2.0, 'Comparison & Metrics', ha='center', va='center', fontsize=13, fontweight='bold', color='white')


ax.set_title('Architecture of LLM-Assisted ESG Disclosure Assessment Framework', fontsize=16, fontweight='bold', pad=20)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig1.svg')
plt.close()
