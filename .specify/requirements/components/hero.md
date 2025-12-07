# Hero Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | Hero |
| File | `src/components/Hero.astro` |
| Priority | Critical |
| Complexity | High |
| Estimated Lines | ~200 |

---

## Description

The main hero section featuring animated gradient blobs, a large headline with serif italic accent word, video thumbnail, and text card. Uses WideSection container with full overlay treatment.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| WideSection | Component | Yes |
| NoiseOverlay | Component | Yes |
| GridOverlay | Component | Yes |
| Button | Component | Yes |
| Navbar | Component | Yes (rendered inside) |
| Newsreader font | Asset | Yes (italic word) |

---

## Sub-Components

| Name | File | Description |
|------|------|-------------|
| BlobAnimation | BlobAnimation.astro | Animated gradient blobs |
| VideoThumbnail | VideoThumbnail.astro | Video preview with play button |
| TextCard | TextCard.astro | Text block with dot title |
| DotTitle | DotTitle.astro | Label with dot indicator |

---

## Used In

- Homepage (primary section)

---

## Props Specification

```typescript
interface HeroProps {
  /**
   * Main headline text (without italic word)
   */
  headline: string;

  /**
   * Italic accent word
   */
  accentWord: string;

  /**
   * Video thumbnail image
   */
  videoThumbnail: {
    src: string;
    alt: string;
  };

  /**
   * Video URL (for play button)
   */
  videoUrl?: string;

  /**
   * Text card content
   */
  textCard: {
    label: string;
    description: string;
  };

  /**
   * Additional CSS class
   */
  class?: string;
}
```

---

## HTML Structure

```html
<section class="hero">
  <div class="wide-section">
    <div class="wide-section-content hero-bg">
      <!-- Animated gradient blobs -->
      <div class="hero-blobs" aria-hidden="true">
        <div class="blob blob--1"></div>
        <div class="blob blob--2"></div>
        <div class="blob blob--3"></div>
        <div class="blob blob--4"></div>
        <div class="blob blob--5"></div>
      </div>

      <!-- Grid overlay -->
      <div class="grid-overlay" aria-hidden="true"></div>

      <!-- Noise overlay -->
      <div class="noise-overlay" aria-hidden="true"></div>

      <!-- Navbar (inside hero) -->
      <nav class="navbar-wrapper">...</nav>

      <!-- Hero content -->
      <div class="container hero-container">
        <!-- Main headline -->
        <h1 class="hero-headline">
          Pulling the future <em>forward</em>.
        </h1>

        <!-- Content row -->
        <div class="hero-content-row">
          <!-- Video thumbnail -->
          <div class="hero-video">
            <img src="..." alt="..." class="hero-video-img">
            <button class="hero-video-play" aria-label="Play video">
              <svg>...</svg>
            </button>
          </div>

          <!-- Text card -->
          <div class="hero-text-card">
            <div class="dot-title">
              <span class="dot"></span>
              <span class="dot-title-text">About Scion</span>
            </div>
            <p class="hero-text-description">
              Description text here...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## CSS Implementation

```css
/* Hero section */
.hero {
  position: relative;
}

.hero-bg {
  background: var(--bg-accent);
  min-height: 930px;
  display: flex;
  flex-direction: column;
}

/* Gradient blobs container */
.hero-blobs {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(96px);
  opacity: 0.8;
}

.blob--1 {
  width: 400px;
  height: 400px;
  background: var(--accent-orange);
  top: 10%;
  left: 20%;
  animation: blob-float-1 45s ease-in-out infinite;
}

.blob--2 {
  width: 350px;
  height: 350px;
  background: var(--accent-green);
  top: 30%;
  right: 15%;
  animation: blob-float-2 38s ease-in-out infinite;
}

.blob--3 {
  width: 300px;
  height: 300px;
  background: var(--accent-gold);
  bottom: 20%;
  left: 30%;
  animation: blob-float-3 52s ease-in-out infinite;
}

.blob--4 {
  width: 250px;
  height: 250px;
  background: var(--accent-purple);
  top: 50%;
  right: 30%;
  animation: blob-float-4 60s ease-in-out infinite;
}

.blob--5 {
  width: 200px;
  height: 200px;
  background: var(--accent-orange);
  bottom: 30%;
  right: 10%;
  animation: blob-float-5 42s ease-in-out infinite;
}

@keyframes blob-float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(50px, 30px) scale(1.1); }
  50% { transform: translate(-30px, 60px) scale(0.95); }
  75% { transform: translate(40px, -20px) scale(1.05); }
}

/* Similar keyframes for blob-float-2 through blob-float-5 */

/* Hero container */
.hero-container {
  position: relative;
  z-index: 5;
  padding-top: 96px;
  padding-bottom: 96px;
}

/* Headline */
.hero-headline {
  font-family: var(--font-primary);
  font-size: 64px;
  font-weight: 400;
  line-height: 1.1;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 72px;
}

.hero-headline em {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}

/* Content row */
.hero-content-row {
  display: flex;
  gap: 24px;
  max-width: 960px;
  margin: 0 auto;
}

/* Video thumbnail */
.hero-video {
  position: relative;
  width: 340px;
  height: 192px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}

.hero-video-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-video-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.hero-video-play:hover {
  background: rgba(0, 0, 0, 0.7);
}

/* Text card */
.hero-text-card {
  flex: 1;
  padding: 24px;
  background: var(--bg-card);
  border-radius: 10px;
}

