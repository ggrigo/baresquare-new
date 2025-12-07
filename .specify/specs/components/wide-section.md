# Wide Section Component Specification

Extracted from: https://scion-template.webflow.io/

---

## Overview

Wide sections are full-width container sections with rounded corners, used for hero areas and CTA sections. They feature gradient backgrounds with noise and dot grid overlays.

---

## Structure

```html
<section class="section wide-section">
  <div class="wide-section-content [variant]">
    <!-- Background layers -->
    <div class="grid-bg"></div>
    <div class="noise-bg"></div>

    <!-- Optional gradient blobs -->
    <div class="gradient-vector-wrapper">
      <div class="gradient-vector"></div>
    </div>

    <!-- Content -->
    <div class="container">
      <!-- Section content -->
    </div>
  </div>
</section>
```

---

## Wide Section Container

| Property | Value |
|----------|-------|
| Padding | `0px 9px` (left/right only) |
| Background | `transparent` |

---

## Wide Section Content

### Base Specs
| Property | Value |
|----------|-------|
| Width | `1262px` (at 1280px viewport) |
| Border-radius | `10px` |
| Overflow | `hidden` |
| Position | `relative` |

---

## Variants

### Hero (hero-1)
| Property | Value |
|----------|-------|
| Height | `702px` |
| Background | `rgb(108, 88, 141)` (purple accent) |
| Padding | `100px 0px` (vertical) |

### Mid-Page CTA (mid-page-cta)
| Property | Value |
|----------|-------|
| Height | `480px` |
| Background | `rgb(108, 88, 141)` |
| Padding | `48px 24px` |

### Feature Section
| Property | Value |
|----------|-------|
| Background | `rgb(18, 18, 18)` (dark) |
| Min-height | Varies by content |

---

## Background Layers

### Layer Stacking Order (z-index)
1. Gradient vectors / blobs (z-index: 1-2)
2. Gradient background (base)
3. Dot grid overlay (z-index: 3)
4. Noise texture overlay (z-index: 4)
5. Content (z-index: 5+)

### Grid Background
| Property | Value |
|----------|-------|
| Background-image | `url('/textures/dot-grid.png')` |
| Background-size | `auto` |
| Background-repeat | `repeat` |
| Opacity | `0.7` |
| Position | `absolute` |
| Inset | `0` |
| Pointer-events | `none` |

### Noise Overlay
| Property | Value |
|----------|-------|
| Background-image | `url('/textures/noise-pattern.png')` |
| Background-size | `150px 150px` |
| Background-repeat | `repeat` |
| Opacity | `1` |
| Position | `absolute` |
| Inset | `0` |
| Pointer-events | `none` |

---

## Inner Container

| Property | Value |
|----------|-------|
| Max-width | `1248px` |
| Padding | `48px 24px` |
| Position | `relative` |
| Z-index | `5` |

---

## Gradient Effects

### Purple Gradient (Hero)
Base color: `rgb(108, 88, 141)`

With animated blobs creating gradient variation:
- Blur: `96px`
- Multiple overlapping elements
- Continuous ambient animation

### Boxed CTA
| Property | Value |
|----------|-------|
| Width | `768px` |
| Height | `298px` |
| Padding | `36px` |
| Background | `rgba(0, 0, 0, 0.25)` |
| Border-radius | `10px` |
| Backdrop-filter | None (uses solid semi-transparent) |

---

## Responsive Breakpoints

### Tablet (768px)
| Change | Value |
|--------|-------|
| Side padding | `0px 6px` |
| Content padding | `36px 18px` |
| Border-radius | `10px` (maintained) |

### Mobile (390px)
| Change | Value |
|--------|-------|
| Side padding | `0px 6px` |
| Border-radius | `10px` or `0` (full bleed option) |
| Content padding | `24px 18px` |

---

## CSS Implementation

```css
.section.wide-section {
  padding: 0 9px;
}

.wide-section-content {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.wide-section-content.hero-1 {
  background: var(--bg-accent);
  min-height: 702px;
  padding: 100px 0;
}

.wide-section-content.mid-page-cta {
  background: var(--bg-accent);
  padding: 48px 24px;
}

/* Background layers */
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

.noise-bg {
  position: absolute;
  inset: 0;
  background-image: url('/textures/noise-pattern.png');
  background-size: 150px 150px;
  background-repeat: repeat;
  opacity: 1;
  pointer-events: none;
  z-index: 4;
}

/* Content container */
.wide-section-content > .container {
  position: relative;
  z-index: 5;
  max-width: 1248px;
  padding: 48px 24px;
}

/* Boxed CTA */
.boxed-cta {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 36px;
  max-width: 768px;
}

@media (max-width: 767px) {
  .section.wide-section {
    padding: 0 6px;
  }
  .wide-section-content > .container {
    padding: 24px 18px;
  }
}
```

---

## Usage Notes

1. **Overflow Hidden**: Critical for rounded corners to clip background layers
2. **Relative Positioning**: Required for absolute positioned background layers
3. **Z-index Management**: Ensure content sits above all background layers
4. **Texture Performance**: Consider lazy loading textures or using CSS patterns for critical above-fold sections
