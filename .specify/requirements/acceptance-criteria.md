# Acceptance Criteria - Consolidated

## Document Info
| Property | Value |
|----------|-------|
| Format | Gherkin (Given-When-Then) |
| Purpose | Testable requirements for all components |

---

## Page-Level Criteria

### Page Load
```gherkin
Feature: Page Load

Scenario: Initial page load
  Given the page URL is accessed
  When the DOM is ready
  Then the navbar is visible and sticky at top
  And the hero section fills the viewport below navbar
  And all textures (noise, grid) are rendering
  And LCP occurs in < 2.5s

Scenario: Layout stability
  Given the page loads
  When measuring CLS
  Then CLS should be < 0.1
  And no content jumps occur

Scenario: Section order
  Given the page renders
  When scrolling from top to bottom
  Then sections appear in order:
    | Hero |
    | Feature Slider |
    | Two-Column Grid |
    | Sidebar Content |
    | Mid-Page CTA |
    | Services |
    | Customer Quote |
    | Icon Links |
    | Process Steps |
    | Blog Grid |
    | Final CTA |
    | Footer |
```

---

## Component Criteria

### NoiseOverlay
```gherkin
Feature: NoiseOverlay Component

Scenario: Default rendering
  Given the NoiseOverlay component renders
  When no props are passed
  Then it displays with opacity 1
  And background-size is exactly 150px 150px
  And z-index is 4
  And pointer-events is none

Scenario: Subtle variant
  Given the NoiseOverlay component renders
  When opacity prop is 0.3
  Then it displays with opacity 0.3

Scenario: Seamless tiling
  Given the NoiseOverlay renders
  When viewed at any viewport width
  Then no visible seams appear between tiles

Scenario: Non-interactive
  Given the NoiseOverlay renders
  When user clicks on overlay area
  Then click passes through to content below
```

### GridOverlay
```gherkin
Feature: GridOverlay Component

Scenario: Default rendering
  Given the GridOverlay component renders
  When no props are passed
  Then it displays with opacity 0.7
  And z-index is 3
  And pointer-events is none

Scenario: Layer order
  Given GridOverlay renders with NoiseOverlay
  When both are visible
  Then NoiseOverlay (z-4) appears above GridOverlay (z-3)
```

### WideSection
```gherkin
Feature: WideSection Component

Scenario: Default rendering
  Given the WideSection component renders
  When no props are passed
  Then it displays with accent background
  And padding is 9px on left and right
  And border-radius is 10px
  And NoiseOverlay is visible at opacity 1
  And GridOverlay is visible at opacity 0.7

Scenario: Responsive padding
  Given viewport width is 991px or less
  When WideSection renders
  Then padding is 6px on left and right

Scenario: Content z-index
  Given WideSection renders with content
  When overlays and content are visible
  Then content appears above all overlays
```

### Button
```gherkin
Feature: Button Component

Scenario: Primary button rendering
  Given the Button component renders
  When variant is 'primary'
  Then it displays with pill shape (border-radius: 200px)
  And height is 48px
  And background is rgba(255, 255, 255, 0.06)

Scenario: Hover state
  Given a button is rendered
  When user hovers over it
  Then background transitions to rgba(255, 255, 255, 0.4)
  And transition duration is 200ms
  And easing is cubic-bezier(0.44, 0, 0.56, 1)

Scenario: Focus state
  Given a button is rendered
  When user focuses via keyboard (Tab)
  Then a 2px white outline appears
  And outline offset is 2px

Scenario: Active state
  Given a button is rendered
  When user clicks (mouse down)
  Then button scales to 0.98

Scenario: Disabled state
  Given a button has disabled prop
  When rendered
  Then opacity is 0.5
  And cursor is not-allowed
  And click events are ignored

Scenario: Arrow button
  Given variant is 'arrow'
  When rendered
  Then width and height are 48px
  And shape is circular (border-radius: 50%)
  And aria-label is provided
```

