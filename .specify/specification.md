# Scion Landing Page - Complete Specification

## Project Summary

This specification consolidates all extracted data from:
- **Webflow Demo**: Primary implementation reference
- **Framer Demo**: Cross-reference validation
- **Figma File**: Design tokens and component structure

---

## Quick Reference

### Technology Stack
| Aspect | Choice |
|--------|--------|
| Framework | Astro |
| CSS | Vanilla CSS + Custom Properties |
| Animation | CSS transitions + minimal JS |
| Deployment | Netlify |

### Critical Files
| File | Purpose |
|------|---------|
| `design-tokens.md` | Colors, typography, spacing |
| `assets.md` | Textures, images, icons |
| `interactions.md` | Transitions, animations |
| `responsive.md` | Breakpoint specifications |
| `figma-tokens.md` | Original Figma variables |
| `webflow-vs-framer.md` | Platform comparison |

### Component Specs
| Component | File |
|-----------|------|
| Navbar | `components/navbar.md` |
| Hero | `components/hero.md` |
| Wide Section | `components/wide-section.md` |
| Feature Slider | `components/feature-slider.md` |
| Service Cards | `components/service-cards.md` |
| Blog Cards | `components/blog-cards.md` |
| Process Steps | `components/process-steps.md` |
| Buttons | `components/buttons.md` |
| Footer | `components/footer.md` |

---

## CSS Variables (Final)

```css
:root {
  /* === COLORS === */
  /* Backgrounds */
  --bg-primary: rgb(30, 30, 30);
  --bg-dark: rgb(18, 18, 18);
  --bg-black: rgb(0, 0, 0);
  --bg-card: rgba(255, 255, 255, 0.06);
  --bg-accent: rgb(108, 88, 141);
  --bg-overlay: rgba(0, 0, 0, 0.8);
  --bg-glass: rgba(0, 0, 0, 0.25);

  /* Text */
  --text-primary: rgb(255, 255, 255);
  --text-muted: rgba(255, 255, 255, 0.7);
  --text-subtle: rgba(255, 255, 255, 0.5);
  --text-dark: rgb(34, 34, 34);

  /* Accents */
  --accent-purple: rgb(108, 88, 141);
  --accent-orange: rgb(224, 131, 92);
  --accent-green: rgb(162, 183, 159);
  --accent-gold: rgb(216, 163, 115);

  /* Borders */
  --border-light: rgba(255, 255, 255, 0.1);
  --border-white: rgba(255, 255, 255, 0.15);

  /* === TYPOGRAPHY === */
  --font-primary: 'Aspekta', 'Geist', Arial, sans-serif;
  --font-serif: 'Newsreader', 'Times New Roman', serif;

  /* Font Sizes */
  --text-display: 64px;
  --text-h1: 51px;
  --text-h2: 40px;
  --text-h3: 24px;
  --text-h4: 25px;
  --text-h5: 20px;
  --text-body: 16px;
  --text-small: 13px;

  /* Line Heights */
  --leading-tight: 1.1;
  --leading-snug: 1.2;
  --leading-normal: 1.4;

  /* === SPACING === */
  --space-1: 6px;
  --space-2: 12px;
  --space-3: 18px;
  --space-4: 24px;
  --space-5: 36px;
  --space-6: 48px;
  --space-7: 72px;
  --space-8: 96px;
  --space-9: 168px;

  /* Grid Gaps */
  --gap-tight: 12px;
  --gap-default: 24px;
  --gap-loose: 48px;

  /* === LAYOUT === */
  --container-max: 1200px;
  --container-xl: 960px;
  --container-l: 768px;
  --container-s: 480px;
  --container-xs: 384px;
  --wide-section-padding: 9px;
  --navbar-height: 52px;

  /* === BORDERS === */
  --radius-xs: 2px;
  --radius-sm: 5px;
  --radius-md: 9px;
  --radius-lg: 10px;
  --radius-full: 200px;

  /* === EFFECTS === */
  --shadow-sm: 0 6px 24px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 24px 24px rgba(0, 0, 0, 0.25);
  --shadow-lg: 0 48px 48px rgba(0, 0, 0, 0.25);
  --blur-subtle: 12px;
  --blur-intense: 64px;

  /* === TRANSITIONS === */
  --ease-smooth: cubic-bezier(0.44, 0, 0.56, 1);
  --transition-fast: 0.2s var(--ease-smooth);
  --transition-medium: 0.4s var(--ease-smooth);
  --transition-slow: 0.5s ease-in-out;

  /* === TEXTURES === */
  --noise-size: 150px;
  --noise-opacity: 1;
  --noise-opacity-subtle: 0.3;
  --grid-opacity: 0.7;
  --grid-opacity-subtle: 0.2;
}
```

