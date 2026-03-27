
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
    'legend.fontsize': 12,
    'figure.dpi': 300,
    'savefig.dpi': 300,
})

fig, ax = plt.subplots(figsize=(10, 6))
colors = ['#2563eb', '#16a34a', '#dc2626', '#ca8a04', '#7c3aed']


x0 = np.array([0.7,0.8,0.75,0.9,0.85])
y0 = np.array([0.65,0.78,0.72,0.88,0.83])
ax.scatter(x0, y0, label='Completeness vs Coverage Rate (DB1)', color=colors[0], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z0 = np.polyfit(x0, y0, 1)
p0 = np.poly1d(z0)
xs0 = np.linspace(x0.min(), x0.max(), 100)
ax.plot(xs0, p0(xs0), '--', color=colors[0], alpha=0.5, linewidth=1.5)

x1 = np.array([0.6,0.7,0.68,0.8,0.75])
y1 = np.array([0.6,0.7,0.68,0.79,0.74])
ax.scatter(x1, y1, label='Completeness vs Coverage Rate (DB2)', color=colors[1], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z1 = np.polyfit(x1, y1, 1)
p1 = np.poly1d(z1)
xs1 = np.linspace(x1.min(), x1.max(), 100)
ax.plot(xs1, p1(xs1), '--', color=colors[1], alpha=0.5, linewidth=1.5)

x2 = np.array([0.65,0.7,0.72,0.78,0.8])
y2 = np.array([0.55,0.68,0.7,0.75,0.78])
ax.scatter(x2, y2, label='Accuracy vs Citation Linking (DB1)', color=colors[2], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z2 = np.polyfit(x2, y2, 1)
p2 = np.poly1d(z2)
xs2 = np.linspace(x2.min(), x2.max(), 100)
ax.plot(xs2, p2(xs2), '--', color=colors[2], alpha=0.5, linewidth=1.5)

x3 = np.array([0.6,0.65,0.7,0.73,0.75])
y3 = np.array([0.5,0.6,0.68,0.7,0.72])
ax.scatter(x3, y3, label='Accuracy vs Citation Linking (DB2)', color=colors[3], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z3 = np.polyfit(x3, y3, 1)
p3 = np.poly1d(z3)
xs3 = np.linspace(x3.min(), x3.max(), 100)
ax.plot(xs3, p3(xs3), '--', color=colors[3], alpha=0.5, linewidth=1.5)

x4 = np.array([0.7,0.72,0.75,0.78,0.8])
y4 = np.array([0.6,0.65,0.68,0.7,0.75])
ax.scatter(x4, y4, label='Consistency vs Citation Linking (DB1)', color=colors[4], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z4 = np.polyfit(x4, y4, 1)
p4 = np.poly1d(z4)
xs4 = np.linspace(x4.min(), x4.max(), 100)
ax.plot(xs4, p4(xs4), '--', color=colors[4], alpha=0.5, linewidth=1.5)

x5 = np.array([0.65,0.68,0.7,0.72,0.74])
y5 = np.array([0.55,0.58,0.62,0.65,0.68])
ax.scatter(x5, y5, label='Consistency vs Citation Linking (DB2)', color=colors[5], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z5 = np.polyfit(x5, y5, 1)
p5 = np.poly1d(z5)
xs5 = np.linspace(x5.min(), x5.max(), 100)
ax.plot(xs5, p5(xs5), '--', color=colors[5], alpha=0.5, linewidth=1.5)

x6 = np.array([0.75,0.78,0.8,0.83,0.85])
y6 = np.array([0.7,0.73,0.75,0.77,0.8])
ax.scatter(x6, y6, label='Timeliness vs Coverage Rate (DB1)', color=colors[6], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z6 = np.polyfit(x6, y6, 1)
p6 = np.poly1d(z6)
xs6 = np.linspace(x6.min(), x6.max(), 100)
ax.plot(xs6, p6(xs6), '--', color=colors[6], alpha=0.5, linewidth=1.5)

x7 = np.array([0.7,0.72,0.75,0.77,0.78])
y7 = np.array([0.65,0.68,0.7,0.72,0.74])
ax.scatter(x7, y7, label='Timeliness vs Coverage Rate (DB2)', color=colors[7], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z7 = np.polyfit(x7, y7, 1)
p7 = np.poly1d(z7)
xs7 = np.linspace(x7.min(), x7.max(), 100)
ax.plot(xs7, p7(xs7), '--', color=colors[7], alpha=0.5, linewidth=1.5)


ax.set_xlabel('Metadata Quality Scores')
ax.set_ylabel('Research Discoverability Metrics')
ax.set_title('Relationship Between Metadata Quality Dimensions and Research Discoverability Metrics', fontsize=16, fontweight='bold')
ax.legend(loc='best', framealpha=0.9)
ax.grid(True, linestyle='--', alpha=0.3)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig3.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig3.svg')
plt.close()
