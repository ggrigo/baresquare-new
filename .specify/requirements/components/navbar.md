# Navbar Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | Navbar |
| File | `src/components/Navbar.astro` |
| Priority | Critical |
| Complexity | High |
| Estimated Lines | ~250 |

---

## Description

Sticky navigation bar with unique "notch" corner design, glass morphism effects, and dropdown menus. Transforms to hamburger menu on mobile. High z-index ensures it stays above all content.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| Button | Component | Yes |
| Logo SVG | Asset | Yes |
| Notch corner SVG | Asset | Yes |
| Hamburger icon | Asset | Yes (mobile) |

---

## Sub-Components

| Name | File | Description |
|------|------|-------------|
| NavLink | NavLink.astro | Standard navigation link |
| NavDropdown | NavDropdown.astro | Dropdown menu container |
| MobileMenu | MobileMenu.astro | Mobile overlay menu |

---

## Used In

- All pages (global component)
- Positioned inside Hero WideSection

---

## Props Specification

```typescript
interface NavbarProps {
  /**
   * Navigation items
   */
  items: NavItem[];

  /**
   * CTA button configuration
   */
  cta?: {
    label: string;
    href: string;
  };

  /**
   * Current page path (for active state)
   */
  currentPath?: string;

  /**
   * Additional CSS class
   */
  class?: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}
```

---

## HTML Structure

```html
<nav class="navbar-wrapper" role="navigation" aria-label="Main navigation">
  <div class="navbar-content">
    <!-- Top border line -->
    <div class="navbar-top-line" aria-hidden="true"></div>

    <!-- Left notch corner -->
    <img src="/icons/notch-corner.svg" class="navbar-notch navbar-notch--left" alt="" aria-hidden="true">

    <!-- Logo -->
    <a href="/" class="navbar-logo" aria-label="Home">
      <img src="/images/scion-logo.svg" alt="Scion" width="138" height="16">
    </a>

    <!-- Desktop Navigation -->
    <div class="navbar-menu" role="menubar">
      <a href="/about" class="nav-link" role="menuitem">About</a>
      <div class="nav-dropdown" role="menuitem" aria-haspopup="true">
        <button class="nav-dropdown-trigger">
          Services
          <svg class="nav-dropdown-arrow">...</svg>
        </button>
        <div class="nav-dropdown-content" role="menu">
          <!-- Dropdown items -->
        </div>
      </div>
      <!-- More nav items -->
    </div>

    <!-- Right notch corner -->
    <img src="/icons/notch-corner.svg" class="navbar-notch navbar-notch--right" alt="" aria-hidden="true">

    <!-- CTA Button -->
    <div class="navbar-cta">
      <Button href="/contact" size="sm">Book A Call</Button>
    </div>

    <!-- Mobile hamburger -->
    <button class="navbar-hamburger" aria-label="Open menu" aria-expanded="false">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>
</nav>

<!-- Mobile menu overlay -->
<div class="mobile-menu" aria-hidden="true">
  <!-- Mobile navigation -->
</div>
```

---

## CSS Implementation

```css
/* Wrapper - Sticky positioning */
.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 99999999;
  padding: 0 9px;
}

/* Content container */
.navbar-content {
  display: flex;
  align-items: center;
  height: 52px;
  background: #000000;
  border-radius: 0 0 5px 5px;
  padding: 0 12px;
  position: relative;
}

/* Top border line */
.navbar-top-line {
  position: absolute;
  top: 0;
  left: 5px;
  right: 5px;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

/* Notch corners */
.navbar-notch {
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
}

.navbar-notch--left {
  left: 0;
  transform: scaleX(-1);
}

.navbar-notch--right {
  right: 0;
}

/* Logo */
.navbar-logo {
  display: flex;
  align-items: center;
  margin-right: 48px;
}

.navbar-logo img {
  width: 138px;
  height: 16px;
}

/* Navigation menu */
.navbar-menu {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
}

/* Nav link */
.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 200px;
  transition: opacity 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.nav-link:hover {
  opacity: 0.7;
}

/* Dropdown */
.nav-dropdown {
  position: relative;
}

.nav-dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-primary);
  font-size: 16px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: 200px;
}

.nav-dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  padding: 12px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease-out;
}

.nav-dropdown:hover .nav-dropdown-content,
.nav-dropdown:focus-within .nav-dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* CTA area */
.navbar-cta {
  margin-left: auto;
}

/* Hamburger (hidden on desktop) */
.navbar-hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: white;
  transition: transform 0.2s ease;
}

/* Responsive */
@media (max-width: 991px) {
  .navbar-menu,
  .navbar-cta {
    display: none;
  }

  .navbar-hamburger {
    display: flex;
    margin-left: auto;
  }
}
```

### Critical CSS Values

| Property | Value | Tolerance |
|----------|-------|-----------|
| z-index | 99999999 | Exact |
| height | 52px | Exact |
| background | #000000 | Exact |
| border-radius (bottom) | 5px | Exact |
| notch size | 5px x 5px | Exact |
| logo size | 138px x 16px | Exact |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Sticky at top, full nav visible | Initial (desktop) |
| scrolled | Same appearance (no shadow change) | Scroll |
| dropdown-open | Dropdown visible, arrow rotated | Hover/focus on dropdown |
| mobile-closed | Hamburger visible, nav hidden | Viewport ≤991px |
| mobile-open | Overlay visible, hamburger → X | Hamburger click |

