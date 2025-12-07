# Scion Landing - Project Constitution

## Project Identity
- **Name**: Scion Landing Page
- **Type**: Dark-themed tech/consulting landing page
- **Template Source**: Scion by Medium Rare (Craig Garner)
- **Deployment**: Netlify

---

## Design Principles

### 1. Visual Fidelity
- **Pixel-perfect** implementation matching Webflow/Framer demos
- All animations, transitions, and micro-interactions must be replicated exactly
- No approximations - extract exact values from live demos

### 2. Dark Theme Aesthetics
- Primary background: `rgb(30, 30, 30)` / `#1e1e1e`
- Subtle texture overlays (noise, dot grids) for depth
- High contrast text for readability
- Gradient accents for visual interest

### 3. Typography Hierarchy
- **Headings**: Aspekta (sans-serif) - clean, modern, tech aesthetic
- **Italic accents**: Newsreader (serif) - elegant contrast for key words
- Clear size progression across breakpoints
- Generous line-height for readability

### 4. Motion Design
- Smooth, purposeful transitions (not flashy)
- Hover states on all interactive elements
- Scroll-triggered animations for engagement
- Consistent timing functions across similar interactions

---

## Technical Standards

### Framework & Tools
| Tool | Choice | Rationale |
|------|--------|-----------|
| Framework | Astro | Static-first, minimal JS, excellent performance |
| CSS | Vanilla CSS + Custom Properties | Maximum control, no dependencies |
| Animation | CSS transitions + minimal JS | Native performance, GSAP only if needed |
| Build | Astro CLI | Simple, fast builds |
| Deploy | Netlify | As specified by project requirements |

### Code Quality

#### HTML
- Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Meaningful class names (BEM-inspired, descriptive)
- ARIA attributes where needed for accessibility
- No div soup - structure should be clear from HTML alone

#### CSS
- CSS Custom Properties for all design tokens
- Mobile-first responsive approach
- Logical property grouping (layout, typography, colors, effects)
- No magic numbers - all values from design tokens
- Comments for complex calculations or non-obvious values

#### JavaScript
- Minimal JS - CSS for animations where possible
- Progressive enhancement - site works without JS
- No framework dependencies unless absolutely necessary
- Event delegation for repeated elements

### Performance Requirements
- **Lighthouse Performance**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 200ms

### Image Optimization
- WebP format with fallbacks
- Proper `srcset` for responsive images
- Lazy loading for below-fold images
- Explicit width/height to prevent CLS

---

## Accessibility Standards (WCAG 2.1 AA)

### Color & Contrast
- Minimum 4.5:1 contrast for body text
- Minimum 3:1 contrast for large text and UI components
- No information conveyed by color alone

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Logical tab order
- Skip links for main content

### Screen Readers
- Alt text for meaningful images
- Decorative images marked appropriately
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels where needed

---

## Responsive Design

### Breakpoints
| Name | Width | Target Devices |
|------|-------|----------------|
| XL | 1920px | Large desktop monitors |
| L | 1440px | Standard desktop |
| M | 1200px | Small desktop / large laptop |
| Tablet L | 991px | Landscape tablets |
| Tablet | 768px | Portrait tablets |
| Mobile L | 479px | Large phones |
| Mobile | 390px | Standard phones |

### Responsive Principles
- Fluid typography scaling
- Grid column reduction at smaller screens
- Navigation transforms to hamburger at tablet
- Touch-friendly targets on mobile (min 44px)
- No horizontal scroll at any breakpoint

---

## Asset Management

### Textures
- Noise texture: Small tile, repeated, low opacity, overlay blend
- Dot grid: SVG or CSS-generated for scalability
- Gradients: CSS gradients, not images

### Fonts
- Self-hosted for performance and privacy
- WOFF2 format primary
- Font-display: swap for fast text rendering

### Images
- Organized by type (hero, team, blog, icons)
- Descriptive filenames
- Multiple sizes for srcset

---

## Quality Checklist

### Before Each Component
- [ ] Extracted exact specs from Webflow/Framer
- [ ] Documented all breakpoint variations
- [ ] Identified all interactive states

### After Each Component
- [ ] Matches live demo at all breakpoints
- [ ] All interactions working correctly
- [ ] Passes accessibility checks
- [ ] No console errors

### Before Deployment
- [ ] Lighthouse audit passed (90+ performance)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile device testing
- [ ] All links working
- [ ] Forms functional (if any)
- [ ] Meta tags and OG images set

---

## Reference Sources

| Source | URL | Purpose |
|--------|-----|---------|
| Webflow Demo | https://scion-template.webflow.io/ | Primary implementation reference |
| Framer Demo | https://scion-template.framer.website/ | Cross-reference, alternative approaches |
| Figma File | [Node 555-4074](https://www.figma.com/design/2vjP04wXefh7swP9xHJ6Rc/Scion?node-id=555-4074) | Design tokens, asset exports |
