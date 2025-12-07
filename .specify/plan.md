# Step 3: Technical Implementation Plan

## Document Info
| Property | Value |
|----------|-------|
| Framework | Astro (static output) |
| Hosting | Netlify |
| CSS Strategy | Vanilla CSS with Custom Properties |
| JS Strategy | Minimal vanilla JS (< 15KB) |

---

## P1: Project Structure

```
scion-landing/
├── astro.config.mjs
├── package.json
├── netlify.toml
├── public/
│   ├── fonts/
│   │   ├── Aspekta-400.woff2
│   │   ├── Aspekta-500.woff2
│   │   └── Newsreader-400-italic.woff2
│   ├── textures/
│   │   ├── noise-pattern.png
│   │   └── dot-grid.png
│   ├── icons/
│   │   ├── notch-corner.svg
│   │   ├── arrow-right.svg
│   │   └── social/
│   │       ├── x.svg
│   │       ├── linkedin.svg
│   │       └── instagram.svg
│   └── images/
│       ├── scion-logo.svg
│       ├── hero-thumbnail.webp
│       └── ... (content images)
└── src/
    ├── layouts/
    │   └── Layout.astro
    ├── components/
    │   ├── base/
    │   │   ├── NoiseOverlay.astro
    │   │   ├── GridOverlay.astro
    │   │   ├── Container.astro
    │   │   └── Section.astro
    │   ├── ui/
    │   │   ├── Button.astro
    │   │   ├── ArrowLink.astro
    │   │   ├── DotTitle.astro
    │   │   └── IconBox.astro
    │   ├── layout/
    │   │   ├── Navbar.astro
    │   │   ├── NavDropdown.astro
    │   │   ├── MobileMenu.astro
    │   │   ├── WideSection.astro
    │   │   └── Footer.astro
    │   └── sections/
    │       ├── Hero.astro
    │       ├── FeatureSlider.astro
    │       ├── TwoColumnGrid.astro
    │       ├── SidebarContent.astro
    │       ├── CTASection.astro
    │       ├── Services.astro
    │       ├── CustomerQuote.astro
    │       ├── IconLinks.astro
    │       ├── ProcessSteps.astro
    │       └── BlogGrid.astro
    ├── pages/
    │   └── index.astro
    └── styles/
        ├── tokens.css
        ├── global.css
        └── utilities.css
```

---

## P2: Build Order (Dependency-Aware)

### Phase A: Foundation
| Order | Component | File | Depends On |
|-------|-----------|------|------------|
| A1 | Tokens CSS | `styles/tokens.css` | None |
| A2 | Global CSS | `styles/global.css` | tokens.css |
| A3 | Layout | `layouts/Layout.astro` | global.css |
| A4 | Container | `components/base/Container.astro` | None |
| A5 | NoiseOverlay | `components/base/NoiseOverlay.astro` | noise-pattern.png |
| A6 | GridOverlay | `components/base/GridOverlay.astro` | dot-grid.png |

### Phase B: UI Components
| Order | Component | File | Depends On |
|-------|-----------|------|------------|
| B1 | Button | `components/ui/Button.astro` | tokens.css |
| B2 | ArrowLink | `components/ui/ArrowLink.astro` | tokens.css |
| B3 | DotTitle | `components/ui/DotTitle.astro` | tokens.css |
| B4 | IconBox | `components/ui/IconBox.astro` | NoiseOverlay |

### Phase C: Layout Components
| Order | Component | File | Depends On |
|-------|-----------|------|------------|
| C1 | WideSection | `components/layout/WideSection.astro` | NoiseOverlay, GridOverlay, Container |
| C2 | Navbar | `components/layout/Navbar.astro` | Button, notch-corner.svg |
| C3 | NavDropdown | `components/layout/NavDropdown.astro` | Navbar |
| C4 | MobileMenu | `components/layout/MobileMenu.astro` | Navbar, Button |
| C5 | Footer | `components/layout/Footer.astro` | ArrowLink, Container |