### Dropdown States
| State | Visual | Trigger |
|-------|--------|---------|
| closed | Hidden, translateY(-10px), opacity: 0 | Default |
| open | Visible, translateY(0), opacity: 1 | Hover or focus-within |

### Mobile Menu States
| State | Visual | Trigger |
|-------|--------|---------|
| closed | Hidden (aria-hidden="true") | Default on mobile |
| open | Full-screen overlay | Hamburger click |

---

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| 1920px+ | Full nav, all links visible |
| 992-1919px | Full nav, may truncate long items |
| 768-991px | Hamburger menu, hide nav links + CTA |
| 0-767px | Hamburger menu, compact layout |

### Mobile Menu Behavior
- Full-screen overlay
- Stacked navigation links
- Accordions for dropdowns
- CTA button at bottom
- Close button (X) top right
- Body scroll locked when open

---

## Accessibility Checklist

- [x] Uses `<nav>` with `role="navigation"`
- [x] Has `aria-label="Main navigation"`
- [x] Logo has descriptive alt text
- [x] Dropdowns use `aria-haspopup` and `aria-expanded`
- [x] Mobile hamburger has `aria-label` and `aria-expanded`
- [x] Mobile menu uses `aria-hidden` when closed
- [x] Focus visible on all interactive elements
- [x] Keyboard navigable (Tab, Enter, Escape)
- [x] Skip link available (in layout)
- [x] Color contrast meets 4.5:1

### Keyboard Navigation
| Key | Action |
|-----|--------|
| Tab | Move between nav items |
| Enter | Activate link or open dropdown |
| Space | Open dropdown (on trigger) |
| Escape | Close dropdown or mobile menu |
| Arrow Down | Move within dropdown |
| Arrow Up | Move within dropdown |

---

## Performance Requirements

| Metric | Budget |
|--------|--------|
| CSS Size | < 3KB |
| JS Size | < 2KB (mobile menu toggle only) |
| Paint Area | Minimal (fixed element) |

### Optimization Notes
- Use `will-change: transform` on dropdowns
- Lazy load mobile menu JS
- Preload logo SVG
- Consider sticky positioning performance on mobile

---

## Acceptance Criteria

```gherkin
Feature: Navbar Component

Scenario: Sticky positioning
  GIVEN the navbar renders
  WHEN user scrolls down the page
  THEN navbar remains fixed at top
  AND z-index is 99999999

Scenario: Notch corners
  GIVEN the navbar renders
  WHEN viewed
  THEN left notch is visible at bottom-left
  AND right notch is visible at bottom-right
  AND notches are 5x5 pixels

Scenario: Logo link
  GIVEN the navbar renders
  WHEN user clicks logo
  THEN navigates to homepage

Scenario: Dropdown on hover
  GIVEN a nav item has dropdown
  WHEN user hovers over trigger
  THEN dropdown appears with animation
  AND animation is opacity + translateY
  AND duration is 200ms

Scenario: Dropdown keyboard
  GIVEN a nav item has dropdown
  WHEN user focuses and presses Enter
  THEN dropdown opens
  AND Arrow keys navigate within dropdown
  AND Escape closes dropdown

Scenario: Mobile hamburger
  GIVEN viewport is 991px or less
  WHEN navbar renders
  THEN hamburger icon is visible
  AND main nav links are hidden
  AND CTA is hidden

Scenario: Mobile menu open
  GIVEN mobile hamburger is clicked
  WHEN menu opens
  THEN full-screen overlay appears
  AND aria-expanded is true
  AND body scroll is locked

Scenario: Mobile menu close
  GIVEN mobile menu is open
  WHEN close button is clicked OR Escape pressed
  THEN menu closes
  AND aria-hidden is true
  AND body scroll is restored
```

---

## Edge Cases

| Case | Expected Behavior |
|------|-------------------|
| Many nav items | Graceful overflow handling |
| Very long labels | Truncate with ellipsis |
| No dropdowns | Simpler nav structure |
| No CTA | CTA area hidden |
| Deep nesting | Not supported (max 1 level) |
| Scroll position on nav | Return to previous position |

---

## Cross-Browser Notes

| Browser | Notes |
|---------|-------|
| Chrome | Full support |
| Firefox | Test backdrop-filter |
| Safari | backdrop-filter may need `-webkit-` prefix |
| Edge | Full support |
| iOS Safari | Test sticky with dynamic viewport |
| Chrome Android | Test hamburger touch |

### Known Issues
- Safari may need `transform: translateZ(0)` for sticky
- iOS viewport height changes affect mobile menu
- Backdrop-filter has fallback to solid background

---

## Assets Required

| Asset | Dimensions | Format |
|-------|------------|--------|
| scion-logo.svg | 138x16 | SVG |
| notch-corner.svg | 5x5 | SVG |
| hamburger-icon | 24x24 | CSS or SVG |
| close-icon | 24x24 | CSS or SVG |
| dropdown-arrow | 12x12 | SVG |
