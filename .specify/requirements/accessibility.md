# Accessibility Specification

## Document Info
| Property | Value |
|----------|-------|
| Standard | WCAG 2.1 Level AA |
| Target | All users including those with disabilities |

---

## Color Contrast Requirements

### Text Contrast (4.5:1 minimum)

| Element | Foreground | Background | Ratio | Pass |
|---------|------------|------------|-------|------|
| Heading text | #ffffff | #6c588d | 5.2:1 | Yes |
| Body text | rgba(255,255,255,0.7) | #1e1e1e | 8.1:1 | Yes |
| Muted text | rgba(255,255,255,0.5) | #1e1e1e | 5.8:1 | Yes |
| Button text | #ffffff | rgba(255,255,255,0.06) on #1e1e1e | 12:1 | Yes |
| Link text | #ffffff | #1e1e1e | 14:1 | Yes |

### Large Text Contrast (3:1 minimum)
Large text = 18pt+ regular or 14pt+ bold

| Element | Foreground | Background | Ratio | Pass |
|---------|------------|------------|-------|------|
| H1 heading | #ffffff | #6c588d | 5.2:1 | Yes |
| H2 heading | #ffffff | #1e1e1e | 14:1 | Yes |

### Non-Text Contrast (3:1 minimum)

| Element | Color | Background | Ratio | Pass |
|---------|-------|------------|-------|------|
| Button border | none (glass effect) | N/A | N/A | Uses background |
| Focus ring | #ffffff | any | 14:1 | Yes |
| Form inputs | N/A | N/A | N/A | No forms in design |

---

## Keyboard Navigation

### Focus Order
```
1. Skip to main content link (hidden until focus)
2. Logo (returns to homepage)
3. Navigation links (left to right)
4. Dropdown triggers
5. CTA button
6. Main content (top to bottom, left to right)
7. Footer links
8. Footer social links
```

### Focus Visibility
```css
:focus-visible {
  outline: 2px solid #ffffff;
  outline-offset: 2px;
}

/* Remove default browser outline */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Keyboard Interactions by Component

| Component | Tab | Enter | Space | Escape | Arrows |
|-----------|-----|-------|-------|--------|--------|
| Button | Focus | Activate | Activate | - | - |
| Link | Focus | Navigate | - | - | - |
| Dropdown | Focus trigger | Open | Open | Close | Navigate items |
| Slider | Focus controls | Activate | Activate | - | Prev/Next |
| Mobile menu | Focus items | Activate | Activate | Close | - |

---

## ARIA Requirements

### Landmarks
```html
<nav role="navigation" aria-label="Main navigation">
<main role="main">
<footer role="contentinfo">
<section aria-labelledby="section-heading-id">
```

### Decorative Elements
```html
<!-- Noise/grid overlays -->
<div class="noise-overlay" aria-hidden="true"></div>

<!-- Decorative icons -->
<svg aria-hidden="true">...</svg>

<!-- Blobs -->
<div class="hero-blobs" aria-hidden="true">...</div>
```

### Interactive Elements
```html
<!-- Icon-only buttons -->
<button aria-label="Play video">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Dropdown -->
<div class="nav-dropdown">
  <button aria-haspopup="true" aria-expanded="false">
    Menu
    <svg aria-hidden="true">...</svg>
  </button>
  <div role="menu" aria-hidden="true">
    <a role="menuitem">Item 1</a>
  </div>
</div>

<!-- Slider -->
<div role="region" aria-label="Feature slides">
  <div role="group" aria-roledescription="slide" aria-label="1 of 3">
    <!-- slide content -->
  </div>
</div>

<!-- Mobile menu -->
<button aria-label="Open menu" aria-expanded="false">
  ...
</button>
<div class="mobile-menu" aria-hidden="true">
  ...
</div>
```

### Live Regions
```html
<!-- For dynamic content updates -->
<div aria-live="polite" aria-atomic="true">
  Slide 2 of 5
