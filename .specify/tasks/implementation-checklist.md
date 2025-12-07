# Implementation Task Checklist

## Phase A: Foundation (Must Build First)

### A1: Project Setup
- [ ] Initialize Astro project with `npm create astro@latest`
- [ ] Configure `astro.config.mjs` for static output
- [ ] Create `netlify.toml` with cache headers
- [ ] Set up folder structure: `src/components/{base,ui,layout,sections}`, `src/styles`, `src/layouts`

### A2: Assets
- [ ] Download Aspekta font (400, 500 weights) - WOFF2 format
- [ ] Download Newsreader Italic (400) from Google Fonts - WOFF2
- [ ] Download noise-pattern.png texture (150x150px)
- [ ] Download/create dot-grid.png texture
- [ ] Download scion-logo.svg
- [ ] Create notch-corner.svg (5x5px)
- [ ] Download arrow icons (right, left, up-right)
- [ ] Download social icons (X, LinkedIn, Instagram)

### A3: CSS Tokens (`src/styles/tokens.css`)
- [ ] Define color tokens (--bg-primary, --bg-dark, --bg-card, --bg-accent)
- [ ] Define text colors (--text-primary, --text-muted, --text-subtle)
- [ ] Define accent colors (--accent-purple, --accent-orange, --accent-green, --accent-gold)
- [ ] Define typography tokens (font-families, sizes)
- [ ] Define spacing tokens (--space-1 through --space-8)
- [ ] Define layout tokens (--container-max, --navbar-height)
- [ ] Define border-radius tokens
- [ ] Define transition tokens (--ease-smooth, --transition-fast)

### A4: Global Styles (`src/styles/global.css`)
- [ ] Add @font-face declarations with font-display: swap
- [ ] Add CSS reset/normalize
- [ ] Add base typography styles
- [ ] Add reduced motion media query
- [ ] Add focus-visible styles
- [ ] Add skip-link styles

### A5: Layout (`src/layouts/Layout.astro`)
- [ ] Create base HTML structure with lang, meta tags
- [ ] Add font preload links
- [ ] Import tokens.css and global.css
- [ ] Add slot for page content
- [ ] Add SEO meta tags

### A6: Base Components
- [ ] Build `Container.astro` - max-width wrapper
- [ ] Build `NoiseOverlay.astro` - 150px tile, z-index 4, opacity prop
- [ ] Build `GridOverlay.astro` - dot pattern, z-index 3
- [ ] Test overlays render correctly with pointer-events: none

---

## Phase B: UI Components

### B1: Button (`src/components/ui/Button.astro`)
- [ ] Create Button component with variant prop (primary, secondary, arrow)
- [ ] Implement pill shape (border-radius: 200px)
- [ ] Add hover state (rgba(255,255,255,0.4) background)
- [ ] Add focus-visible outline (2px white, 2px offset)
- [ ] Add active state (scale 0.98)
- [ ] Add disabled state (opacity 0.5, cursor: not-allowed)
- [ ] Add arrow variant (48px circular)
- [ ] Test all states work correctly

### B2: ArrowLink (`src/components/ui/ArrowLink.astro`)
- [ ] Create ArrowLink with text and href props
- [ ] Add hover opacity transition (1 → 0.7)
- [ ] Add arrow translateX animation on hover (4px)
- [ ] Ensure transition is 200ms ease

### B3: DotTitle (`src/components/ui/DotTitle.astro`)
- [ ] Create DotTitle with label and color props
- [ ] Add 6px dot with color variants
- [ ] Style text: 13px, uppercase, 600 weight
- [ ] Ensure 8px gap between dot and text

### B4: IconBox (`src/components/ui/IconBox.astro`)
- [ ] Create IconBox with icon slot and glass effect background
- [ ] Include NoiseOverlay at specified opacity
- [ ] Add border-radius: 20px

---

## Phase C: Layout Components

### C1: WideSection (`src/components/layout/WideSection.astro`)
- [ ] Create container with 9px horizontal padding (6px on mobile)
- [ ] Add accent background color
- [ ] Include NoiseOverlay (opacity 1) and GridOverlay (opacity 0.7)
- [ ] Add border-radius: 10px
- [ ] Ensure content z-index above overlays

### C2: Navbar (`src/components/layout/Navbar.astro`)
- [ ] Create sticky navbar with z-index 99999999
- [ ] Add logo on left
- [ ] Add nav links in center
- [ ] Add CTA button on right
- [ ] Add notch corners at bottom (5x5px)
- [ ] Add glass effect background

### C3: NavDropdown (`src/components/layout/NavDropdown.astro`)
- [ ] Create dropdown container
- [ ] Add hover trigger with opacity/translateY animation
- [ ] Add arrow rotation on hover (180deg)
- [ ] Implement keyboard support (Enter, Escape, Arrow keys)

### C4: MobileMenu (`src/components/layout/MobileMenu.astro`)
- [ ] Create hamburger button (visible at 991px and below)
- [ ] Create full-screen overlay menu
- [ ] Add open/close toggle with aria-expanded
- [ ] Lock body scroll when open
- [ ] Add close button