### Phase D: Section Components
| Order | Component | File | Depends On |
|-------|-----------|------|------------|
| D1 | Hero | `components/sections/Hero.astro` | WideSection, Button, DotTitle |
| D2 | CTASection | `components/sections/CTASection.astro` | WideSection, Button |
| D3 | FeatureSlider | `components/sections/FeatureSlider.astro` | Button (arrow), DotTitle |
| D4 | Services | `components/sections/Services.astro` | IconBox, ArrowLink |
| D5 | BlogGrid | `components/sections/BlogGrid.astro` | DotTitle, ArrowLink |
| D6 | ProcessSteps | `components/sections/ProcessSteps.astro` | Container |
| D7 | CustomerQuote | `components/sections/CustomerQuote.astro` | ArrowLink |
| D8 | IconLinks | `components/sections/IconLinks.astro` | IconBox, Button |
| D9 | TwoColumnGrid | `components/sections/TwoColumnGrid.astro` | ArrowLink |
| D10 | SidebarContent | `components/sections/SidebarContent.astro` | ArrowLink |

### Phase E: Page Assembly
| Order | Component | File | Depends On |
|-------|-----------|------|------------|
| E1 | Homepage | `pages/index.astro` | All sections, Layout |

---

## P3: CSS Token System (VERIFIED FROM LIVE SITE)

### `styles/tokens.css`
```css
:root {
  /* ===========================================
     COLORS - Verified from Webflow live site
     =========================================== */

  /* Backgrounds */
  --bg-primary: rgb(30, 30, 30);           /* body background */
  --bg-dark: rgb(18, 18, 18);              /* #121212 - darker cards */
  --bg-card: rgba(255, 255, 255, 0.06);    /* glass effect base */
  --bg-card-hover: rgba(255, 255, 255, 0.12); /* #ffffff1f */
  --bg-accent: rgb(108, 88, 141);          /* #6c588d - purple sections */
  --bg-glass-dark: rgba(0, 0, 0, 0.25);    /* #00000040 */
  --bg-glass-white: rgba(255, 255, 255, 0.15); /* #ffffff26 */

  /* Text Colors */
  --text-primary: #ffffff;
  --text-muted: rgba(255, 255, 255, 0.7);  /* #ffffffb3 - body text */
  --text-subtle: rgba(255, 255, 255, 0.5); /* #ffffff80 - faded heading */
  --text-faded: rgba(255, 255, 255, 0.06); /* #ffffff0f */

  /* Brand Accents - EXACT hex values */
  --accent-purple: #6c588d;  /* brand-1 */
  --accent-green: #a2b79f;   /* brand-2 */
  --accent-gold: #d8a373;    /* brand-3 */
  --accent-orange: #e0835c;  /* brand-4 */

  /* Borders */
  --border-light: rgba(255, 255, 255, 0.1); /* #ffffff1a */

  /* ===========================================
     TYPOGRAPHY - Verified values
     =========================================== */

  /* Font Families */
  --font-primary: 'Aspekta', Arial, sans-serif;
  --font-serif: 'Newsreader', 'Times New Roman', serif;

  /* Font Sizes - EXACT from CSS vars */
  --text-display: 64px;
  --text-h1: 51px;
  --text-h2: 40px;
  --text-h3: 32px;
  --text-h4: 25px;
  --text-h5: 20px;
  --text-body: 16px;
  --text-small: 13px;  /* fine-print, badge */

  /* Line Heights */
  --line-height-display: 1.1em;
  --line-height-h1: 1.15em;
  --line-height-h2: 1.2em;
  --line-height-h3: 1.2em;
  --line-height-h4: 1.25em;
  --line-height-h5: 1.35em;
  --line-height-body: 1.4em;

  /* ===========================================
     SPACING - Grid gaps and section padding
     =========================================== */

  --space-xs: 6px;
  --space-sm: 12px;   /* grid-gaps--tight */
  --space-md: 24px;   /* grid-gaps--default, gutter */
  --space-lg: 48px;   /* grid-gaps--loose, section-padding--small */
  --space-xl: 96px;   /* section-padding--default */
  --space-2xl: 168px; /* section-padding--large */

  /* ===========================================
     LAYOUT - Container and component sizes
     =========================================== */

  --container-max: 1248px;        /* main-container-with-gutters */
  --container-xl: 960px;          /* content-xl */
  --container-lg: 768px;          /* content-l */
  --container-md: 576px;          /* content-m */
  --container-sm: 480px;          /* content-s */
  --container-xs: 384px;          /* content-xs */

  --wide-section-padding: 9px;
  --navbar-height: 52px;
  --navbar-height-negative: -52px;
  --gutter: 24px;

  /* ===========================================
     BORDERS & EFFECTS
     =========================================== */

  --radius-sm: 5px;
  --radius-md: 10px;
  --radius-full: 200px;  /* pill buttons */

  --blur-intense: 24px;

  /* ===========================================
     BUTTONS - Verified exact values
     =========================================== */

  --button-height: 48px;
  --button-padding-x: 54px;
  --button-radius: 200px;

  /* ===========================================
     TRANSITIONS - Verified timing
     =========================================== */

  --ease-smooth: cubic-bezier(0.44, 0, 0.56, 1);
  --ease-default: ease;
  --transition-fast: 0.2s var(--ease-default);
  --transition-medium: 0.4s var(--ease-smooth);

  /* ===========================================
     HERO SIZES
     =========================================== */

  --hero-small: 480px;
  --hero-default: 576px;
  --hero-large: 768px;
  --hero-fullscreen: 100svh;
}
```

