# Interactions & Animations Specification

Extracted from: https://scion-template.webflow.io/

---

## Global Transition Pattern

Most interactive elements use this base pattern:
```css
transition: all 0.2s ease;
/* or specific property */
transition: background-color 0.2s ease;
transition: opacity 0.2s ease;
transition: transform 0.3s ease;
```

---

## Button Interactions

### Primary Button (.button)
| State | Property | Value |
|-------|----------|-------|
| Default | background | `rgba(255, 255, 255, 0.06)` |
| Default | border-radius | `200px` |
| Default | transition | `background-color 0.2s` |
| Hover | background | `rgba(255, 255, 255, 0.4)` |

### Button Text Animation
- Uses nested spans for text reveal animation
- On hover: text slides up, secondary text slides in

---

## Link Interactions

### Arrow Link (.arrow-link)
| State | Property | Value |
|-------|----------|-------|
| Default | display | `flex` |
| Default | gap | `6px` |
| Default | transition | `opacity 0.2s` |
| Hover | opacity | `0.7` |
| Hover | arrow | Slides right (transform) |

### External Link (.external-link)
| State | Property | Value |
|-------|----------|-------|
| Default | display | `flex` |
| Default | gap | `2px` |
| Hover | icon | Rotates 45deg |

### Nav Link
| State | Property | Value |
|-------|----------|-------|
| Default | color | `rgb(255, 255, 255)` |
| Hover | color | `rgba(255, 255, 255, 0.7)` |

---

## Image Interactions

### Zoom Image Effect (.zoom-image-link)
| State | Property | Value |
|-------|----------|-------|
| Container | overflow | `hidden` |
| Container | border-radius | `10px` |
| Image default | transform | `scale(1)` |
| Image default | transition | `transform 0.5s ease` |
| Image hover | transform | `scale(1.05)` |

---

## Dropdown Menus

### Wide Dropdown (.dropdown-wide)
| State | Property | Value |
|-------|----------|-------|
| Closed | display | `none` |
| Closed | opacity | `0` |
| Open | display | `block` |
| Open | opacity | `1` |
| Transition | duration | `200ms` |
| Transition | timing | `ease-out` |

### Single Dropdown
| Property | Value |
|----------|-------|
| Animation | Fade + slide down |
| Duration | `200ms` |

---

## Slider/Carousel

### Feature Slider
| Property | Value |
|----------|-------|
| Slide transition | `transform 0.5s ease` |
| Auto-play | Likely enabled |
| Navigation | Arrow buttons (48x48px) |

### Arrow Buttons (.arrow-button)
| State | Property | Value |
|-------|----------|-------|
| Default | width/height | `48px` |
| Default | background | `rgba(255, 255, 255, 0.06)` |
| Default | border-radius | `50%` |
| Hover | background | `rgba(255, 255, 255, 0.2)` |

### Dot Navigation
| Property | Value |
|----------|-------|
| Dot size | `8px` |
| Gap | `8px` |
| Active dot | Full opacity |
| Inactive dot | `opacity: 0.5` |

---

## Hero Blob Animations

### Blob Elements (Webflow IX2)
The hero uses animated gradient blobs with these characteristics:

| Property | Value |
|----------|-------|
| Filter | `blur(96px)` |
| Animation type | Continuous loop |
| Properties animated | `transform` (translate, scale, rotate) |

### Blob Wrapper Transforms (Extracted)
```css
.hero-blob-wrapper-a {
  transform: matrix(1.86, 0, 0, 1.86, -437.343, 14.8123);
}
.hero-blob-wrapper-b {
  transform: matrix(1, 0, 0, 1, -56.9516, 144.666);
}
```

### Animation Characteristics
- Slow, organic movement
- Scale variations (1x to 1.86x observed)
- Position shifts (hundreds of pixels)
- Duration: 20-60 seconds (slow ambient animation)

---

## Scroll Animations

### Section Reveal
| Property | Value |
|----------|-------|
| Trigger | Element enters viewport (likely ~20% visible) |
| Animation | Fade up |
| Transform | `translateY(20px) → translateY(0)` |
| Opacity | `0 → 1` |
| Duration | `600-800ms` |
| Easing | `ease-out` |

### Stagger Effect
For grouped elements (cards, list items):
| Property | Value |
|----------|-------|
| Delay increment | `100-150ms` |
| Maximum items | Usually 4-6 before delay resets |

---

## Webflow IX2 Interaction Targets

Elements with `data-w-id` attribute (interaction targets):

| Element | Class | Purpose |
|---------|-------|---------|
| External link | `.external-link` | Arrow rotation on hover |
| Hero content | `.wide-section-content.hero-1` | Parallax/scroll effects |
| Hero blobs | `.hero-blob-wrapper-*` | Ambient animation |
| Sections | `.section` | Scroll reveal |
| Headings | `.heading-h2.long-title` | Text reveal animation |
| Images | `.grid-portrait-image` | Parallax scroll |

---

## CSS Implementation Examples

### Button Hover
```css
.button {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 200px;
  transition: background-color 0.2s ease;
}
.button:hover {
  background: rgba(255, 255, 255, 0.4);
}
```

### Zoom Image
```css
.zoom-image-link {
  overflow: hidden;
  border-radius: 10px;
}
.zoom-image-link img {
  transition: transform 0.5s ease;
}
.zoom-image-link:hover img {
  transform: scale(1.05);
}
```

### Arrow Link
```css
.arrow-link {
  display: flex;
  gap: 6px;
  transition: opacity 0.2s ease;
}
.arrow-link:hover {
  opacity: 0.7;
}
.arrow-link-icon {
  transition: transform 0.2s ease;
}
.arrow-link:hover .arrow-link-icon {
  transform: translateX(4px);
}
```

### External Link
```css
.external-link {
  display: flex;
  gap: 2px;
}
.external-link-icon {
  transition: transform 0.2s ease;
}
.external-link:hover .external-link-icon {
  transform: rotate(45deg);
}
```

---

## Timing Function Reference

| Name | Value | Usage |
|------|-------|-------|
| Standard ease | `ease` | Most transitions |
| Ease out | `ease-out` | Scroll reveals |
| Ease in-out | `ease-in-out` | Sliders |
| Linear | `linear` | Continuous animations |

---

## Performance Notes

1. **GPU Acceleration**: Transform and opacity animations are GPU-accelerated
2. **Will-change**: Consider adding `will-change: transform` for animated elements
3. **Reduce Motion**: Implement `prefers-reduced-motion` media query for accessibility
4. **Blob Animations**: May need optimization for lower-end devices
