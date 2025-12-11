#!/usr/bin/env python3
"""Generate chart assets in both PNG and SVG formats."""

from PIL import Image, ImageDraw
import os

assets_dir = 'src/content/blog/chicken-egg-consulting-report/assets'
os.makedirs(assets_dir, exist_ok=True)

# ============ Chart 1: User Utility ============
img1 = Image.new('RGB', (1200, 800), color='#0f172a')
draw1 = ImageDraw.Draw(img1)

# Background box
draw1.rectangle([80, 60, 1120, 720], outline='#334155', width=2, fill='#111827')
draw1.text((100, 85), 'User Utility Rising with Network Size', fill='#e2e8f0')

# Axes
draw1.line([(160, 660), (1040, 660)], fill='#64748b', width=2)
draw1.line([(160, 200), (160, 660)], fill='#64748b', width=2)

# Threshold line
draw1.line([(160, 420), (1040, 420)], fill='#f59e0b', width=2)

# Curves
draw1.line([(160, 620), (400, 550), (640, 510), (1040, 460)], fill='#ef4444', width=3)
draw1.line([(160, 540), (400, 420), (640, 360), (1040, 340)], fill='#22c55e', width=3)
draw1.line([(160, 520), (400, 360), (640, 280), (1040, 240)], fill='#38bdf8', width=3)

# Critical mass marker
draw1.ellipse([814, 326, 826, 338], fill='#22c55e')
draw1.text((840, 320), 'Critical mass', fill='#93c5fd')

img1.save(os.path.join(assets_dir, 'user-utility-network.png'))
print('✓ user-utility-network.png')

# ============ Chart 2: Marketplace Dynamics ============
img2 = Image.new('RGB', (1200, 800), color='#0f172a')
draw2 = ImageDraw.Draw(img2)

# Background
draw2.rectangle([80, 60, 1120, 720], outline='#334155', width=2, fill='#111827')
draw2.text((100, 85), 'Marketplace Dynamics: Supply vs. Demand', fill='#e2e8f0')

# Axes
draw2.line([(160, 660), (1040, 660)], fill='#64748b', width=2)
draw2.line([(160, 200), (160, 660)], fill='#64748b', width=2)

# Demand and supply curves
draw2.line([(160, 220), (400, 300), (640, 420), (1040, 620)], fill='#22c55e', width=3)
draw2.line([(160, 620), (400, 460), (640, 340), (1040, 220)], fill='#38bdf8', width=3)

# Equilibrium
draw2.ellipse([630, 400, 650, 420], fill='#f59e0b')
draw2.text((660, 390), 'Equilibrium', fill='#f59e0b')

img2.save(os.path.join(assets_dir, 'marketplace-dynamics.png'))
print('✓ marketplace-dynamics.png')

# ============ Chart 3: Supply Elasticity ============
img3 = Image.new('RGB', (1200, 800), color='#0f172a')
draw3 = ImageDraw.Draw(img3)

# Background
draw3.rectangle([80, 60, 1120, 720], outline='#334155', width=2, fill='#111827')
draw3.text((100, 85), 'Supply Elasticity vs. Density', fill='#e2e8f0')

# Axes
draw3.line([(160, 660), (1040, 660)], fill='#64748b', width=2)
draw3.line([(160, 200), (160, 660)], fill='#64748b', width=2)

# Elasticity curve
draw3.line([(160, 240), (400, 270), (640, 340), (1040, 580)], fill='#ef4444', width=3)

# Threshold
draw3.line([(160, 420), (1040, 420)], fill='#f59e0b', width=2)
draw3.text((900, 400), 'High-density threshold', fill='#f59e0b')

img3.save(os.path.join(assets_dir, 'supply-elasticity-density.png'))
print('✓ supply-elasticity-density.png')

# ============ Featured Image ============
img_f = Image.new('RGB', (1200, 630), color='#0f172a')
draw_f = ImageDraw.Draw(img_f)

draw_f.rectangle([0, 0, 1200, 630], fill='#111827')
draw_f.text((100, 280), 'The Chicken-and-Egg Problem', fill='#e2e8f0')
draw_f.text((100, 320), 'Two-Sided Digital Marketplaces', fill='#cbd5e1')

img_f.save(os.path.join(assets_dir, 'featured.png'))
print('✓ featured.png')

# ============ SVG Versions ============
svg_templates = {
    'user-utility-network.svg': '''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="100%" height="100%" fill="#0f172a"/>
  <g transform="translate(80,60)">
    <rect x="0" y="0" width="1040" height="660" rx="8" fill="#111827" stroke="#334155"/>
    <text x="20" y="40" fill="#e2e8f0" font-size="28">User Utility Rising with Network Size</text>
    <line x1="80" y1="600" x2="960" y2="600" stroke="#64748b"/>
    <line x1="80" y1="140" x2="80" y2="600" stroke="#64748b"/>
    <line x1="80" y1="360" x2="960" y2="360" stroke="#f59e0b" stroke-dasharray="8,8"/>
    <path d="M80,580 C250,520 420,490 960,460" fill="none" stroke="#ef4444" stroke-width="3"/>
    <path d="M80,520 C250,420 420,380 960,340" fill="none" stroke="#22c55e" stroke-width="3"/>
    <path d="M80,500 C250,360 420,300 960,260" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <circle cx="740" cy="350" r="6" fill="#22c55e"/>
    <text x="760" y="340" fill="#93c5fd" font-size="16">Critical mass</text>
  </g>
</svg>''',
    'marketplace-dynamics.svg': '''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="100%" height="100%" fill="#0f172a"/>
  <g transform="translate(80,60)">
    <rect x="0" y="0" width="1040" height="660" rx="8" fill="#111827" stroke="#334155"/>
    <text x="20" y="40" fill="#e2e8f0" font-size="28">Marketplace Dynamics: Supply vs. Demand</text>
    <line x1="80" y1="600" x2="960" y2="600" stroke="#64748b"/>
    <line x1="80" y1="140" x2="80" y2="600" stroke="#64748b"/>
    <path d="M80,180 C300,220 520,320 960,580" fill="none" stroke="#22c55e" stroke-width="3"/>
    <path d="M80,580 C300,420 520,300 960,180" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <circle cx="560" cy="380" r="6" fill="#f59e0b"/>
    <text x="580" y="370" fill="#f59e0b" font-size="16">Equilibrium</text>
  </g>
</svg>''',
    'supply-elasticity-density.svg': '''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="100%" height="100%" fill="#0f172a"/>
  <g transform="translate(80,60)">
    <rect x="0" y="0" width="1040" height="660" rx="8" fill="#111827" stroke="#334155"/>
    <text x="20" y="40" fill="#e2e8f0" font-size="28">Supply Elasticity vs. Density</text>
    <line x1="80" y1="600" x2="960" y2="600" stroke="#64748b"/>
    <line x1="80" y1="140" x2="80" y2="600" stroke="#64748b"/>
    <path d="M80,200 C300,220 520,260 960,540" fill="none" stroke="#ef4444" stroke-width="3"/>
    <line x1="80" y1="360" x2="960" y2="360" stroke="#f59e0b" stroke-dasharray="8,8"/>
    <text x="820" y="340" fill="#f59e0b" font-size="16">High-density threshold</text>
  </g>
</svg>''',
}

for filename, content in svg_templates.items():
    with open(os.path.join(assets_dir, filename), 'w') as f:
        f.write(content)
    print(f'✓ {filename}')

print('\n✅ All chart assets generated (PNG + SVG)!')
