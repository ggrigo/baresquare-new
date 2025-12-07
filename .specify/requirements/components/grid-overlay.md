# GridOverlay Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | GridOverlay |
| File | `src/components/GridOverlay.astro` |
| Priority | Critical |
| Complexity | Low |
| Estimated Lines | ~25 |

---

## Description

A decorative overlay that displays a dot grid pattern. Adds depth and structure to gradient backgrounds, creating a tech/digital aesthetic. Renders below the noise texture but above base gradients.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| dot-grid.png | Asset | Yes |

---

## Used In

- Hero Section
- WideSection (all instances)
- Feature Slider background
- CTA Sections

---

## Props Specification

```typescript
interface GridOverlayProps {
  /**
   * Opacity of the grid
   * @default 0.7
   */
  opacity?: 0.7 | 0.2;

  /**
   * Additional CSS class
   */
  class?: string;
}
```

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| opacity | number | 0.7 | 0.7, 0.2 | Full (0.7) for hero, subtle (0.2) for CTAs |
| class | string | - | - | Additional CSS classes |

---

## HTML Structure

```html
<div class="grid-overlay" aria-hidden="true"></div>
```

### Semantic Requirements
- Must use `aria-hidden="true"` (purely decorative)
- No interactive children allowed
- No text content

---

## CSS Implementation

```css
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: url('/textures/dot-grid.png');
  background-size: auto;
  background-repeat: repeat;
  z-index: 3;
  pointer-events: none;
  opacity: 0.7;
}

.grid-overlay--subtle {
  opacity: 0.2;
}
```

### Critical CSS Values

| Property | Value | Tolerance |
|----------|-------|-----------|
| background-size | auto | Exact |
| z-index | 3 | Exact |
| pointer-events | none | Required |
| position | absolute | Required |
| inset | 0 | Required |

### Layer Stacking Context
```
z-index: 5+ → Content (text, buttons)
z-index: 4  → NoiseOverlay
z-index: 3  → GridOverlay ← THIS COMPONENT
z-index: 2  → Gradient blobs/vectors
z-index: 1  → Base background
```

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Visible with set opacity | Initial render |
| hidden | display: none | Parent hidden |

*Note: No interactive states - purely decorative element*

---

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| All | No changes - renders identically at all sizes |

---

## Accessibility Checklist

- [x] Uses `aria-hidden="true"` (decorative only)
- [x] Does not receive focus
- [x] Does not interfere with keyboard navigation
- [x] Does not affect screen reader content
- [x] pointer-events: none prevents accidental clicks

---

## Performance Requirements

| Metric | Budget |
|--------|--------|
| CSS Size | < 200 bytes |
| Texture Size | < 20KB |
| Render Impact | No repaints on scroll |

### Optimization Notes
- Texture can be larger than noise due to `background-size: auto`
- Ensure dot pattern is clean and crisp
- Consider generating via CSS/SVG for better scaling (future optimization)

---

## Asset Requirements

### dot-grid.png
| Property | Value |
|----------|-------|
| Dimensions | ~1482px wide (auto) |
| Format | PNG with transparency |
| Pattern | Evenly spaced dots |
| Dot Color | White or light gray |
| File Size | < 20KB |
| Source | Webflow CDN |

---

## Acceptance Criteria

```gherkin
Feature: GridOverlay Component

Scenario: Default rendering
  GIVEN the GridOverlay component renders
  WHEN no props are passed
  THEN it displays with opacity 0.7
  AND z-index is 3
  AND pointer-events is none
  AND background-size is auto

Scenario: Subtle variant
  GIVEN the GridOverlay component renders
  WHEN opacity prop is 0.2
  THEN it displays with opacity 0.2

Scenario: Layer order
  GIVEN GridOverlay renders with NoiseOverlay
  WHEN both are visible
  THEN NoiseOverlay (z-4) appears above GridOverlay (z-3)

Scenario: Non-interactive
  GIVEN the GridOverlay renders
  WHEN user clicks on overlay area
  THEN click passes through to content below

Scenario: Pattern quality
  GIVEN GridOverlay renders
  WHEN viewed at 100% zoom
  THEN dots are crisp without blur or aliasing
```

---

## Edge Cases

| Case | Expected Behavior |
|------|-------------------|
| Missing texture file | Graceful degradation (no visible overlay) |
| Invalid opacity value | Fall back to default (0.7) |
| Very wide viewport | Pattern repeats seamlessly |
| Retina display | Pattern remains crisp |

---

## Cross-Browser Notes

| Browser | Notes |
|---------|-------|
| Chrome | Full support |
| Firefox | Full support |
| Safari | Full support |
| Edge | Full support |
| iOS Safari | Full support |
| Chrome Android | Full support |

---

## Code Example

```astro
---
interface Props {
  opacity?: 0.7 | 0.2;
  class?: string;
}

const { opacity = 0.7, class: className } = Astro.props;
---

<div
  class:list={[
    'grid-overlay',
    opacity === 0.2 && 'grid-overlay--subtle',
    className
  ]}
  aria-hidden="true"
></div>

<style>
  .grid-overlay {
    position: absolute;
    inset: 0;
    background-image: url('/textures/dot-grid.png');
    background-size: auto;
    background-repeat: repeat;
    z-index: 3;
    pointer-events: none;
    opacity: 0.7;
  }

  .grid-overlay--subtle {
    opacity: 0.2;
  }
</style>
```