---

## P4: Asset Pipeline (VERIFIED SOURCES)

### Fonts (Critical Path)
| Font | Weight | Format | Size |
|------|--------|--------|------|
| Aspekta Regular | 400 | WOFF2 | ~25KB |
| Aspekta Medium | 500 | WOFF2 | ~25KB |
| Newsreader Italic | 400i | WOFF2 | ~20KB |

**Loading Strategy:**
```html
<link rel="preload" href="/fonts/Aspekta-400.woff2" as="font" type="font/woff2" crossorigin>
```

### Textures (VERIFIED URLs)

| Texture | URL | Size | z-index |
|---------|-----|------|---------|
| noise-pattern.png | `https://cdn.prod.website-files.com/67f856119a6424eec0fe6e15/67f86d23be02f2255f005fcf_noise-pattern.png` | 150x150px | 4 |
| dot-grid.png | `https://cdn.prod.website-files.com/67f856119a6424eec0fe6e15/67f872aa5071543b2b79369b_dot-grid.png` | auto | 4 |

**Noise Overlay Variants (opacity values):**
| Context | Opacity | Class |
|---------|---------|-------|
| Default (icon-box) | 1 | `.noise-bg` |
| Video box | 0.2 | `.wide-video-box-noise` |
| Text box | 0.6 | `.wide-text-box-noise` |

**Grid Overlay:**
| Property | Value |
|----------|-------|
| Opacity | 0.7 |
| z-index | 4 |
| background-size | auto |

### Icons
| Icon | Dimensions | Format |
|------|------------|--------|
| notch-corner.svg | 5x5px | SVG |
| arrow-right.svg | 16x16px | SVG |
| arrow-up-right.svg | 16x16px | SVG |
| x.svg | 24x24px | SVG |
| linkedin.svg | 24x24px | SVG |
| instagram.svg | 24x24px | SVG |

### Notch Corner Details (VERIFIED)
```css
.navbar-notch-left,
.navbar-notch-right {
  width: 5px;
  height: 5px;
  position: absolute;
}
```

---

## P5: JavaScript Strategy

### Zero JS (CSS-only)
- Button hover/focus/active states
- ArrowLink hover animation
- Dropdown hover reveal
- Image zoom on hover
- Blob background animations

