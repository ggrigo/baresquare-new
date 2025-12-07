# Hero Section Component Specification

Extracted from: https://scion-template.webflow.io/

---

## Structure

```html
<section class="section wide-section">
  <div class="wide-section-content hero-1">
    <!-- Background layers -->
    <div class="hero-blob-wrapper-a">
      <div class="blob hero-blob-a1"></div>
      <div class="blob hero-blob-a2"></div>
    </div>
    <!-- More blob wrappers: b, c, d, e -->

    <div class="grid-bg"></div>
    <div class="noise-bg"></div>

    <!-- Content -->
    <div class="container">
      <div class="hero-content">
        <h1 class="heading-h1">
          Pulling the future <em>forward</em>.
        </h1>
        <!-- Video thumbnail + text -->
      </div>
    </div>
  </div>
</section>
```

---

## Desktop Specs (1920px)

### Wide Section Container
| Property | Value |
|----------|-------|
| Padding | `0px 9px` |
| Background | transparent |

### Hero Content Box
| Property | Value |
|----------|-------|
| Width | `1262px` |
| Height | `702px` |
| Background | `rgb(108, 88, 141)` (purple accent) |
| Border-radius | `10px` |
| Overflow | `hidden` |
| Position | `relative` |

### Inner Container
| Property | Value |
|----------|-------|
| Max-width | `1248px` |
| Padding | `48px 24px` |
| Vertical padding (hero) | `100px 0px` |

---

## Typography

### H1 Heading
| Property | Value |
|----------|-------|
| Font-size | `64px` |
| Line-height | `70.4px` (1.1) |
| Font-weight | `400` |
| Font-family | Aspekta |
| Color | `rgb(255, 255, 255)` |
| Text-align | `center` |

### H1 Italic Word ("forward")
| Property | Value |
|----------|-------|
| Font-family | Newsreader |
| Font-style | `italic` |
| Font-weight | `400` |

---

## Background Effects

### Blob Elements (Animated Gradients)
| Element | Dimensions | Filter | Transform |
|---------|------------|--------|-----------|
| hero-blob-a1 | 734x640 | `blur(96px)` | Animated via Webflow IX2 |
| hero-blob-a2 | 734x640 | `blur(96px)` | Animated via Webflow IX2 |
| hero-blob-b1 | 692x640 | `blur(96px)` | Animated via Webflow IX2 |

### Blob Wrapper Transforms
| Wrapper | Transform Matrix |
|---------|-----------------|
| hero-blob-wrapper-a | `matrix(1.86, 0, 0, 1.86, -437.343, 14.8123)` |
| hero-blob-wrapper-b | `matrix(1, 0, 0, 1, -56.9516, 144.666)` |

### Grid Background
| Property | Value |
|----------|-------|
| Background-image | `url('/textures/dot-grid.png')` |
| Background-size | `auto` |
| Background-repeat | `repeat` |
| Opacity | `0.7` |
| Position | `absolute` |
| Inset | `0` |
| Z-index | `3` |

### Noise Overlay
| Property | Value |
|----------|-------|
| Background-image | `url('/textures/noise-pattern.png')` |
| Background-size | `150px 150px` |
| Background-repeat | `repeat` |
| Opacity | `1` |
| Position | `absolute` |
| Inset | `0` |
| Z-index | `4` |
| Pointer-events | `none` |

---

## Video Thumbnail

| Property | Value |
|----------|-------|
| Width | `340px` |
| Height | `192px` |
| Border-radius | `10px` |
| Object-fit | `cover` |
| Box-shadow | `rgba(0, 0, 0, 0.25) 0px 48px 48px` |

### Play Button
| Property | Value |
|----------|-------|
| Position | `absolute` |
| Centered | `top: 50%, left: 50%, transform: translate(-50%, -50%)` |
| Icon size | `16x19px` |

---

## Hero Text Block

### Label (Dot Title)
| Property | Value |
|----------|-------|
| Font-size | `12px` |
| Font-weight | `700` |
| Letter-spacing | `0.08em` |
| Text-transform | `uppercase` |
| Color | `rgb(255, 255, 255)` |
| Display | `flex` |
| Gap | `12px` |
| Align-items | `center` |

### Dot Indicator
| Property | Value |
|----------|-------|
| Width | `6px` |
| Height | `6px` |
| Border-radius | `50%` |
| Background | `rgb(224, 131, 92)` (orange accent) |

### Body Text
| Property | Value |
|----------|-------|
| Font-size | `16px` |
| Line-height | `22.4px` (1.4) |
| Color | `rgba(255, 255, 255, 0.7)` |
| Max-width | `~350px` |

---

## Responsive Breakpoints

### Tablet (768px)
- H1 font-size reduces
- Video thumbnail may resize
- Layout remains similar

### Mobile (390px)
- H1 font-size: smaller (TBD from mobile extraction)
- Single column layout
- Video thumbnail: full width or hidden
- Blobs may be simplified

---

## Layer Stacking (Z-Index Order)

1. Blob wrappers (z-index: 1-2)
2. Grid background (z-index: 3)
3. Noise overlay (z-index: 4)
4. Content (z-index: 5+)

---

## Animation Notes

- Hero uses Webflow IX2 for blob animations
- Blobs have continuous floating/scaling animation
- On scroll, hero content may have parallax or fade effects
- Video thumbnail has hover state for play indication