### C5: Footer (`src/components/layout/Footer.astro`)
- [ ] Create footer with logo and social links on left
- [ ] Add navigation columns on right
- [ ] Add social icon hover states
- [ ] Add copyright text
- [ ] Test responsive layout

---

## Phase D: Section Components

### D1: Hero (`src/components/sections/Hero.astro`)
- [ ] Create hero within WideSection
- [ ] Add H1 headline (64px desktop, 32px mobile)
- [ ] Style "forward" in italic serif font
- [ ] Add 5 gradient blobs with staggered animations
- [ ] Add 96px blur to blobs
- [ ] Add video thumbnail with play button
- [ ] Add text card with CTA buttons
- [ ] Hide blobs on mobile (479px and below)
- [ ] Test reduced motion support

### D2: CTASection (`src/components/sections/CTASection.astro`)
- [ ] Create CTA within WideSection
- [ ] Add headline and supporting text
- [ ] Add primary CTA button
- [ ] Ensure consistent styling with Hero

### D3: FeatureSlider (`src/components/sections/FeatureSlider.astro`)
- [ ] Create slider container with slides
- [ ] Add arrow navigation buttons
- [ ] Add dot pagination
- [ ] Implement slide transition (0.5s ease-in-out)
- [ ] Add keyboard navigation (ArrowLeft/Right)
- [ ] Add touch/swipe support
- [ ] Handle edge cases (first/last slide)

### D4: Services (`src/components/sections/Services.astro`)
- [ ] Create service cards (384px width, 589px min-height)
- [ ] Implement infinite scroll animation (30s linear)
- [ ] Pause animation on hover
- [ ] Stop animation on mobile, enable native scroll
- [ ] Add scroll-snap for mobile

### D5: BlogGrid (`src/components/sections/BlogGrid.astro`)
- [ ] Create 3-column grid (2-col tablet, 1-col mobile)
- [ ] Add BlogCard component with image zoom on hover
- [ ] Add DotTitle for category
- [ ] Add ArrowLink for "Read more"

### D6: ProcessSteps (`src/components/sections/ProcessSteps.astro`)
- [ ] Create sticky sidebar layout
- [ ] Add step indicators
- [ ] Add content for each step
- [ ] Implement scroll-triggered step highlighting

### D7: CustomerQuote (`src/components/sections/CustomerQuote.astro`)
- [ ] Create quote layout with large text
- [ ] Add customer image
- [ ] Add customer name and title
- [ ] Add ArrowLink for case study

### D8: IconLinks (`src/components/sections/IconLinks.astro`)
- [ ] Create 2x2 grid of icon link items
- [ ] Add IconBox for each item
- [ ] Add title and description
- [ ] Add hover states

### D9: TwoColumnGrid (`src/components/sections/TwoColumnGrid.astro`)
- [ ] Create two-column layout
- [ ] Add content slots for left and right
- [ ] Test responsive stacking

### D10: SidebarContent (`src/components/sections/SidebarContent.astro`)
- [ ] Create sidebar layout
- [ ] Add sticky sidebar option
- [ ] Add content area

---

## Phase E: Page Assembly

### E1: Homepage (`src/pages/index.astro`)
- [ ] Import Layout and all section components
- [ ] Assemble sections in correct order:
  1. Hero
  2. Feature Slider
  3. Two-Column Grid
  4. Sidebar Content
  5. Mid-Page CTA
  6. Services
  7. Customer Quote
  8. Icon Links
  9. Process Steps
  10. Blog Grid
  11. Final CTA
- [ ] Add Navbar at top
- [ ] Add Footer at bottom

---

## Phase F: Testing & Optimization

### F1: Accessibility Testing
- [ ] Run Lighthouse accessibility audit (target: 95+)
- [ ] Test keyboard navigation (Tab order, focus visibility)
- [ ] Test with VoiceOver/NVDA screen reader
- [ ] Verify all ARIA labels are present
- [ ] Check color contrast ratios

### F2: Performance Testing
- [ ] Run Lighthouse performance audit (target: 90+)
- [ ] Verify LCP < 2.5s
- [ ] Verify CLS < 0.1
- [ ] Verify total JS < 15KB gzipped
- [ ] Verify total CSS < 20KB gzipped
- [ ] Check image optimization

### F3: Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox (check backdrop-filter fallback)
- [ ] Test in Safari (check sticky, blur effects)
- [ ] Test in Mobile Safari

### F4: Responsive Testing
- [ ] Test at 1920px (desktop)
- [ ] Test at 991px (tablet breakpoint)
- [ ] Test at 479px (mobile breakpoint)
- [ ] Verify touch targets are 44px minimum

### F5: Final Polish
- [ ] Optimize all images to WebP
- [ ] Add favicon
- [ ] Verify meta tags and SEO
- [ ] Deploy to Netlify
- [ ] Run final Lighthouse audit

---

## Summary

| Phase | Tasks | Est. Effort |
|-------|-------|-------------|
| A: Foundation | 25 | High |
| B: UI Components | 15 | Medium |
| C: Layout Components | 18 | Medium |
| D: Section Components | 35 | High |
| E: Page Assembly | 4 | Low |
| F: Testing | 20 | Medium |
| **Total** | **117** | - |
