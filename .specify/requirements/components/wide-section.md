# WideSection Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | WideSection |
| File | `src/components/WideSection.astro` |
| Priority | Critical |
| Complexity | Medium |
| Estimated Lines | ~80 |

---

## Description

A full-width section container with rounded corners, gradient backgrounds, and layered overlays (noise, grid). Used for hero and CTA sections to create visual distinction from standard sections.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| NoiseOverlay | Component | Yes |
| GridOverlay | Component | Yes |
| Container | Component | Yes |

---

## Used In

- Hero Section
- Mid-Page CTA
- Final CTA

---

## Props Specification

```typescript
interface WideSectionProps {
  /**
   * Background style variant
   * @default 'accent'
   */
  background?: 'accent' | 'dark' | 'transparent';

  /**
   * Whether to show noise overlay
   * @default true
   */
  hasNoise?: boolean;

  /**
   * Noise overlay opacity
   * @default 1
   */
  noiseOpacity?: 1 | 0.3;

  /**
   * Whether to show grid overlay
   * @default true
   */
  hasGrid?: boolean;

  /**
   * Grid overlay opacity
   * @default 0.7
   */
  gridOpacity?: 0.7 | 0.2;

  /**
   * HTML element to render as
   * @default 'section'
   */
  as?: 'section' | 'div' | 'article';

  /**
   * Additional CSS class
   */
  class?: string;
}
```

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| background | string | 'accent' | accent, dark, transparent | Background gradient style |
| hasNoise | boolean | true | true, false | Show noise overlay |
| noiseOpacity | number | 1 | 1, 0.3 | Noise layer opacity |
| hasGrid | boolean | true | true, false | Show grid overlay |
| gridOpacity | number | 0.7 | 0.7, 0.2 | Grid layer opacity |
| as | string | 'section' | section, div, article | HTML element |
| class | string | - | - | Additional CSS classes |

---

## HTML Structure

```html
<section class="wide-section">
  <div class="wide-section-content">
    <!-- Gradient vectors/blobs (z-2) -->
    <div class="wide-section-gradients">
      <slot name="gradients" />
    </div>

    <!-- Grid overlay (z-3) -->
    <div class="grid-overlay" aria-hidden="true"></div>

    <!-- Noise overlay (z-4) -->
    <div class="noise-overlay" aria-hidden="true"></div>

    <!-- Content container (z-5+) -->
    <div class="container wide-section-container">
      <slot />
    </div>
  </div>
</section>
```

### Semantic Requirements
- Use `<section>` for landmark navigation
- Include heading (h1/h2) within content for accessibility
- Overlay elements use `aria-hidden="true"`

---

## CSS Implementation

```css
.wide-section {
  padding: 0 9px;
}

.wide-section-content {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background: var(--bg-accent);
}

.wide-section-content--dark {
  background: var(--bg-dark);
}

.wide-section-content--transparent {
  background: transparent;
}

.wide-section-gradients {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
}

.wide-section-container {
  position: relative;
  z-index: 5;
}

/* Responsive */
@media (max-width: 991px) {
  .wide-section {
    padding: 0 6px;
  }
}

@media (max-width: 479px) {
  .wide-section {
    padding: 0 6px;
  }

  /* Optional: full-bleed on mobile */
  .wide-section-content {
    border-radius: 0;
  }
}
```

### Critical CSS Values

| Property | Value | Tolerance |
|----------|-------|-----------|
| padding (desktop) | 0 9px | Exact |
| padding (tablet/mobile) | 0 6px | Exact |
| border-radius | 10px | Exact |
| overflow | hidden | Required |

### Background Gradients (accent variant)
```css
--bg-accent: rgb(108, 88, 141); /* Base purple */

/* Gradient blobs applied via child elements */
```

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Visible with specified background | Initial render |
| with-gradients | Animated gradient blobs visible | Slot content |
| no-overlays | Clean background only | hasNoise=false, hasGrid=false |

*Note: No interactive states - container component*

---

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| 1920px+ | padding: 0 9px, border-radius: 10px |
| 992-1919px | Same as above |
| 768-991px | padding: 0 6px |
| 480-767px | padding: 0 6px |
| 0-479px | padding: 0 6px, optional border-radius: 0 |

---

