# NoiseOverlay Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | NoiseOverlay |
| File | `src/components/NoiseOverlay.astro` |
| Priority | Critical |
| Complexity | Low |
| Estimated Lines | ~25 |

---

## Description

A decorative overlay that adds film grain/noise texture to sections. This is a core visual element of the Scion design language, adding depth and tactile quality to gradient backgrounds.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| noise-pattern.png | Asset | Yes |

---

## Used In

- Hero Section
- WideSection (all instances)
- ServiceCard
- IconBox
- CTA Sections
- Feature Slider background

---

## Props Specification

```typescript
interface NoiseOverlayProps {
  /**
   * Opacity of the noise texture
   * @default 1
   */
  opacity?: 1 | 0.3;

  /**
   * Additional CSS class
   */
  class?: string;
}
```

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| opacity | number | 1 | 1, 0.3 | Full opacity (1) for hero, subtle (0.3) for CTAs |
| class | string | - | - | Additional CSS classes |

---

## HTML Structure

```html
<div class="noise-overlay" aria-hidden="true"></div>
```

### Semantic Requirements
- Must use `aria-hidden="true"` (purely decorative)
- No interactive children allowed
- No text content

---

## CSS Implementation

```css
.noise-overlay {
  position: absolute;
  inset: 0;
  background-image: url('/textures/noise-pattern.png');
  background-size: 150px 150px;
  background-repeat: repeat;
  z-index: 4;
  pointer-events: none;
  opacity: 1;
}

.noise-overlay--subtle {
  opacity: 0.3;
}
```

### Critical CSS Values

| Property | Value | Tolerance |
|----------|-------|-----------|
| background-size | 150px 150px | Exact |
| z-index | 4 | Exact |
| pointer-events | none | Required |
| position | absolute | Required |
| inset | 0 | Required |

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
| Texture Size | < 10KB |
| Render Impact | No repaints on scroll |

### Optimization Notes
- Texture should be optimized PNG with maximum compression
- Consider using CSS `will-change: auto` (not `transform`) to avoid layer promotion issues
- Ensure texture tiles seamlessly (no visible seams)

---

## Asset Requirements

### noise-pattern.png
| Property | Value |
|----------|-------|
| Dimensions | 150px x 150px |
| Format | PNG with transparency |
| Color | Grayscale noise |
| File Size | < 10KB |
| Source | Webflow CDN |

---

## Acceptance Criteria

```gherkin
Feature: NoiseOverlay Component

Scenario: Default rendering
  GIVEN the NoiseOverlay component renders
  WHEN no props are passed
  THEN it displays with opacity 1
  AND background-size is exactly 150px 150px
  AND z-index is 4
  AND pointer-events is none

Scenario: Subtle variant
  GIVEN the NoiseOverlay component renders
  WHEN opacity prop is 0.3
  THEN it displays with opacity 0.3

Scenario: Seamless tiling
  GIVEN the NoiseOverlay renders
  WHEN viewed at any viewport width
  THEN no visible seams appear between tiles

Scenario: Non-interactive
  GIVEN the NoiseOverlay renders
  WHEN user clicks on overlay area
  THEN click passes through to content below
  AND overlay is not focusable via keyboard

Scenario: Screen reader
  GIVEN screen reader navigates page
  WHEN passing NoiseOverlay
  THEN it is ignored (aria-hidden)
```

---

## Edge Cases

| Case | Expected Behavior |
|------|-------------------|
| Missing texture file | Graceful degradation (no visible overlay) |
| Invalid opacity value | Fall back to default (1) |
| Parent has no position | Overlay positions to nearest positioned ancestor |

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

No fallbacks required - all CSS properties are widely supported.

---

## Code Example

```astro
---
interface Props {
  opacity?: 1 | 0.3;
  class?: string;
}

const { opacity = 1, class: className } = Astro.props;
---

<div
  class:list={[
    'noise-overlay',
    opacity === 0.3 && 'noise-overlay--subtle',
    className
  ]}
  aria-hidden="true"
></div>

<style>
  .noise-overlay {
    position: absolute;
    inset: 0;
    background-image: url('/textures/noise-pattern.png');
    background-size: 150px 150px;
    background-repeat: repeat;
    z-index: 4;
    pointer-events: none;
    opacity: 1;
  }

  .noise-overlay--subtle {
    opacity: 0.3;
  }
</style>
```