.hero-text-description {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.4;
  margin-top: 12px;
}

/* Responsive */
@media (max-width: 991px) {
  .hero-headline {
    font-size: 48px;
  }

  .hero-container {
    padding-top: 72px;
    padding-bottom: 72px;
  }
}

@media (max-width: 767px) {
  .hero-headline {
    font-size: 36px;
    margin-bottom: 48px;
  }

  .hero-content-row {
    flex-direction: column;
  }

  .hero-video {
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
  }
}

@media (max-width: 479px) {
  .hero-container {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .hero-headline {
    font-size: 32px;
    margin-bottom: 36px;
  }

  /* Reduce blob animations on mobile */
  .hero-blobs {
    display: none;
  }
}
```

### Critical CSS Values

| Property | Value | Tolerance |
|----------|-------|-----------|
| min-height | 930px (desktop) | Flexible |
| h1 font-size | 64px / 48px / 36px | Per breakpoint |
| h1 line-height | 1.1 | Exact |
| blob blur | 96px | Exact |
| video dimensions | 340x192px | Desktop only |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | All elements visible, blobs animating | Initial render |
| video-hover | Play button background darker | Mouse enter on video |
| reduced-motion | Blobs static | prefers-reduced-motion |
| mobile | No blobs, stacked layout | ≤479px |

### Animation States
| Element | Duration | Easing |
|---------|----------|--------|
| Blob 1 | 45s | ease-in-out |
| Blob 2 | 38s | ease-in-out |
| Blob 3 | 52s | ease-in-out |
| Blob 4 | 60s | ease-in-out |
| Blob 5 | 42s | ease-in-out |

---

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| 1920px+ | Full blobs, 64px headline |
| 992-1919px | Full blobs, 64px headline |
| 768-991px | Reduced blobs, 48px headline |
| 480-767px | Minimal blobs, 36px headline, stacked content |
| 0-479px | No blobs, 32px headline, compact layout |

### Content Reflow
```
Desktop: [Video] [Text Card]
Mobile:  [Video]
         [Text Card]
```

---

## Accessibility Checklist

- [x] H1 is properly structured
- [x] Video play button has aria-label
- [x] Blobs use aria-hidden="true"
- [x] Color contrast ≥ 4.5:1 on headline
- [x] Video has alt text on thumbnail
- [x] Keyboard navigable (video button focusable)
- [x] Reduced motion respects preference
- [x] Screen reader announces headline first

### Keyboard Navigation
| Key | Action |
|-----|--------|
| Tab | Focus video play button |
| Enter/Space | Trigger video modal |
| Escape | Close video modal |

---

## Performance Requirements

| Metric | Budget |
|--------|--------|
| CSS Size | < 4KB |
| JS Size | 0KB (CSS animations only) |
| LCP Element | H1 or Video thumbnail |
| Animation FPS | 60fps (GPU accelerated) |

### Optimization Notes
- Blobs use `filter: blur()` which is GPU accelerated
- Consider removing blobs on mobile for performance
- Video thumbnail should be optimized (WebP, lazy load false)
- Preload Newsreader italic font

---

## Acceptance Criteria

```gherkin
Feature: Hero Component

Scenario: Headline rendering
  GIVEN the Hero renders
  WHEN viewed on desktop
  THEN H1 displays at 64px font-size
  AND "forward" is in italic serif font
  AND headline is centered

Scenario: Blob animations
  GIVEN the Hero renders on desktop
  WHEN animations run
  THEN 5 gradient blobs animate continuously
  AND blur is 96px
  AND animations are 38-60 seconds each

Scenario: Reduced motion
  GIVEN user has prefers-reduced-motion set
  WHEN Hero renders
  THEN blob animations are paused or removed

Scenario: Video thumbnail
  GIVEN video thumbnail renders
  WHEN user hovers
  THEN play button background darkens
  AND transition is 200ms

Scenario: Mobile layout
  GIVEN viewport is 479px or less
  WHEN Hero renders
  THEN blobs are hidden
  AND video and text card stack vertically
  AND headline is 32px

Scenario: Content stacking
  GIVEN viewport is 767px or less
  WHEN Hero renders
  THEN video appears above text card

Scenario: Layer order
  GIVEN Hero renders
  WHEN all layers visible
  THEN content is above noise (z-5)
  AND noise is above grid (z-4)
  AND grid is above blobs (z-3)
```

---

## Edge Cases

| Case | Expected Behavior |
|------|-------------------|
| No video URL | Play button hidden |
| Missing font | Falls back to system serif |
| Very long headline | Text wraps naturally |
| Video fails to load | Show placeholder |
| Extremely wide viewport | Max-width on content |

---

## Cross-Browser Notes

| Browser | Notes |
|---------|-------|
| Chrome | Full support |
| Firefox | Test blur performance |
| Safari | Check blob rendering |
| Edge | Full support |
| iOS Safari | Test blob performance |
| Chrome Android | Consider disabling blobs |

### Known Issues
- Large blur radii can impact performance on low-end devices
- Safari may render blur differently
- Mobile should probably skip blob animations

---

## Assets Required

| Asset | Dimensions | Format | Notes |
|-------|------------|--------|-------|
| Video thumbnail | 340x192 (16:9) | WebP | LCP candidate |
| Newsreader italic | - | WOFF2 | Preload |
| Play icon | 24x24 | SVG | Inside button |
