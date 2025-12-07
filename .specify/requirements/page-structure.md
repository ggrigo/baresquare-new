# Page Structure Specification

## Document Info
| Property | Value |
|----------|-------|
| Page | Home 1 |
| Template | Scion by Medium Rare |
| Total Sections | 12 |
| Estimated Height | ~10,000px (desktop) |

---

## Page Hierarchy

```
Page: Home 1
├── [STICKY] Navbar
├── [1] Wide Section: Hero (930px)
├── [2] Section: Feature Slider (1104px)
├── [3] Section: Two-Column Grid (832px)
├── [4] Section: Sidebar Content (844px)
├── [5] Wide Section: Mid-Page CTA (498px)
├── [6] Section: Services (1163px)
├── [7] Section: Customer Quote (922px)
├── [8] Section: Icon Links (592px)
├── [9] Section: Process Steps (1128px)
├── [10] Section: Blog Grid (866px)
├── [11] Wide Section: Final CTA (498px)
└── [12] Footer (566px)
```

---

## Section Details

### [STICKY] Navbar
| Property | Value |
|----------|-------|
| Height | 52px |
| Position | sticky, top: 0 |
| Z-Index | 99999999 |
| Background | #000000 |
| Contains | Logo, Nav Links, Dropdowns, CTA Button |

### [1] Wide Section: Hero
| Property | Value |
|----------|-------|
| Type | WideSection |
| Height | 930px (desktop) |
| Background | Accent purple gradient with animated blobs |
| Contains | Navbar (inside), H1, Video Thumbnail, Text Card |
| Overlays | GridOverlay (0.7), NoiseOverlay (1.0) |

### [2] Section: Feature Slider
| Property | Value |
|----------|-------|
| Type | Standard Section |
| Height | 1104px |
| Background | Transparent (body bg shows) |
| Contains | Large intro text, Image slider with controls |
| Grid | 2-column (content + image) |

### [3] Section: Two-Column Grid
| Property | Value |
|----------|-------|
| Type | Standard Section |
| Height | 832px |
| Background | Transparent |
| Contains | Text content left, Portrait image right |
| Grid | 2-column, image order varies |

### [4] Section: Sidebar Content
| Property | Value |
|----------|-------|
| Type | Standard Section |
| Height | 844px |
| Background | Transparent |
| Contains | Image grid left, Text + bullet list right |
| Grid | 2-column sidebar layout |

### [5] Wide Section: Mid-Page CTA
| Property | Value |
|----------|-------|
| Type | WideSection |
| Height | 498px |
| Background | Accent purple gradient |
| Contains | Centered CTA box with heading + button |
| Overlays | GridOverlay (0.2), NoiseOverlay (0.3) |

### [6] Section: Services
| Property | Value |
|----------|-------|
| Type | Standard Section |
| Height | 1163px |
| Background | Transparent |
| Contains | Section heading, Horizontally scrolling service cards |
| Animation | Infinite horizontal scroll |

### [7] Section: Customer Quote
| Property | Value |
|----------|-------|
| Type | Standard Section |
| Height | 922px |
| Background | Transparent |
| Contains | Large customer photo, Quote text, Attribution |
| Layout | 2-column (image + quote) |

### [8] Section: Icon Links
| Property | Value |
|----------|-------|
| Type | Standard Section |
| Height | 592px |
| Background | Transparent |
| Contains | 2x2 grid of icon link items |
| Grid | 2-column, 2-row |

### [9] Section: Process Steps
| Property | Value |
|----------|-------|
| Type | Standard Section |
| Height | 1128px |
| Background | Transparent |
| Contains | Sidebar with image + metric slider, Numbered process items |
| Layout | 2-column sticky sidebar |

### [10] Section: Blog Grid
| Property | Value |
|----------|-------|
| Type | Standard Section |
| Height | 866px |
| Background | Transparent |
| Contains | 3-column blog card grid, Follow-on link |
| Grid | 3-column |

### [11] Wide Section: Final CTA
| Property | Value |
|----------|-------|
| Type | WideSection |
| Height | 498px |
| Background | Accent purple gradient |
| Contains | Same as Mid-Page CTA |
| Overlays | GridOverlay (0.2), NoiseOverlay (0.3) |

### [12] Footer
| Property | Value |
|----------|-------|
| Type | Footer |
| Height | 566px |
| Background | #121212 (dark) |
| Contains | Logo, social links, Navigation columns, Copyright |