## Accessibility Checklist

- [x] Uses semantic `<section>` element
- [x] Content has proper heading hierarchy
- [x] Overlays use `aria-hidden="true"`
- [x] Color contrast meets 4.5:1 for text
- [x] No keyboard traps
- [x] Landmarks visible to screen readers

---

## Performance Requirements

| Metric | Budget |
|--------|--------|
| CSS Size | < 500 bytes |
| Composite Layers | Minimize (avoid unnecessary z-index) |
| Paint Area | Contained within border-radius |

### Optimization Notes
- Use `overflow: hidden` to clip gradient animations
- Avoid animating gradients on mobile for performance
- Consider `contain: layout paint` for optimization

---

## Acceptance Criteria

```gherkin
Feature: WideSection Component

Scenario: Default rendering
  GIVEN the WideSection component renders
  WHEN no props are passed
  THEN it displays with accent background
  AND padding is 9px on left and right
  AND border-radius is 10px
  AND NoiseOverlay is visible at opacity 1
  AND GridOverlay is visible at opacity 0.7

Scenario: Dark variant
  GIVEN the WideSection renders
  WHEN background prop is 'dark'
  THEN background color is rgb(18, 18, 18)

Scenario: Responsive padding
  GIVEN viewport width is 991px or less
  WHEN WideSection renders
  THEN padding is 6px on left and right

Scenario: Content z-index
  GIVEN WideSection renders with content
  WHEN overlays and content are visible
  THEN content appears above all overlays

Scenario: Gradient slot
  GIVEN WideSection renders with gradient slot
  WHEN slot content is provided
  THEN gradients render at z-index 2
  AND are clipped by border-radius

Scenario: Without overlays
  GIVEN hasNoise and hasGrid are false
  WHEN WideSection renders
  THEN no overlay elements are rendered
  AND background is clean
```

---

## Edge Cases

| Case | Expected Behavior |
|------|-------------------|
| Empty content | Renders with minimum height from padding |
| Very tall content | Expands to fit, no max-height |
| Nested WideSection | Should work but not recommended |
| Missing slot content | Empty container renders |

---

## Cross-Browser Notes

| Browser | Notes |
|---------|-------|
| Chrome | Full support |
| Firefox | Full support |
| Safari | Check border-radius clipping on animations |
| Edge | Full support |
| iOS Safari | Test overflow clipping |
| Chrome Android | Full support |

---

## Code Example

```astro
---
import NoiseOverlay from './NoiseOverlay.astro';
import GridOverlay from './GridOverlay.astro';

interface Props {
  background?: 'accent' | 'dark' | 'transparent';
  hasNoise?: boolean;
  noiseOpacity?: 1 | 0.3;
  hasGrid?: boolean;
  gridOpacity?: 0.7 | 0.2;
  as?: 'section' | 'div' | 'article';
  class?: string;
}

const {
  background = 'accent',
  hasNoise = true,
  noiseOpacity = 1,
  hasGrid = true,
  gridOpacity = 0.7,
  as: Element = 'section',
  class: className
} = Astro.props;
---

<Element class:list={['wide-section', className]}>
  <div class:list={[
    'wide-section-content',
    `wide-section-content--${background}`
  ]}>
    <!-- Gradient slot -->
    <div class="wide-section-gradients">
      <slot name="gradients" />
    </div>

    <!-- Overlays -->
    {hasGrid && <GridOverlay opacity={gridOpacity} />}
    {hasNoise && <NoiseOverlay opacity={noiseOpacity} />}

    <!-- Content -->
    <div class="container wide-section-container">
      <slot />
    </div>
  </div>
</Element>

<style>
  .wide-section {
    padding: 0 9px;
  }

  .wide-section-content {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  .wide-section-content--accent {
    background: rgb(108, 88, 141);
  }

  .wide-section-content--dark {
    background: rgb(18, 18, 18);
  }

  .wide-section-content--transparent {
    background: transparent;
  }

  .wide-section-gradients {
    position: absolute;
    inset: 0;
    z-index: 2;
    overflow: hidden;
  }

  .wide-section-container {
    position: relative;
    z-index: 5;
  }

  @media (max-width: 991px) {
    .wide-section {
      padding: 0 6px;
    }
  }
</style>
```