---

## Critical Implementation Details

### 1. Noise Texture (MUST HAVE)
```css
.noise-bg {
  position: absolute;
  inset: 0;
  background-image: url('/textures/noise-pattern.png');
  background-size: 150px 150px;
  background-repeat: repeat;
  z-index: 4;
  pointer-events: none;
  opacity: 1;
}

.noise-bg.subtle {
  opacity: 0.3;
}
```

### 2. Dot Grid Background
```css
.grid-bg {
  position: absolute;
  inset: 0;
  background-image: url('/textures/dot-grid.png');
  background-size: auto;
  background-repeat: repeat;
  opacity: 0.7;
  pointer-events: none;
  z-index: 3;
}

.grid-bg.subtle {
  opacity: 0.2;
}
```

### 3. Layer Stacking Order
```
1. Base content (z-index: 1)
2. Gradient vectors/blobs (z-index: 2)
3. Dot grid overlay (z-index: 3)
4. Noise texture overlay (z-index: 4)
5. Content above overlays (z-index: 5+)
```

### 4. Wide Section Pattern
```css
.wide-section {
  padding: 0 var(--wide-section-padding);
}

.wide-section-content {
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
}
```

### 5. Button Hover Pattern
```css
.button {
  background: var(--bg-card);
  border-radius: var(--radius-full);
  transition: background-color var(--transition-fast);
}

.button:hover {
  background: rgba(255, 255, 255, 0.4);
}
```

---

## Breakpoints

```css
/* Desktop (default) */
/* styles here */

/* Tablet landscape */
@media (max-width: 991px) { }

/* Tablet portrait */
@media (max-width: 767px) { }

/* Mobile */
@media (max-width: 479px) { }
```

---

## Page Structure (from Figma)

1. **Wide Section - Hero** (930px)
   - Navbar
   - H1 heading with serif accent
   - Video thumbnail + text card

2. **Section - Feature Slider** (1104px)
   - Large intro text
   - Image slider with controls

3. **Section - Two Column Grid** (832px)
   - Text content left
   - Portrait image right

4. **Section - Sidebar Content** (844px)
   - Image grid left
   - Text + bullet list right

5. **Wide Section - CTA** (498px)
   - Centered CTA box
   - Gradient background

6. **Section - Services** (1163px)
   - Horizontally scrolling service cards
   - Icon boxes with noise overlay

7. **Section - Customer Quote** (922px)
   - Large customer photo
   - Quote text with attribution

8. **Section - Icon Links** (592px)
   - 2x2 grid of icon link items

9. **Section - Process Steps** (1128px)
   - Sidebar with image + metric
   - Numbered process items

10. **Section - Blog Grid** (866px)
    - 3-column blog card grid
    - Follow-on link

11. **Wide Section - Final CTA** (498px)
    - Matching first CTA

12. **Footer** (566px)
    - Logo, social links
    - Navigation columns
    - Copyright

---

## Asset Checklist

### Textures (Critical)
- [x] `noise-pattern.png` - 150px tile, PNG with transparency
- [x] `dot-grid.png` - Repeating dot pattern

### Icons
- [ ] Arrow icons (right, up-right, down-right)
- [ ] Menu/hamburger icon
- [ ] Search icon
- [ ] Play icon
- [ ] Social icons (X, LinkedIn, Instagram, Bluesky)
- [ ] Abstract shape icons (03, 04, 05, 07, 08, 09, 10)

### Images
- [ ] Hero background (landscape-01)
- [ ] Portrait images (portrait-01, portrait-04)
- [ ] Team/customer photos
- [ ] Blog thumbnails

