# Responsive Design Specification

Extracted from: https://scion-template.webflow.io/

---

## Breakpoints

| Name | Width | Media Query | Target |
|------|-------|-------------|--------|
| Desktop XL | 1920px+ | `min-width: 1920px` | Large monitors |
| Desktop | 992px - 1919px | `min-width: 992px` | Standard desktop |
| Tablet Landscape | 768px - 991px | `max-width: 991px` | Tablet landscape |
| Tablet Portrait | 480px - 767px | `max-width: 767px` | Tablet portrait |
| Mobile | 0 - 479px | `max-width: 479px` | Mobile devices |

---

## Screenshots Captured

| Breakpoint | File |
|------------|------|
| Desktop 1920px | `webflow-desktop-1920-*.png` |
| Desktop 1200px | `webflow-desktop-1200-*.png` |
| Tablet 991px | `webflow-tablet-991-*.png` |
| Mobile 479px | `webflow-mobile-479-*.png` |

Location: `.specify/screenshots/`

---

## Global Responsive Changes

### Container
| Breakpoint | Max-width | Padding |
|------------|-----------|---------|
| Desktop | `1200px` | `0 24px` |
| Tablet | `100%` | `0 24px` |
| Mobile | `100%` | `0 18px` |

### Section Spacing
| Breakpoint | Vertical padding |
|------------|-----------------|
| Desktop | `96px` |
| Tablet | `72px` |
| Mobile | `48px` |

### Wide Section Side Padding
| Breakpoint | Padding |
|------------|---------|
| Desktop | `0 9px` |
| Tablet | `0 6px` |
| Mobile | `0 6px` |

---

## Typography Scale

### H1 (Hero)
| Breakpoint | Font-size | Line-height |
|------------|-----------|-------------|
| Desktop | `64px` | `70.4px` |
| Tablet | `48px` | `52.8px` |
| Mobile | `36px` | `39.6px` |

### H2 (Section headings)
| Breakpoint | Font-size | Line-height |
|------------|-----------|-------------|
| Desktop | `48px` | `52.8px` |
| Tablet | `36px` | `39.6px` |
| Mobile | `28px` | `30.8px` |

### H3 (Card titles)
| Breakpoint | Font-size | Line-height |
|------------|-----------|-------------|
| Desktop | `24px` | `26.4px` |
| Tablet | `20px` | `24px` |
| Mobile | `18px` | `21.6px` |

### Body Text
| Breakpoint | Font-size | Line-height |
|------------|-----------|-------------|
| All | `16px` | `22.4px` |

---

## Component-Specific Changes

### Navbar

| Breakpoint | Change |
|------------|--------|
| Desktop | Full navigation visible |
| Tablet (991px) | Hamburger menu replaces nav links |
| Mobile | Compact logo, hamburger menu |

### Hero Section

| Breakpoint | Layout |
|------------|--------|
| Desktop | H1 centered, video + text side by side below |
| Tablet | Same layout, smaller typography |
| Mobile | H1 centered, video stacks above text |

### Grid Layouts

| Breakpoint | Columns |
|------------|---------|
| Desktop | 2 columns (576px each) |
| Tablet | 2 columns or 1 column depending on content |
| Mobile | 1 column |

### Blog Grid

| Breakpoint | Columns | Card width |
|------------|---------|------------|
| Desktop | 3 columns | `384px` |
| Tablet | 2 columns | Auto |
| Mobile | 1 column | `100%` |

### Service Cards Scroll

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Infinite horizontal scroll animation |
| Tablet | Static grid, 2 columns |
| Mobile | Static stack, 1 column |

### Feature Slider

| Breakpoint | Layout |
|------------|--------|
| Desktop | 2 columns (content + image) |
| Tablet | 1 column (image first, content below) |
| Mobile | 1 column, smaller image |

### Process Steps

| Breakpoint | Layout |
|------------|--------|
| Desktop | 2 columns (sidebar sticky + process list) |
| Tablet | 1 column (sidebar then list) |
| Mobile | 1 column, tighter spacing |

### Footer

| Breakpoint | Layout |
|------------|--------|
| Desktop | 2 columns (info + menus) |
| Tablet | 1 column |
| Mobile | 1 column, stacked menus |

---

## Visibility Changes

### Hidden on Mobile (479px and below)
- Some secondary navigation items
- Large decorative elements
- Extended descriptions

### Hidden on Tablet (991px and below)
- Desktop navigation menu (replaced by hamburger)
- Dropdown CTA sections

### Show on Mobile Only
- Hamburger menu icon
- Mobile navigation overlay

---

## Touch Targets

For mobile/tablet:
| Element | Minimum size |
|---------|-------------|
| Buttons | `44px` height minimum |
| Links | `44px` touch target |
| Nav items | `48px` tap area |

---

## CSS Media Query Template

```css
/* Mobile first approach */

/* Base styles (mobile) */
.component {
  /* mobile styles */
}

/* Tablet portrait and up */
@media (min-width: 480px) {
  .component {
    /* tablet portrait styles */
  }
}

/* Tablet landscape and up */
@media (min-width: 768px) {
  .component {
    /* tablet landscape styles */
  }
}

/* Desktop and up */
@media (min-width: 992px) {
  .component {
    /* desktop styles */
  }
}

/* Large desktop */
@media (min-width: 1920px) {
  .component {
    /* large desktop styles */
  }
}
```

---

## Webflow-Style Media Queries

Webflow uses max-width (desktop-first):

```css
/* Desktop (default) */
.component {
  /* desktop styles */
}

/* Tablet landscape */
@media (max-width: 991px) {
  .component {
    /* tablet landscape styles */
  }
}

/* Tablet portrait */
@media (max-width: 767px) {
  .component {
    /* tablet portrait styles */
  }
}

/* Mobile */
@media (max-width: 479px) {
  .component {
    /* mobile styles */
  }
}
```

---

## Key Responsive Patterns

1. **Grid collapse**: 2-col → 1-col at 991px
2. **Navigation transform**: Full nav → hamburger at 991px
3. **Typography scale**: ~25% reduction per breakpoint
4. **Spacing reduction**: ~25-33% reduction per breakpoint
5. **Image resize**: Aspect ratios maintained, heights adjusted
6. **Scroll animations**: May disable on mobile for performance
