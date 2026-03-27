
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
colors = ['#2563eb', '#16a34a', '#dc2626', '#ca8a04', '#7c3aed', '#0891b2', '#be185d', '#854d0e', '#4338ca', '#0d9488']


x0 = np.array([1])
y0 = np.array([0.28])
ax.scatter(x0, y0, label='Environmental sensitivity', color=colors[0], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z0 = np.polyfit(x0, y0, 1)
p0 = np.poly1d(z0)
xs0 = np.linspace(x0.min(), x0.max(), 100)
ax.plot(xs0, p0(xs0), '--', color=colors[0], alpha=0.5, linewidth=1.5)

x1 = np.array([2])
y1 = np.array([0.35])
ax.scatter(x1, y1, label='Governance strength', color=colors[1], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z1 = np.polyfit(x1, y1, 1)
p1 = np.poly1d(z1)
xs1 = np.linspace(x1.min(), x1.max(), 100)
ax.plot(xs1, p1(xs1), '--', color=colors[1], alpha=0.5, linewidth=1.5)

x2 = np.array([3])
y2 = np.array([0.18])
ax.scatter(x2, y2, label='Foreign ownership', color=colors[2], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z2 = np.polyfit(x2, y2, 1)
p2 = np.poly1d(z2)
xs2 = np.linspace(x2.min(), x2.max(), 100)
ax.plot(xs2, p2(xs2), '--', color=colors[2], alpha=0.5, linewidth=1.5)

x3 = np.array([4])
y3 = np.array([0.22])
ax.scatter(x3, y3, label='Firm size', color=colors[3], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z3 = np.polyfit(x3, y3, 1)
p3 = np.poly1d(z3)
xs3 = np.linspace(x3.min(), x3.max(), 100)
ax.plot(xs3, p3(xs3), '--', color=colors[3], alpha=0.5, linewidth=1.5)

x4 = np.array([5])
y4 = np.array([-0.1])
ax.scatter(x4, y4, label='Leverage', color=colors[4], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z4 = np.polyfit(x4, y4, 1)
p4 = np.poly1d(z4)
xs4 = np.linspace(x4.min(), x4.max(), 100)
ax.plot(xs4, p4(xs4), '--', color=colors[4], alpha=0.5, linewidth=1.5)

x5 = np.array([6])
y5 = np.array([0.15])
ax.scatter(x5, y5, label='Profitability', color=colors[5], s=60, alpha=0.7, edgecolors='white', linewidth=0.5)
z5 = np.polyfit(x5, y5, 1)
p5 = np.poly1d(z5)
xs5 = np.linspace(x5.min(), x5.max(), 100)
ax.plot(xs5, p5(xs5), '--', color=colors[5], alpha=0.5, linewidth=1.5)


ax.set_xlabel('Firm characteristic')
ax.set_ylabel('Estimated association with disclosure quality')
ax.set_title('Firm-Level Determinants of ESG Disclosure Quality', fontsize=16, fontweight='bold')
ax.legend(loc='best', framealpha=0.9)
ax.grid(True, linestyle='--', alpha=0.3)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
plt.tight_layout()
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig5.png')
plt.savefig('/Users/user/projects/paperclaw/output/figures/fig5.svg')
plt.close()