### Logo
- [ ] scion-logo.svg (138x16)
- [ ] notch-corner.svg (5x5)
- [ ] ology-o.svg (94x67)

---

## Fonts

### Required
1. **Aspekta** - Primary sans-serif (headings, body, UI)
2. **Newsreader** - Serif for italic accents

### Fallbacks
```css
--font-primary: 'Aspekta', 'Geist', 'Inter', Arial, sans-serif;
--font-serif: 'Newsreader', Georgia, 'Times New Roman', serif;
```

### Loading Strategy
```html
<link rel="preload" href="/fonts/Aspekta-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/Newsreader-400-italic.woff2" as="font" type="font/woff2" crossorigin>
```

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 200ms |

---

## Next Steps

1. Download and optimize all assets
2. Set up Astro project structure
3. Create CSS tokens file
4. Build base layout components
5. Implement each section component
6. Add interactions and animations
7. Test responsive breakpoints
8. Optimize for performance
9. Deploy to Netlify

---

## Configuration System v2

### Overview

The configuration system controls all visibility, navigation, and content at **build time**. No runtime JavaScript for toggling.

### Section Config Schema

```typescript
interface SectionConfig {
  enabled: boolean;                              // Render section?
  elements?: Record<string, { enabled: boolean }>; // Sub-element visibility
  limit?: number;                                // Max items to show
}

// Example
sections: {
  hero: {
    enabled: true,
    elements: {
      video: { enabled: false },
      infoBanner: { enabled: false },
    },
  },
  featureSlider: {
    enabled: true,
    limit: 3,
  },
  stats: {
    enabled: true,
    elements: {
      measurableOutcomes: { enabled: false },
    },
  },
}
```

### Navigation Config Schema

```typescript
interface NavigationConfig {
  header: {
    enabled: boolean;
    logo: { src: string; alt: string; width: number; height: number };
    cta: { enabled: boolean; label: string; href: string };
    items: Array<{
      label: string;
      href: string;
      enabled: boolean;
      children?: NavItem[];
    }>;
  };
  footer: {
    enabled: boolean;
    logo: { src: string; alt: string; width: number; height: number };
    tagline: string;
    columns: Array<{
      title: string;
      enabled: boolean;
      links: Array<{ label: string; href: string; enabled: boolean }>;
    }>;
    legal: Array<{ label: string; href: string; enabled: boolean }>;
  };
}
```

### Social Config Schema

```typescript
interface SocialConfig {
  [platform: string]: {
    enabled: boolean;
    url: string;
    label?: string;
  };
}

// Example
social: {
  twitter: { enabled: true, url: 'https://twitter.com/baresquare' },
  linkedin: { enabled: true, url: 'https://linkedin.com/company/baresquare' },
  instagram: { enabled: false, url: '' },
}
```

### Office Locations Schema

```typescript
interface OfficeConfig {
  [locationId: string]: {
    enabled: boolean;
    city: string;
    country: string;
    address: string;
    fullAddress: string;
  };
}

// Baresquare Offices
offices: {
  london: {
    enabled: true,
    city: 'London',
    country: 'United Kingdom',
    address: 'White Collar Factory, 1 Old Street Yard',
    fullAddress: 'White Collar Factory, 1 Old Street Yard, London EC1Y 8AF, United Kingdom',
  },
  thessaloniki: {
    enabled: true,
    city: 'Thessaloniki',
    country: 'Greece',
    address: 'Kathigitou Nikolaou Papadaki 19',
    fullAddress: 'Kathigitou Nikolaou Papadaki 19, Thessaloniki 542 48',
  },
}
```

### Footer Layout

Office addresses display below logo/tagline in brand section:
```
BARESQUARE (logo)
Tagline text...

London, UK
White Collar Factory, 1 Old Street Yard

Thessaloniki, Greece
Kathigitou Nikolaou Papadaki 19

[Social icons]
```

### Full SiteConfig Interface

```typescript
interface SiteConfig {
  sections: Record<string, SectionConfig>;
  navigation: NavigationConfig;
  social: SocialConfig;
  offices: OfficeConfig;
  routes: Record<string, RouteConfig>;
  defaults: {
    comingSoonTitle: string;
    comingSoonMessage: string;
    comingSoonButtonText: string;
  };
}
```
