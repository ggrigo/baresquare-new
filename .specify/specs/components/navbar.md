# Navbar Component Specification

Extracted from: https://scion-template.webflow.io/

---

## Structure

```html
<div class="navbar-wrapper">
  <div class="navbar-content">
    <div class="navbar-top-line"></div>
    <nav class="navbar">
      <div class="notch-left-corner">
        <img src="notch-corner.svg" />
      </div>
      <a class="logo-wrapper" href="/">
        <img class="logo" src="scion-logo.svg" />
      </a>
      <div class="nav-menu">
        <!-- Nav links -->
        <a class="nav-link">Home</a>
        <div class="nav-dropdown w-dropdown">
          <!-- Dropdown content -->
        </div>
      </div>
      <div class="notch-right-corner">
        <img src="notch-corner.svg" />
      </div>
      <div class="nav-right">
        <a class="button">Buy Scion</a>
      </div>
    </nav>
  </div>
</div>
```

---

## Desktop Specs (992px+)

### Navbar Wrapper
| Property | Value |
|----------|-------|
| Position | `sticky` |
| Top | `0` |
| Z-index | `99999999` |
| Padding | `18px` |

### Navbar Content
| Property | Value |
|----------|-------|
| Background | `rgb(0, 0, 0)` |
| Border-radius | `0px 0px 5px 5px` (bottom corners only) |
| Display | `flex` |
| Align-items | `center` |

### Navbar Top Line
| Property | Value |
|----------|-------|
| Height | `1px` |
| Background | `rgba(255, 255, 255, 0.1)` |
| Position | `absolute` |
| Top | `0` |
| Width | `100%` |

### Notch Corners
| Property | Value |
|----------|-------|
| Dimensions | `5px x 5px` |
| Position | `absolute` |
| Left corner | Left: `0`, Top: `100%` |
| Right corner | Right: `0`, Top: `100%` |

### Logo
| Property | Value |
|----------|-------|
| Dimensions | `138px x 16px` |
| Format | SVG |

### Nav Links
| Property | Value |
|----------|-------|
| Font-size | `16px` |
| Color | `rgb(255, 255, 255)` |
| Font-family | Aspekta |
| Padding | `6px 12px` |

### CTA Button
| Property | Value |
|----------|-------|
| Padding | `0px 54px` |
| Height | Matches nav height |
| Background | `rgba(255, 255, 255, 0.06)` |
| Border-radius | `200px` (pill) |
| Font-size | `13px` |
| Color | `rgb(255, 255, 255)` |
| Transition | `background-color 0.2s` |

### CTA Button Hover
| Property | Value |
|----------|-------|
| Background | `rgba(255, 255, 255, 0.4)` |

---

## Dropdown Menu

### Wide Dropdown
| Property | Value |
|----------|-------|
| Position | `absolute` |
| Width | `100%` |
| Left | `0` |
| Background | `rgba(0, 0, 0, 0.8)` |
| Backdrop-filter | `blur(24px)` |
| Padding | `48px 24px 24px` |
| Border-radius | `0px 0px 5px 5px` |

### Dropdown Link
| Property | Value |
|----------|-------|
| Font-size | `20px` |
| Line-height | `26px` |
| Color | `rgb(255, 255, 255)` |

### Dropdown Animation
| Property | Value |
|----------|-------|
| Initial display | `none` |
| Transition | Opacity + transform |
| Duration | ~200ms |

---

## Responsive Breakpoints

### Tablet (991px and below)
- Navigation collapses to hamburger menu
- Menu icon: `24px x 24px`
- Mobile nav overlay: full screen, `rgba(0, 0, 0, 0.8)`

### Mobile (479px and below)
- Logo may scale down
- CTA button may be hidden or moved to mobile menu

---

## Key Implementation Notes

1. **Notch Effect**: The unique notch design uses two 5x5px SVG corner images positioned absolutely at the bottom corners of the navbar
2. **Sticky Behavior**: Navbar stays fixed on scroll with high z-index
3. **Backdrop Blur**: Dropdown uses `backdrop-filter: blur(24px)` for frosted glass effect
4. **Button Animation**: Smooth 0.2s background color transition on hover