---

## Section Dependencies

| Section | Required Components | Shared Components |
|---------|---------------------|-------------------|
| Navbar | Logo, NavLink, NavDropdown, Button | - |
| Hero | WideSection, NoiseOverlay, GridOverlay, BlobAnimation | Button, ArrowLink |
| Feature Slider | Slider, ArrowButton, DotPagination | DotTitle |
| Two-Column | Container, Grid | ArrowLink |
| Sidebar Content | Container, Grid, IconList | ArrowLink |
| Mid-Page CTA | WideSection, NoiseOverlay, GridOverlay | Button |
| Services | ServiceCard, IconBox, NoiseOverlay, ScrollContainer | ArrowLink |
| Customer Quote | CustomerImage, QuoteText | ArrowLink |
| Icon Links | IconLinkItem, IconBox | ArrowButton |
| Process Steps | ProcessItem, MetricSlider, StickyContainer | - |
| Blog Grid | BlogCard, ZoomImage | DotTitle, ArrowLink |
| Final CTA | Same as Mid-Page CTA | Button |
| Footer | SocialLink, FooterMenu, Copyright | - |

---

## Critical Path (Build Order)

### Phase 1: Foundation (Must Build First)
1. **NoiseOverlay** - Used in 8+ locations
2. **GridOverlay** - Used in 6+ locations
3. **Container** - Layout wrapper
4. **Button** - Used everywhere

### Phase 2: Layout Components
5. **WideSection** - Container for 4 sections
6. **Grid** - 2-column and 3-column layouts
7. **StickyContainer** - For process steps sidebar

### Phase 3: Shared UI Elements
8. **ArrowLink** - Used in 10+ places
9. **DotTitle** - Section labels
10. **IconBox** - Decorative icon containers
11. **ArrowButton** - Navigation arrows

### Phase 4: Section Components
12. **Navbar** - Critical for all pages
13. **Hero** - First impression
14. **Footer** - Site-wide

### Phase 5: Content Components
15. **ServiceCard** - Services section
16. **BlogCard** - Blog grid
17. **ProcessItem** - Process steps
18. **CustomerQuote** - Quote section
19. **IconLinkItem** - Icon links grid
20. **FeatureSlider** - Slider with controls

---

## Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Desktop XL | 1920px+ | Max-width container |
| Desktop | 992-1919px | Default styles |
| Tablet Landscape | 768-991px | Nav → hamburger, 2-col → 1-col |
| Tablet Portrait | 480-767px | Single column, reduced spacing |
| Mobile | 0-479px | Full-width, minimal padding |

---

## Global Layout Rules

### Container
```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 479px) {
  .container {
    padding: 0 18px;
  }
}
```

### Section Spacing
```css
.section {
  padding: 96px 0;
}

@media (max-width: 991px) {
  .section {
    padding: 72px 0;
  }
}

@media (max-width: 479px) {
  .section {
    padding: 48px 0;
  }
}
```

### Wide Section
```css
.wide-section {
  padding: 0 9px;
}

.wide-section-content {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

@media (max-width: 991px) {
  .wide-section {
    padding: 0 6px;
  }
}
```

---

## Acceptance Criteria

### Page Load
```gherkin
GIVEN the page loads
WHEN the DOM is ready
THEN the navbar is visible and sticky at top
AND the hero section fills the viewport below navbar
AND all textures (noise, grid) are rendering

GIVEN the page loads
WHEN LCP is measured
THEN LCP should be < 2.5s

GIVEN the page loads
WHEN CLS is measured
THEN CLS should be < 0.1
```

### Section Order
```gherkin
GIVEN the page renders
WHEN scrolling from top to bottom
THEN sections appear in order: Hero → Slider → Grid → Sidebar → CTA → Services → Quote → Icons → Process → Blog → CTA → Footer

GIVEN any section
WHEN rendered
THEN overlays stack correctly: content (z-5+) > noise (z-4) > grid (z-3) > gradients (z-2) > base (z-1)
```

### Responsive Behavior
```gherkin
GIVEN viewport width ≤ 991px
WHEN rendered
THEN navbar shows hamburger menu
AND 2-column grids collapse to 1-column

GIVEN viewport width ≤ 479px
WHEN rendered
THEN all content is single column
AND horizontal padding is 18px
```
