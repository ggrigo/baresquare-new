# Performance Specification

## Document Info
| Property | Value |
|----------|-------|
| Target | Lighthouse 90+ score |
| Framework | Astro (static output) |
| Hosting | Netlify |

---

## Core Web Vitals Targets

| Metric | Target | Good | Needs Improvement | Poor |
|--------|--------|------|-------------------|------|
| LCP (Largest Contentful Paint) | < 2.5s | ≤2.5s | 2.5-4.0s | >4.0s |
| FID (First Input Delay) | < 100ms | ≤100ms | 100-300ms | >300ms |
| CLS (Cumulative Layout Shift) | < 0.1 | ≤0.1 | 0.1-0.25 | >0.25 |
| INP (Interaction to Next Paint) | < 200ms | ≤200ms | 200-500ms | >500ms |

### Additional Metrics

| Metric | Target |
|--------|--------|
| FCP (First Contentful Paint) | < 1.5s |
| TTI (Time to Interactive) | < 3.5s |
| Speed Index | < 3.0s |
| Total Blocking Time | < 200ms |

---

## Asset Budgets

### JavaScript Budget

| Component | Budget | Notes |
|-----------|--------|-------|
| Navbar (mobile menu) | 2KB | Toggle only |
| Feature Slider | 5KB | Touch support |
| Service scroll | 3KB | Pause on hover |
| Scroll animations | 2KB | IntersectionObserver |
| **Total JS** | **15KB** | Minified + gzipped |

### CSS Budget

| Component | Budget |
|-----------|--------|
| Global styles | 4KB |
| Component styles | 12KB |
| Utilities | 2KB |
| **Total CSS** | **20KB** |

### Font Budget

| Font | Weight/Style | Size |
|------|--------------|------|
| Aspekta Regular | 400 | ~25KB |
| Aspekta Medium | 500 | ~25KB |
| Newsreader Italic | 400i | ~20KB |
| **Total Fonts** | | **~70KB** |

### Image Budget

| Image Type | Format | Max Size |
|------------|--------|----------|
| Hero background | WebP | 150KB |
| Blog thumbnails | WebP | 50KB each |
| Team photos | WebP | 80KB each |
| Icons | SVG | 2KB each |
| Textures | PNG | 10KB each |

---

## LCP Optimization

### LCP Candidates
1. Hero H1 heading
2. Hero video thumbnail

### Optimization Strategies

```html
<!-- Preload critical assets -->
<link rel="preload" href="/fonts/Aspekta-400.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/images/hero-thumbnail.webp" as="image">
<link rel="preload" href="/textures/noise-pattern.png" as="image">

<!-- Inline critical CSS -->
<style>
  /* Critical path CSS for above-fold content */
</style>
```

### Image Optimization

```html
<!-- Hero image (LCP) - No lazy loading -->
<img
  src="/images/hero-thumbnail.webp"
  alt="..."
  width="340"
  height="192"
  fetchpriority="high"
  decoding="async"
>

<!-- Below-fold images - Lazy loaded -->
<img
  src="/images/blog-thumb.webp"
  alt="..."
  loading="lazy"
  decoding="async"
>
```

---

## CLS Prevention

### Layout Stability Rules

```css
/* Reserve space for images */
.image-container {
  aspect-ratio: 16/9;
  background: var(--bg-card);
}

/* Reserve space for fonts */
body {
  font-family: 'Aspekta', Arial, sans-serif;
  /* System font fallback has similar metrics */
}

/* No layout shift from overlays */
.noise-overlay,
.grid-overlay {
  position: absolute;
  /* Doesn't affect layout */
}
```

### Font Loading Strategy

```css
/* Font-display: swap for text visibility */
@font-face {
  font-family: 'Aspekta';
  src: url('/fonts/Aspekta-400.woff2') format('woff2');
  font-display: swap;
}
```

### Avoid CLS Triggers
- Reserve exact dimensions for images
- Avoid injecting content above existing content
- Don't dynamically resize fonts
- Preload fonts to reduce FOIT/FOUT

---

## JavaScript Optimization

### Loading Strategy

```html
<!-- Critical: Inline in head -->
<script>
  // Skip link visibility, theme detection
</script>

<!-- Deferred: Non-blocking -->
<script type="module" src="/js/main.js" defer></script>
```

### Code Splitting