### Minimal JS (~12KB total)
| Feature | Size | Implementation |
|---------|------|----------------|
| Mobile menu toggle | ~1KB | Event listener + class toggle |
| Feature slider | ~5KB | Transform + touch events |
| Service cards pause | ~1KB | IntersectionObserver |
| Scroll animations | ~2KB | IntersectionObserver |
| Dropdown keyboard | ~2KB | Key event handlers |

### Loading Strategy
```html
<!-- Deferred, non-blocking -->
<script type="module" src="/js/main.js" defer></script>
```

---

## P6: Critical Implementation Notes (VERIFIED)

### Z-Index Stack (VERIFIED FROM LIVE SITE)
```
z-index: 99999999 → Navbar (VERIFIED - sticky, always on top)
z-index: 4        → NoiseOverlay (.noise-bg)
z-index: 4        → GridOverlay (.grid-bg) - same level, both decorative
z-index: 2        → Content text boxes
z-index: 1        → Video backgrounds
z-index: -100     → Background images
```

### Button Transition (VERIFIED)
```css
/* From live site - transition timing is just 'ease', not cubic-bezier */
.button {
  transition: background-color 0.2s ease;
}
```

### Button Styles (VERIFIED EXACT VALUES)
```css
.button {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 200px;
  height: 48px;
  padding: 0 54px;
  font-size: 13px;
}
```

### WideSection Padding (EXACT VALUES)
```css
.wide-section { padding: 0 9px; }

@media (max-width: 991px) {
  .wide-section { padding: 0 6px; }
}
```

### Noise Texture Implementation (VERIFIED)
```css
.noise-bg {
  background-image: url('/textures/noise-pattern.png');
  background-size: 150px 150px;
  background-repeat: repeat;
  z-index: 4;
  pointer-events: none;
}

/* Opacity variants */
.noise-bg { opacity: 1; }
.wide-video-box-noise { opacity: 0.2; }
.wide-text-box-noise { opacity: 0.6; }
```

### Grid Texture Implementation (VERIFIED)
```css
.grid-bg {
  background-image: url('/textures/dot-grid.png');
  background-size: auto;
  opacity: 0.7;
  z-index: 4;
  pointer-events: none;
}
```

### Button States (VERIFIED)
| State | Property | Value |
|-------|----------|-------|
| Default | background | rgba(255,255,255,0.06) |
| Hover | background | rgba(255,255,255,0.12) - #ffffff1f |
| Focus | outline | 2px solid white, 2px offset |
| Active | transform | scale(0.98) |
| Disabled | opacity | 0.5 |

### Section Padding (VERIFIED)
| Class | Padding |
|-------|---------|
| `.section` | 96px 0 |
| `.section.top-padding-l` | 168px 0 96px |
| `.section.bottom-padding-0` | 96px 0 0 |

### Icon Box Styles (VERIFIED)
```css
.icon-box {
  background: rgb(108, 88, 141);  /* purple accent */
  border-radius: 10px;
  /* Contains noise-bg overlay at opacity 1 */
}
```

### Wide Text Box Colored (VERIFIED)
```css
.wide-text-box.colored {
  background: rgb(108, 88, 141);
  border-radius: 10px;
}
```

---

## P7: Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Desktop | 1920px+ | Full layout, all animations |
| Laptop | 1440px | Slightly reduced spacing |
| Tablet | 991px | Hamburger menu, 2-col → 1-col grids |
| Mobile | 767px | Increased touch targets |
| Small Mobile | 479px | Single column, no blob animations |

### Mobile-Specific Rules
```css
@media (max-width: 479px) {
  .hero-blobs { display: none; }
  .services-scroll { animation: none; }
}
```

---

## P8: Performance Budgets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Total JS | < 15KB gzipped |
| Total CSS | < 20KB gzipped |
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 95+ |

---

## Next Steps

1. **Step 4**: Generate task checklist with `speckit_tasks`
2. **Step 5**: Begin implementation following Phase A → E order
3. Start with `npm create astro@latest` to initialize project
