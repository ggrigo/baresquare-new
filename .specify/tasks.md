# Implementation Tasks - Scion Landing Page

Generated from comprehensive spec extraction.

---

## Phase 1: Project Setup

### 1.1 Initialize Astro Project
- [ ] Run `npm create astro@latest`
- [ ] Configure for static output (Netlify)
- [ ] Set up folder structure

### 1.2 Configure Assets
- [ ] Download noise-pattern.png from Webflow CDN
- [ ] Download dot-grid.png from Webflow CDN
- [ ] Download notch-corner.svg
- [ ] Download scion-logo.svg
- [ ] Set up `/public/textures/` folder
- [ ] Set up `/public/images/` folder
- [ ] Set up `/public/icons/` folder

### 1.3 Font Setup
- [ ] Obtain Aspekta font files (WOFF2)
- [ ] Obtain Newsreader font files (WOFF2)
- [ ] Configure @font-face declarations
- [ ] Add preload links for critical fonts

---

## Phase 2: CSS Foundation

### 2.1 Design Tokens
- [ ] Create `src/styles/tokens.css`
- [ ] Add all CSS custom properties from specification
- [ ] Verify color values match Figma/Webflow

### 2.2 Base Styles
- [ ] Create `src/styles/global.css`
- [ ] Reset/normalize styles
- [ ] Set up body background (`--bg-primary`)
- [ ] Configure base typography
- [ ] Add texture overlay base classes

### 2.3 Utility Classes
- [ ] Container classes (`.container`, `.container-xl`, etc.)
- [ ] Spacing utilities
- [ ] Text utilities
- [ ] Flex/grid utilities

---

## Phase 3: Components

### 3.1 Navbar (Priority: Critical)
- [ ] Create `Navbar.astro` component
- [ ] Implement sticky positioning
- [ ] Add notch corner SVGs
- [ ] Style nav links with hover states
- [ ] Add CTA button with animation
- [ ] Implement dropdown menus
- [ ] Add mobile hamburger menu
- [ ] Test at all breakpoints

### 3.2 Wide Section Container (Priority: Critical)
- [ ] Create `WideSection.astro` component
- [ ] Add border-radius and overflow handling
- [ ] Implement noise overlay layer
- [ ] Implement dot grid layer
- [ ] Support gradient background variants

### 3.3 Hero Section (Priority: Critical)
- [ ] Create `Hero.astro` component
- [ ] Add H1 with serif italic word
- [ ] Implement animated gradient blobs (CSS)
- [ ] Add video thumbnail with play button
- [ ] Add text card with dot title
- [ ] Layer all overlays correctly

### 3.4 Feature Slider
- [ ] Create `FeatureSlider.astro` component
- [ ] Implement slide content layout
- [ ] Add arrow navigation buttons
- [ ] Add dot pagination
- [ ] Implement slide transitions
- [ ] Make touch-friendly on mobile

### 3.5 Two-Column Grid
- [ ] Create `TwoColumnGrid.astro` component
- [ ] Support image left/right variants
- [ ] Add responsive column collapse
- [ ] Include icon items grid

### 3.6 Service Cards (Scrolling)
- [ ] Create `ServiceCards.astro` component
- [ ] Implement horizontal scroll animation
- [ ] Add icon boxes with noise overlay
- [ ] Style card content layout
- [ ] Add pause on hover

### 3.7 Customer Quote
- [ ] Create `CustomerQuote.astro` component
- [ ] Add large customer image
- [ ] Style quote text
- [ ] Add attribution
- [ ] Include follow link

### 3.8 Icon Links Grid
- [ ] Create `IconLinksGrid.astro` component
- [ ] Style icon box with noise
- [ ] Add text layout
- [ ] Include arrow button

### 3.9 Process Steps
- [ ] Create `ProcessSteps.astro` component
- [ ] Implement sidebar with metric slider
- [ ] Style numbered process items
- [ ] Add border separators

### 3.10 Blog Cards Grid
- [ ] Create `BlogCardGrid.astro` component
- [ ] Style individual blog card
- [ ] Add image zoom effect
- [ ] Include category dot title
- [ ] Add follow-on link row