### Navbar
```gherkin
Feature: Navbar Component

Scenario: Sticky positioning
  Given the navbar renders
  When user scrolls down the page
  Then navbar remains fixed at top
  And z-index is 99999999

Scenario: Notch corners
  Given the navbar renders
  When viewed
  Then left notch is visible at bottom-left
  And right notch is visible at bottom-right
  And notches are 5x5 pixels

Scenario: Dropdown on hover
  Given a nav item has dropdown
  When user hovers over trigger
  Then dropdown appears with animation
  And animation is opacity + translateY
  And duration is 200ms

Scenario: Mobile hamburger
  Given viewport is 991px or less
  When navbar renders
  Then hamburger icon is visible
  And main nav links are hidden

Scenario: Mobile menu open
  Given mobile hamburger is clicked
  When menu opens
  Then full-screen overlay appears
  And aria-expanded is true
  And body scroll is locked

Scenario: Mobile menu close
  Given mobile menu is open
  When close button is clicked
  Then menu closes
  And aria-hidden is true
```

### Hero
```gherkin
Feature: Hero Component

Scenario: Headline rendering
  Given the Hero renders
  When viewed on desktop
  Then H1 displays at 64px font-size
  And "forward" is in italic serif font
  And headline is centered

Scenario: Blob animations
  Given the Hero renders on desktop
  When animations run
  Then 5 gradient blobs animate continuously
  And blur is 96px

Scenario: Reduced motion
  Given user has prefers-reduced-motion set
  When Hero renders
  Then blob animations are paused or removed

Scenario: Video thumbnail
  Given video thumbnail renders
  When user hovers
  Then play button background darkens
  And transition is 200ms

Scenario: Mobile layout
  Given viewport is 479px or less
  When Hero renders
  Then blobs are hidden
  And video and text card stack vertically
  And headline is 32px
```

### FeatureSlider
```gherkin
Feature: FeatureSlider Component

Scenario: Arrow navigation
  Given slider is on slide 1 of 3
  When user clicks next arrow
  Then slider transitions to slide 2
  And transition is 0.5s ease-in-out
  And active dot updates

Scenario: Keyboard navigation
  Given slider is focused
  When user presses ArrowRight
  Then slider moves to next slide

Scenario: Touch support
  Given user is on mobile
  When user swipes left
  Then slider moves to next slide

Scenario: Edge cases
  Given slider is on first slide
  When user clicks previous arrow
  Then nothing happens or loops to last
```

### ServiceCard
```gherkin
Feature: ServiceCard Component

Scenario: Card dimensions
  Given a ServiceCard renders
  When viewed on desktop
  Then width is 384px
  And min-height is 589px

Scenario: Scroll animation
  Given services section renders
  When animation plays
  Then cards scroll infinitely left
  And animation pauses on hover

Scenario: Mobile scroll
  Given viewport is 991px or less
  When services section renders
  Then animation stops
  And native horizontal scroll is enabled
```

### BlogCard
```gherkin
Feature: BlogCard Component

Scenario: Image zoom on hover
  Given a BlogCard renders
  When user hovers over card
  Then image scales to 1.05
  And transition is 0.5s ease

Scenario: Grid layout
  Given blog section renders
  When viewport is desktop
  Then cards display in 3-column grid
  When viewport is 991px or less
  Then cards display in 2-column grid
  When viewport is 479px or less
  Then cards display in single column
```

### Footer
```gherkin
Feature: Footer Component

Scenario: Footer layout
  Given Footer renders on desktop
  When viewed
  Then logo/socials on left (300px)
  And navigation columns on right

Scenario: Social links
  Given Footer renders
  When user hovers on social icon
  Then background lightens
  And transition is 200ms
```

### ArrowLink
```gherkin
Feature: ArrowLink Component

Scenario: Hover animation
  Given ArrowLink renders
  When user hovers
  Then opacity changes to 0.7
  And arrow moves 4px right
  And transition is 0.2s
```