</div>
```

---

## Semantic HTML

### Required Elements

| Content Type | Element |
|--------------|---------|
| Navigation | `<nav>` |
| Main content | `<main>` |
| Sections | `<section>` |
| Footer | `<footer>` |
| Quotes | `<blockquote>`, `<cite>` |
| Time | `<time datetime="...">` |
| Cards | `<article>` |
| Lists | `<ul>`, `<ol>`, `<li>` |
| Headings | `<h1>` - `<h6>` |
| Images | `<img alt="...">` |
| Figures | `<figure>`, `<figcaption>` |

### Heading Hierarchy

```
h1: Page title (one per page)
  h2: Section headings
    h3: Sub-section headings
      h4: Component headings
```

---

## Images and Media

### Image Alt Text Guidelines

| Image Type | Alt Text |
|------------|----------|
| Hero background | Decorative - alt="" |
| Blog thumbnails | Descriptive of content |
| Team photos | Person's name and role |
| Icons | aria-hidden="true" |
| Logo | "Scion" |
| Decorative | alt="" |

### Video Accessibility
```html
<div class="video-container">
  <button aria-label="Play video: Introduction to Scion">
    <svg aria-hidden="true">...</svg>
  </button>
  <img src="thumbnail.jpg" alt="Video thumbnail: Introduction to Scion">
</div>
```

---

## Motion and Animation

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  /* Hide decorative animations */
  .hero-blobs {
    display: none;
  }

  /* Stop infinite scroll */
  .services-scroll {
    animation: none;
  }
}
```

### Animation Pause
- Service cards pause on hover
- Auto-playing sliders pause on hover/focus

---

## Touch Targets

### Minimum Sizes (WCAG 2.5.5)

| Element | Minimum Size | Actual Size |
|---------|--------------|-------------|
| Buttons | 44x44px | 48x48px |
| Links | 44px touch area | 44px+ |
| Nav items | 44x44px | 48px height |
| Social icons | 44x44px | 40px (needs padding) |
| Slider dots | 44x44px | 8px + 18px padding |

### Touch Target Spacing
Ensure 8px minimum between touch targets.

---

## Forms (If Applicable)

### Label Association
```html
<label for="email">Email address</label>
<input type="email" id="email" name="email" required>
```

### Error Handling
```html
<input type="email" id="email" aria-describedby="email-error" aria-invalid="true">
<span id="email-error" role="alert">Please enter a valid email address</span>
```

---

## Skip Links

```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  z-index: 100000000;
}

.skip-link:focus {
  top: 0;
}
```

---

## Testing Checklist

### Automated Testing
- [ ] aXe browser extension
- [ ] Lighthouse accessibility audit
- [ ] WAVE browser extension

### Manual Testing
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Screen reader (VoiceOver, NVDA)
- [ ] Color contrast checker
- [ ] Reduced motion testing
- [ ] Mobile touch targets
- [ ] Focus visibility

### Screen Reader Testing

| Screen Reader | Browser | Platform |
|---------------|---------|----------|
| VoiceOver | Safari | macOS |
| VoiceOver | Safari | iOS |
| NVDA | Chrome/Firefox | Windows |
| TalkBack | Chrome | Android |

---

## Acceptance Criteria

```gherkin
Scenario: Keyboard navigation
  GIVEN a keyboard user
  WHEN navigating the page with Tab key
  THEN all interactive elements receive focus
  AND focus order is logical (top to bottom, left to right)
  AND focus is always visible

Scenario: Screen reader navigation
  GIVEN a screen reader user
  WHEN navigating the page
  THEN all content is announced
  AND decorative elements are hidden
  AND interactive elements are labeled

Scenario: Reduced motion
  GIVEN user has prefers-reduced-motion enabled
  WHEN viewing the page
  THEN all animations are disabled or minimal
  AND blob backgrounds are hidden
  AND content is still accessible

Scenario: Color contrast
  GIVEN any text on the page
  WHEN measured against its background
  THEN contrast ratio is at least 4.5:1 for normal text
  AND at least 3:1 for large text

Scenario: Touch targets
  GIVEN a mobile user
  WHEN interacting with buttons/links
  THEN touch targets are at least 44x44px
```