### 3.11 CTA Section
- [ ] Create `CTASection.astro` component
- [ ] Style boxed CTA variant
- [ ] Add gradient background
- [ ] Include button

### 3.12 Footer
- [ ] Create `Footer.astro` component
- [ ] Add logo and social links
- [ ] Style navigation columns
- [ ] Add fine print section
- [ ] Include copyright

---

## Phase 4: Shared Components

### 4.1 Buttons
- [ ] Create `Button.astro` component
- [ ] Primary button style
- [ ] Arrow button variant
- [ ] Hover animations

### 4.2 Links
- [ ] Arrow link component
- [ ] External link component
- [ ] Nav link component

### 4.3 Labels
- [ ] Dot title component
- [ ] Badge component

### 4.4 Overlays
- [ ] Noise overlay component
- [ ] Grid overlay component

---

## Phase 5: Interactions

### 5.1 Hover States
- [ ] Button hover (background transition)
- [ ] Link hover (opacity/arrow animation)
- [ ] Image zoom on hover
- [ ] Card lift on hover

### 5.2 Scroll Animations (Optional)
- [ ] Section fade-in on scroll
- [ ] Staggered element reveals
- [ ] Parallax effects

### 5.3 Slider Functionality
- [ ] JavaScript for feature slider
- [ ] Touch/swipe support
- [ ] Auto-play (optional)

---

## Phase 6: Responsive Design

### 6.1 Desktop (992px+)
- [ ] Verify all components at 1920px
- [ ] Verify all components at 1200px

### 6.2 Tablet (768px - 991px)
- [ ] Convert nav to hamburger menu
- [ ] Collapse 2-col grids
- [ ] Adjust typography scale
- [ ] Test slider navigation

### 6.3 Mobile (< 768px)
- [ ] Single column layouts
- [ ] Simplified service cards (no scroll)
- [ ] Reduced spacing
- [ ] Full-width images

---

## Phase 7: Optimization

### 7.1 Performance
- [ ] Lazy load below-fold images
- [ ] Optimize texture files (compress)
- [ ] Minimize CSS
- [ ] Test Lighthouse score (target: 90+)

### 7.2 Accessibility
- [ ] Add alt text to images
- [ ] Ensure color contrast (4.5:1)
- [ ] Add focus states
- [ ] Test keyboard navigation
- [ ] Add skip link

### 7.3 SEO
- [ ] Add meta title/description
- [ ] Add Open Graph tags
- [ ] Create sitemap
- [ ] Add canonical URL

---

## Phase 8: Deployment

### 8.1 Netlify Setup
- [ ] Connect repository
- [ ] Configure build settings
- [ ] Set up environment variables (if any)
- [ ] Test deployment preview

### 8.2 Final Testing
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile device testing
- [ ] Verify all links work
- [ ] Check for console errors

---

## Dependencies

### NPM Packages
```json
{
  "dependencies": {
    "astro": "^4.x"
  },
  "devDependencies": {
    "@astrojs/netlify": "^5.x"
  }
}
```

### Assets Required
| Asset | Source | Location |
|-------|--------|----------|
| noise-pattern.png | Webflow CDN | `/public/textures/` |
| dot-grid.png | Webflow CDN | `/public/textures/` |
| Aspekta font | Purchase/License | `/public/fonts/` |
| Newsreader font | Google Fonts | `/public/fonts/` |
| notch-corner.svg | Webflow CDN | `/public/icons/` |
| scion-logo.svg | Webflow CDN | `/public/images/` |
| Abstract icons | Webflow CDN | `/public/icons/` |

---

## Reference Files

All detailed specs are in `.specify/specs/`:
- `design-tokens.md` - CSS variables
- `assets.md` - Asset specifications
- `interactions.md` - Animation details
- `responsive.md` - Breakpoint behavior
- `figma-tokens.md` - Original Figma values
- `webflow-vs-framer.md` - Platform comparison
- `components/*.md` - Per-component specs
