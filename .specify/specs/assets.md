# Assets Specification - Scion Landing

Extracted from: https://scion-template.webflow.io/

---

## CRITICAL: Texture Overlays

### Noise Texture (Most Important!)

| Property | Value |
|----------|-------|
| **Source URL** | `https://cdn.prod.website-files.com/67f856119a6424eec0fe6e15/67f86d23be02f2255f005fcf_noise-pattern.png` |
| **Display Size** | `150px x 150px` |
| **Background-repeat** | `repeat` |
| **Background-position** | `0px 0px` |
| **Position** | `absolute` |
| **Z-index** | `4` |
| **Pointer-events** | `none` |
| **Mix-blend-mode** | `normal` |

#### Opacity Variations
| Context | Opacity |
|---------|---------|
| Hero/Wide sections | `1` (full) |
| Service card boxes | `0.3` |
| Icon boxes | `1` |

#### CSS Implementation
```css
.noise-bg {
  position: absolute;
  inset: 0;
  background-image: url('/textures/noise-pattern.png');
  background-size: 150px 150px;
  background-repeat: repeat;
  z-index: 4;
  pointer-events: none;
  opacity: 1;
}

.noise-bg.service-noise {
  opacity: 0.3;
}
```

---

### Dot Grid Pattern

| Property | Value |
|----------|-------|
| **Source URL** | `https://cdn.prod.website-files.com/67f856119a6424eec0fe6e15/67f872aa5071543b2b79369b_dot-grid.png` |
| **Background-size** | `auto` (natural size) |
| **Background-repeat** | `repeat` |

#### Opacity Variations
| Context | Opacity |
|---------|---------|
| Hero/Wide sections | `0.7` |
| Padded dot wrapper | `0.2` |
| Service card boxes | `0.2` |

#### CSS Implementation
```css
.grid-bg {
  position: absolute;
  inset: 0;
  background-image: url('/textures/dot-grid.png');
  background-size: auto;
  background-repeat: repeat;
  opacity: 0.7;
  pointer-events: none;
}

.grid-bg.non-overlay,
.grid-bg.service-grid-bg {
  opacity: 0.2;
}
```

---

## Logo & Branding

### Main Logo
| Property | Value |
|----------|-------|
| **Source** | `scion-logo.svg` |
| **Dimensions** | `138px x 16px` |
| **Format** | SVG |
| **URL** | `https://cdn.prod.website-files.com/67f856119a6424eec0fe6e15/67feec07eac3804212495135_scion-logo.svg` |

### Ology "O" Symbol
| Property | Value |
|----------|-------|
| **Source** | `ology-o.svg` |
| **Dimensions** | `94px x 67px` |
| **URL** | `https://cdn.prod.website-files.com/67f856119a6424eec0fe6e15/67fc7b575ba9177d5226655d_ology-o.svg` |

---

## Navbar Assets

### Notch Corner
| Property | Value |
|----------|-------|
| **Source** | `notch-corner.svg` |
| **Dimensions** | `5px x 5px` |
| **URL** | `https://cdn.prod.website-files.com/67f856119a6424eec0fe6e15/67f86d2313bef029c9128985_notch-corner.svg` |
| **Usage** | Left and right corners of navbar notch |

---

## Icons

### Interface Icons
| Icon | Size | URL |
|------|------|-----|
| Arrow Right | 24x24 | `icon-interface-arrow-right.svg` |
| Arrow Down-Right | 18x18 | `icon-interface-arrow-down-right.svg` |
| Arrow Up-Right | 24x24 | `icon-interface-arrow-up-right.svg` |
| Arrow Up Small | 16x16 | `icon-interface-arrow-up-small.svg` |
| Arrow Down Thick | - | `icon-interface-arrow-down-thick.svg` |
| Cross | 24x24 | `icon-interface-cross.svg` |
| Search | 20x20 | `icon-interface-search.svg` |
| Menu | 24x24 | `icon-interface-menu.svg` |
| Video Play | 16x19 | `interface-icon-video-play-2.svg` |

### Abstract Shape Icons (for service cards)
| Icon | Size | URL |
|------|------|-----|
| Shape 03 | 96x96 | `icon-abstract-shape-03.svg` |
| Shape 04 | 96x96 | `icon-abstract-shape-04.svg` |
| Shape 05 | 96x96 | `icon-abstract-shape-05.svg` |
| Shape 07 | 96x96 | `icon-abstract-shape-07.svg` |
| Shape 08 | 96x96 | `icon-abstract-shape-08.svg` |
| Shape 09 | 96x96 | `icon-abstract-shape-09.svg` |
| Shape 10 | 96x96 | `icon-abstract-shape-10.svg` |

### Social Icons (18x18)
- Bluesky: `icon-social-bluesky.svg`
- LinkedIn: `icon-social-linkedin.svg`
- Instagram: `icon-social-instagram.svg`
- X (Twitter): `icon-social-x.svg`

---

## Photography

### Landscape Images (1280x853 - 3:2 ratio)
| Name | Usage |
|------|-------|
| `landscape-01.webp` | Hero background |
| `landscape-02.webp` | Image pair (left, desaturated) |
| `landscape-08.webp` | Industry slider |
| `landscape-09.webp` | Industry slider |
| `landscape-10.webp` | Feature slider |
| `landscape-14.webp` | Industry slider |
| `landscape-15.webp` | Feature slider |
| `landscape-16.webp` | Feature slider |

### Portrait Images
| Name | Dimensions | Usage |
|------|------------|-------|
| `portrait-01.webp` | 1279x1699 | Grid portrait |
| `portrait-04.webp` | 1280x1920 | Image pair (right) |

### Customer/Team Photos
| Name | Dimensions | Usage |
|------|------------|-------|
| `customer-01.webp` | 1280x853 | Customer quote section |

### Blog Images
| Name | Dimensions |
|------|------------|
| `blog-01.webp` | 1280x853 |
| `blog-02.webp` | 1280x853 |
| `blog-04.webp` | 1280x853 |
| `blog-06.webp` | 1280x853 |

---

## Customer Logos
| Logo | Dimensions |
|------|------------|
| `logo-gridpoint.svg` | 151x28 |
| `logo-contiuumai.svg` | 153x20 |
| `logo-eisnersterling.svg` | 99x49 |

---

## Asset Download Checklist

### Must Download
- [ ] `noise-pattern.png` - Critical for visual texture
- [ ] `dot-grid.png` - Critical for visual texture
- [ ] `notch-corner.svg` - Critical for navbar
- [ ] `scion-logo.svg` - Brand identity
- [ ] All interface icons (arrows, menu, etc.)
- [ ] All abstract shape icons (service boxes)
- [ ] All social icons

### Download from Figma (Higher Quality)
- [ ] All landscape images
- [ ] All portrait images
- [ ] Customer/team photos
- [ ] Blog images

---

## Layer Stacking Order

For sections with texture overlays:
```
1. Base content (z-index: 1)
2. Gradient vectors (z-index: 2-3)
3. Dot grid overlay (z-index: 3)
4. Noise texture overlay (z-index: 4)
5. Content above overlays (z-index: 5+)
```

---

## Image Optimization Notes

- All photos served as `.webp` format
- Lazy loading applied to below-fold images (`loading="lazy"`)
- Above-fold images loaded immediately (`loading="auto"`)
- SVG icons for all vector graphics
- PNG for noise texture (required for transparency pattern)