### DotTitle
```gherkin
Feature: DotTitle Component

Scenario: Default rendering
  Given DotTitle renders
  When viewed
  Then dot is 6px circle
  And text is uppercase, 13px
  And gap between dot and text is 8px
```

---

## Interaction Criteria

### Hover States
```gherkin
Feature: Hover States

Scenario: Button hover
  Given any button
  When user hovers
  Then background animates to rgba(255,255,255,0.4)
  And duration is 200ms
  And easing is cubic-bezier(0.44, 0, 0.56, 1)

Scenario: Link hover
  Given any arrow link
  When user hovers
  Then opacity becomes 0.7
  And arrow translates 4px right

Scenario: Image hover
  Given any zoomable image
  When user hovers
  Then image scales to 1.05
  And duration is 500ms
```

### Keyboard Navigation
```gherkin
Feature: Keyboard Navigation

Scenario: Tab order
  Given user navigates with Tab key
  Then focus moves through:
    | Skip link |
    | Logo |
    | Nav links |
    | CTA button |
    | Page content |
    | Footer links |

Scenario: Dropdown keyboard
  Given focus is on dropdown trigger
  When user presses Enter
  Then dropdown opens
  When user presses Escape
  Then dropdown closes
  When user presses Arrow Down
  Then focus moves to first dropdown item
```

---

## Accessibility Criteria

```gherkin
Feature: Accessibility

Scenario: Color contrast
  Given any text on the page
  When measured against its background
  Then contrast ratio is at least 4.5:1 for normal text
  And at least 3:1 for large text

Scenario: Focus visibility
  Given any interactive element
  When focused via keyboard
  Then a visible focus ring appears
  And focus ring is 2px white with 2px offset

Scenario: Screen reader
  Given a screen reader navigates the page
  Then all content is announced
  And decorative elements are hidden (aria-hidden)
  And interactive elements have labels

Scenario: Reduced motion
  Given user has prefers-reduced-motion enabled
  When viewing the page
  Then all animations are disabled
  And blob backgrounds are hidden

Scenario: Touch targets
  Given a mobile user
  When interacting with buttons/links
  Then touch targets are at least 44x44px
```

---

## Performance Criteria

```gherkin
Feature: Performance

Scenario: Lighthouse score
  Given the production site
  When running Lighthouse audit
  Then Performance score is >= 90
  And Accessibility score is >= 95
  And Best Practices score is >= 90
  And SEO score is >= 95

Scenario: Core Web Vitals
  Given a user loads the page
  Then LCP occurs in < 2.5s
  And CLS is < 0.1
  And INP is < 200ms

Scenario: Asset budgets
  Given all assets are loaded
  Then total JS is < 15KB gzipped
  And total CSS is < 20KB gzipped
```

---

## Responsive Criteria

```gherkin
Feature: Responsive Design

Scenario: Desktop layout (1920px)
  Given viewport is 1920px
  Then all components display at full width
  And navbar shows all links
  And grids are multi-column

Scenario: Tablet layout (991px)
  Given viewport is 991px
  Then navbar shows hamburger menu
  And 2-column grids become 1-column
  And slider controls remain visible

Scenario: Mobile layout (479px)
  Given viewport is 479px
  Then all content is single column
  And horizontal padding is 18px
  And touch targets are >= 44px
  And blob animations are hidden
```

---

## Cross-Browser Criteria

```gherkin
Feature: Cross-Browser

Scenario: Chrome support
  Given the page loads in Chrome
  Then all features work correctly

Scenario: Firefox support
  Given the page loads in Firefox
  Then all features work correctly
  And backdrop-filter has fallback

Scenario: Safari support
  Given the page loads in Safari
  Then all features work correctly
  And sticky positioning works
  And blur effects render

Scenario: Mobile Safari support
  Given the page loads on iOS Safari
  Then all features work correctly
  And touch interactions work
  And viewport height is handled correctly
```