```javascript
// Lazy load mobile menu
if (window.innerWidth <= 991) {
  import('./mobile-menu.js');
}

// Lazy load slider on intersection
const sliderObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    import('./slider.js');
  }
});
```

### Third-Party Scripts
**None required** - Pure CSS + minimal vanilla JS

---

## Image Optimization

### Format Priority
1. WebP (primary)
2. AVIF (if supported, for smaller files)
3. PNG (textures only)
4. SVG (icons, logos)

### Responsive Images

```html
<picture>
  <source
    srcset="/images/hero-thumbnail-800.webp 800w,
            /images/hero-thumbnail-1200.webp 1200w"
    sizes="(max-width: 767px) 100vw, 340px"
    type="image/webp"
  >
  <img
    src="/images/hero-thumbnail.jpg"
    alt="..."
    width="340"
    height="192"
  >
</picture>
```

### Image Dimensions

| Image | Desktop | Tablet | Mobile |
|-------|---------|--------|--------|
| Hero thumbnail | 340x192 | 100vw | 100vw |
| Blog thumbnail | 384x216 | 50vw | 100vw |
| Service icon | 96x96 | 96x96 | 96x96 |
| Customer photo | 50vw | 100vw | 100vw |

---

## CSS Optimization

### Critical CSS
Inline CSS for above-fold content:
- Navbar styles
- Hero section styles
- Typography base
- Layout fundamentals

### Non-Critical CSS
Load asynchronously:
```html
<link rel="preload" href="/css/components.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/css/components.css"></noscript>
```

### CSS Best Practices
- Use CSS custom properties (reduced redundancy)
- Avoid `@import` (blocking)
- Minimize specificity conflicts
- Remove unused CSS

---

## Caching Strategy

### Cache Headers (Netlify)

```toml
# netlify.toml
[[headers]]
  for = "/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Asset Hashing
Use content hashes in filenames for cache busting:
```
main.a1b2c3d4.css
main.e5f6g7h8.js
```

---

## Animation Performance

### GPU-Accelerated Properties
Only animate:
- `transform`
- `opacity`

### Blob Animation Optimization

```css
.blob {
  /* Use transform for animation */
  animation: blob-float 45s ease-in-out infinite;
  /* Don't animate filter */
  filter: blur(96px);
  /* Hint to browser */
  will-change: transform;
  /* Create stacking context */
  transform: translateZ(0);
}
```

### Mobile Optimization
```css
@media (max-width: 479px) {
  /* Disable heavy animations on mobile */
  .hero-blobs {
    display: none;
  }

  .services-scroll {
    animation: none;
  }
}
```

---

## Network Optimization

### Preconnect

```html
<!-- If using external fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### DNS Prefetch

```html
<!-- For any external resources -->
<link rel="dns-prefetch" href="//analytics.example.com">
```

---

## Lighthouse Checklist

### Performance
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] No render-blocking resources
- [ ] Images optimized
- [ ] Fonts preloaded

### Accessibility
- [ ] All images have alt text
- [ ] Color contrast passes
- [ ] Focus visible
- [ ] ARIA labels present

### Best Practices
- [ ] HTTPS
- [ ] No console errors
- [ ] No deprecated APIs

### SEO
- [ ] Meta title/description
- [ ] Proper heading hierarchy
- [ ] Crawlable links

---

## Monitoring

### Performance Monitoring
- Lighthouse CI in build pipeline
- Netlify Analytics
- Web Vitals reporting

### Performance Budget Enforcement

```javascript
// lighthouse-budget.json
{
  "performance": 90,
  "accessibility": 100,
  "best-practices": 95,
  "seo": 100
}
```

---

## Acceptance Criteria

```gherkin
Scenario: Lighthouse score
  GIVEN the production site
  WHEN running Lighthouse audit
  THEN Performance score is ≥ 90
  AND Accessibility score is ≥ 95
  AND Best Practices score is ≥ 90
  AND SEO score is ≥ 95

Scenario: Core Web Vitals
  GIVEN a user loads the page
  THEN LCP occurs in < 2.5s
  AND CLS is < 0.1
  AND INP is < 200ms

Scenario: JavaScript budget
  GIVEN all JS is loaded
  THEN total JS size is < 15KB gzipped

Scenario: CSS budget
  GIVEN all CSS is loaded
  THEN total CSS size is < 20KB gzipped
```
