# Webflow vs Framer Comparison

Comparison of implementations from both demo sites.

---

## Summary

| Aspect | Webflow | Framer | Recommendation |
|--------|---------|--------|----------------|
| **Font Family** | Aspekta | Geist | Use Aspekta (original design) |
| **Noise Texture Size** | 150px | 150px | Same - confirmed |
| **Transition Timing** | `ease` | `cubic-bezier(0.44, 0, 0.56, 1)` | Framer's custom easing |
| **Hero Height** | 702px | 720px | Use 702px (Webflow) |

---

## Typography

### Font Families

| Platform | Primary Font | Serif Accent |
|----------|--------------|--------------|
| Webflow | Aspekta | Newsreader |
| Framer | Geist | (TBD) |

**Recommendation**: Use **Aspekta** as it matches the original Figma design and Webflow implementation.

### H1 Specifications

| Property | Webflow | Framer |
|----------|---------|--------|
| Font-size | `64px` | `64px` |
| Line-height | `70.4px` | `70.4px` |
| Font-weight | `400` | `400` |
| Color | `#ffffff` | `#ffffff` |

**Result**: Identical typography scale.

---

## Colors

### Background Colors

| Color | Webflow | Framer | Match |
|-------|---------|--------|-------|
| Body BG | `rgb(30, 30, 30)` | `rgb(30, 30, 30)` | Exact |
| Dark BG | `rgb(18, 18, 18)` | `rgb(18, 18, 18)` | Exact |
| Card BG | `rgba(255, 255, 255, 0.06)` | `rgba(255, 255, 255, 0.06)` | Exact |
| Accent Purple | `rgb(108, 88, 141)` | `rgb(108, 88, 141)` | Exact |

### Accent Colors

| Color | Webflow | Framer | Match |
|-------|---------|--------|-------|
| Orange | `rgb(224, 131, 92)` | `rgb(224, 131, 92)` | Exact |
| Green | `rgb(162, 183, 159)` | `rgb(162, 183, 159)` | Exact |
| Gold | `rgb(216, 163, 115)` | `rgb(216, 163, 115)` | Exact |

**Result**: All colors match perfectly.

---

## Textures

### Noise Texture

| Property | Webflow | Framer |
|----------|---------|--------|
| Size | `150px x 150px` | `150px` |
| Repeat | `repeat` | `repeat` |
| Opacity | `1` | `1` |

**CDN URLs**:
- Webflow: `https://cdn.prod.website-files.com/.../noise-pattern.png`
- Framer: `https://framerusercontent.com/images/0W8QRSemHdaCrSMY0upWHfdsmn0.png`

**Result**: Same implementation, different hosting.

### Dot Grid Texture

| Property | Webflow | Framer |
|----------|---------|--------|
| Size | `auto` | `1482px` |
| Repeat | `repeat` | `repeat` |

**Difference**: Framer uses a specific large size, Webflow uses auto.

---

## Transitions & Animations

### Button/Link Transitions

| Platform | Timing Function |
|----------|-----------------|
| Webflow | `ease` or `ease-in-out` |
| Framer | `cubic-bezier(0.44, 0, 0.56, 1)` |

### Framer Custom Easing

```css
/* Framer's custom easing - smoother feel */
transition: color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
```

**Recommendation**: Consider using Framer's custom easing for a more polished feel.

---

## Component Structure

### Navbar

| Property | Webflow | Framer |
|----------|---------|--------|
| Height | `~60px` | `61px` |
| Position | `sticky` | `relative` |
| Z-index | `99999999` | `auto` |
| Background | `#000` | Transparent |

**Difference**: Webflow has sticky nav with explicit z-index.

### Hero Section

| Property | Webflow | Framer |
|----------|---------|--------|
| Width | `1262px` | `1280px` |
| Height | `702px` | `720px` |
| Border-radius | `10px` | `10px` |

---

## Framer Component Names

Framer uses semantic `data-framer-name` attributes:
- "Desktop", "Container", "Content"
- "Logo", "Nav Links", "Dropdown"
- "Title", "Dot", "Nav Cta"
- "Text", "Icon"

These provide useful semantic hints for implementation.

---

## Unique Framer Features

### Custom Easing Function

```css
/* More refined than standard ease */
cubic-bezier(0.44, 0, 0.56, 1)
```

This creates a subtle "snap" feel that's more polished than standard easing.

### Background Textures

Framer hosts unique versions of textures:
- `0W8QRSemHdaCrSMY0upWHfdsmn0.png` - Noise
- `vLikCLnzwwcHeQgCk9IbnE9w0.png` - Dot grid (large)
- `2R1OuRUZZKgzb6d6QMYRWL5x7M.png` - Additional texture (576px)

---

## Unique Webflow Features

### Webflow IX2 Interactions

More sophisticated scroll and hover animations:
- Parallax effects on images
- Blob animations with transforms
- Text reveal animations
- Staggered element entries

### Sticky Navigation

Proper sticky behavior with high z-index.

### Notch Corner Design

5x5px SVG corners for unique navbar shape.

---

## Implementation Recommendations

### Use from Webflow:
1. **Aspekta font** - Original design font
2. **Sticky navbar** with notch corners
3. **IX2-style animations** - More sophisticated
4. **Noise texture** at 150px
5. **Component dimensions** - More precise

### Use from Framer:
1. **Custom easing** - `cubic-bezier(0.44, 0, 0.56, 1)`
2. **Semantic naming** - Clear component hierarchy
3. **Color transitions** - 0.2s/0.4s durations

### Implement Fresh:
1. **SVG dot grid** - Generate instead of image for better scaling
2. **CSS-only blob animations** - More performant than IX2
3. **Responsive breakpoints** - Custom for Astro

---

## Final CSS Variables Recommendation

```css
:root {
  /* Colors (confirmed from both) */
  --bg-primary: rgb(30, 30, 30);
  --bg-dark: rgb(18, 18, 18);
  --bg-card: rgba(255, 255, 255, 0.06);
  --bg-accent: rgb(108, 88, 141);

  --text-primary: #ffffff;
  --text-muted: rgba(255, 255, 255, 0.7);
  --text-subtle: rgba(255, 255, 255, 0.5);

  --accent-orange: rgb(224, 131, 92);
  --accent-green: rgb(162, 183, 159);
  --accent-gold: rgb(216, 163, 115);

  /* Typography (Webflow) */
  --font-primary: 'Aspekta', sans-serif;
  --font-serif: 'Newsreader', serif;

  /* Transitions (Framer-inspired) */
  --ease-smooth: cubic-bezier(0.44, 0, 0.56, 1);
  --transition-fast: 0.2s var(--ease-smooth);
  --transition-medium: 0.4s var(--ease-smooth);

  /* Textures (both match) */
  --noise-size: 150px;
}
```
