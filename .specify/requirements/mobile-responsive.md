# Mobile Responsive Specifications

## Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Desktop | > 991px | Large screens |
| Tablet | 768px - 991px | iPad, tablets |
| Mobile | 480px - 767px | Large phones |
| Small Mobile | < 480px | Small phones |

## Typography Scale

| Element | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Display | 64px | 48px | 36px |
| H1 | 51px | 40px | 32px |
| H2 | 40px | 32px | 28px |
| H3 | 32px | 28px | 24px |
| H4 | 25px | 22px | 20px |
| Body | 16px | 16px | 16px |
| Small | 13px | 13px | 13px |

## Spacing Scale

| Token | Desktop | Mobile |
|-------|---------|--------|
| --space-xs | 6px | 6px |
| --space-sm | 12px | 10px |
| --space-md | 24px | 18px |
| --space-lg | 48px | 32px |
| --space-xl | 96px | 48px |
| --gutter | 24px | 16px |

## Component Specifications

### Navbar (Mobile)
- Height: 52px (unchanged)
- Hamburger button: 44x44px tap target
- Logo: Centered or left-aligned
- Desktop links: Hidden
- CTA button: Hidden (moves to mobile menu)

### Mobile Menu
- Full-screen overlay
- Background: var(--bg-primary)
- Animation: Slide in from right (300ms)
- Close button: Top right, 44x44px
- Links: Stack vertically, 48px min height each
- CTA button: Full width at bottom
- Body scroll: Locked when open

### Hero Section (Mobile)
- Min height: 600px (vs 912px desktop)
- Padding: 24px (vs 48px desktop)
- Headline: 32px font size
- Blobs: Hidden on small mobile (< 480px)
- Video + Info card: Stack vertically
- Video: Full width, max 400px
- Info panel: Full width, max 400px

### Feature Slider (Mobile)
- Sticky scroll: Disabled
- Cards: Horizontal scroll with snap
- Card width: 280px (vs 480px desktop)
- Touch scrolling: Native momentum
- Nav buttons: Hidden
- Section min-height: Auto (not 200vh)

### Two Column Grid (Mobile)
- Layout: Single column stack
- Image: Full width, appears first
- Text content: Below image
- Gap: 32px between elements

### Stats Section (Mobile)
- Grid: Single column
- Each stat: Full width
- Dividers: Horizontal (not vertical)

### Services Section (Mobile)
- Grid: 1 column (vs 2 on desktop)
- Card: Full width
- Image aspect ratio: Maintained

### Process Steps (Mobile)
- Sidebar: Moves above content
- Steps: Stack vertically
- Numbers: Inline with title

### Blog Grid (Mobile)
- Grid: 1 column
- Card: Full width
- Image: 16:10 aspect ratio maintained

### Footer (Mobile)
- Columns: Stack vertically
- Newsletter: Full width
- Social icons: Centered
- Copyright: Centered

## Wide Section (Mobile)
- Padding: 6px (vs 9px desktop)
- Border radius: 8px (vs 10px desktop)

## Animations (Mobile)
- Blob animations: Disabled on < 480px
- Scroll parallax: Disabled
- Hover states: Touch-friendly tap states
- Transitions: Reduced duration (200ms vs 400ms)

## Touch Targets
- Minimum: 44x44px for all interactive elements
- Spacing: 8px minimum between targets

## Performance (Mobile)
- Lazy load images below fold
- Reduce blob count or complexity
- Use CSS containment where possible
