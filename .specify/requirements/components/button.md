# Button Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | Button |
| File | `src/components/Button.astro` |
| Priority | Critical |
| Complexity | Medium |
| Estimated Lines | ~120 |

---

## Description

Multi-variant button component used throughout the site. Supports pill-shaped primary buttons, circular arrow buttons for navigation, and icon buttons. Glass morphism style with hover transitions.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| Arrow icon SVG | Asset | For arrow variant |

---

## Used In

- Navbar CTA
- Hero Section
- CTA Sections
- Feature Slider (arrow buttons)
- All interactive sections

---

## Props Specification

```typescript
interface ButtonProps {
  /**
   * Button style variant
   * @default 'primary'
   */
  variant?: 'primary' | 'arrow' | 'icon';

  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Link URL (renders as <a> if provided)
   */
  href?: string;

  /**
   * Open link in new tab
   * @default false
   */
  external?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Arrow direction (for arrow variant)
   * @default 'right'
   */
  direction?: 'left' | 'right' | 'up' | 'down';

  /**
   * Button type (for form buttons)
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Accessible label (required for icon-only)
   */
  'aria-label'?: string;

  /**
   * Additional CSS class
   */
  class?: string;
}
```

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| variant | string | 'primary' | primary, arrow, icon | Visual style |
| size | string | 'md' | sm, md, lg | Button size |
| href | string | - | - | URL for link buttons |
| external | boolean | false | - | Open in new tab |
| disabled | boolean | false | - | Disabled state |
| loading | boolean | false | - | Loading state |
| direction | string | 'right' | left, right, up, down | Arrow direction |
| type | string | 'button' | button, submit, reset | Form button type |
| aria-label | string | - | - | Accessible label |
| class | string | - | - | Additional CSS |

---

## HTML Structure

### Primary Button
```html
<button class="button button--primary button--md" type="button">
  <span class="button-text">Button Text</span>
</button>
```

### Arrow Button
```html
<button class="button button--arrow" type="button" aria-label="Next slide">
  <svg class="button-icon" aria-hidden="true">...</svg>
</button>
```

### Link Button
```html
<a class="button button--primary button--md" href="/page">
  <span class="button-text">Button Text</span>
</a>
```

### Semantic Requirements
- Use `<button>` for actions, `<a>` for navigation
- Icon-only buttons require `aria-label`
- Icon SVGs use `aria-hidden="true"`
- Disabled buttons use `disabled` attribute (not just styling)

---

## CSS Implementation

```css
/* Base Button */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.button:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}

.button:active {
  transform: scale(0.98);
}

/* Primary Variant */
.button--primary {
  border-radius: 200px;
  padding: 0 24px;
  height: 48px;
}

/* Arrow Variant */
.button--arrow {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 0;
}

/* Icon Variant */
.button--icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  padding: 0;
}

/* Sizes */
.button--sm {
  height: 36px;
  padding: 0 18px;
  font-size: 14px;
}

.button--lg {
  height: 56px;
  padding: 0 32px;
  font-size: 18px;
}

/* Hover State */
.button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.4);
}

/* Disabled State */
.button:disabled,
.button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Loading State */
.button--loading {
  pointer-events: none;
}

.button--loading .button-text {
  visibility: hidden;
}

.button--loading::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Critical CSS Values

| Property | Value | Tolerance |
|----------|-------|-----------|
| background (default) | rgba(255, 255, 255, 0.06) | Exact |
| background (hover) | rgba(255, 255, 255, 0.4) | Exact |
| border-radius (primary) | 200px | Exact (pill shape) |
| border-radius (arrow/icon) | 50% | Exact (circle) |
| height (md) | 48px | Exact |
| transition | 0.2s cubic-bezier(0.44, 0, 0.56, 1) | Exact |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | background: rgba(255,255,255,0.06) | Initial |
| hover | background: rgba(255,255,255,0.4) | Mouse enter |
| focus | outline: 2px solid white, offset: 2px | Tab focus |
| active | transform: scale(0.98) | Mouse down |
| disabled | opacity: 0.5, cursor: not-allowed | disabled prop |
| loading | Spinner replaces content | loading prop |

### State Transitions
```
default ↔ hover: 200ms cubic-bezier(0.44, 0, 0.56, 1)
active: immediate (no transition)
focus: immediate (no transition)
```

---

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| Desktop | Default sizes |
| Tablet | Same as desktop |
| Mobile | Consider larger touch targets (min 44px) |

### Touch Target Requirements
| Element | Minimum Size |
|---------|--------------|
| All buttons | 44px x 44px |
| Primary button | Already 48px height |
| Arrow button | Already 48px |

---

## Accessibility Checklist

- [x] Uses semantic `<button>` or `<a>` element
- [x] Focus visible (outline on :focus-visible)
- [x] Icon-only buttons have aria-label
- [x] Color contrast ≥ 4.5:1 (white on glass)
- [x] Touch target ≥ 44px
- [x] Disabled state uses `disabled` attribute
- [x] Loading state maintains button dimensions
- [x] No keyboard trap

### Keyboard Navigation
| Key | Action |
|-----|--------|
| Tab | Focus button |
| Enter | Activate button |
| Space | Activate button (for `<button>`) |
| Escape | Blur (if in modal context) |

---

## Performance Requirements

| Metric | Budget |
|--------|--------|
| CSS Size | < 1KB |
| JS Size | 0KB (CSS only) |
| Animation | GPU-accelerated (transform, opacity) |

---

## Acceptance Criteria

```gherkin
Feature: Button Component

Scenario: Primary button rendering
  GIVEN the Button component renders
  WHEN variant is 'primary'
  THEN it displays with pill shape (border-radius: 200px)
  AND height is 48px
  AND background is rgba(255, 255, 255, 0.06)

Scenario: Hover state
  GIVEN a button is rendered
  WHEN user hovers over it
  THEN background transitions to rgba(255, 255, 255, 0.4)
  AND transition duration is 200ms
  AND easing is cubic-bezier(0.44, 0, 0.56, 1)

Scenario: Focus state
  GIVEN a button is rendered
  WHEN user focuses via keyboard (Tab)
  THEN a 2px white outline appears
  AND outline offset is 2px

Scenario: Active state
  GIVEN a button is rendered
  WHEN user clicks (mouse down)
  THEN button scales to 0.98

Scenario: Disabled state
  GIVEN a button has disabled prop
  WHEN rendered
  THEN opacity is 0.5
  AND cursor is not-allowed
  AND click events are ignored
  AND keyboard navigation skips button

Scenario: Arrow button
  GIVEN variant is 'arrow'
  WHEN rendered
  THEN width and height are 48px
  AND shape is circular (border-radius: 50%)
  AND aria-label is provided

Scenario: Loading state
  GIVEN loading prop is true
  WHEN rendered
  THEN spinner is visible
  AND button text is hidden
  AND button dimensions are preserved
  AND clicks are ignored

Scenario: Link button
  GIVEN href prop is provided
  WHEN rendered
  THEN element is <a> not <button>
  AND href attribute is set

Scenario: External link
  GIVEN href and external props are provided
  WHEN rendered
  THEN target="_blank" is set
  AND rel="noopener noreferrer" is set
```

---

## Edge Cases

| Case | Expected Behavior |
|------|-------------------|
| Empty content | Button maintains minimum width |
| Very long text | Text truncates or wraps based on design |
| Both href and disabled | Renders as disabled link (no navigation) |
| Missing aria-label on icon | Console warning in development |
| Nested interactive | Avoid - use single button |

---

## Cross-Browser Notes

| Browser | Notes |
|---------|-------|
| Chrome | Full support |
| Firefox | Full support |
| Safari | Test focus-visible polyfill if needed |
| Edge | Full support |
| iOS Safari | Ensure touch feedback |
| Chrome Android | Full support |

### Known Issues
- Safari may need `-webkit-appearance: none` reset
- iOS may add touch highlight - use `-webkit-tap-highlight-color: transparent`

---

## Code Example

```astro
---
interface Props {
  variant?: 'primary' | 'arrow' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  disabled?: boolean;
  loading?: boolean;
  direction?: 'left' | 'right' | 'up' | 'down';
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  class?: string;
}

const {
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  disabled = false,
  loading = false,
  direction = 'right',
  type = 'button',
  'aria-label': ariaLabel,
  class: className
} = Astro.props;

const Element = href ? 'a' : 'button';
const isIconOnly = variant === 'arrow' || variant === 'icon';
---

<Element
  class:list={[
    'button',
    `button--${variant}`,
    variant === 'primary' && `button--${size}`,
    disabled && 'button--disabled',
    loading && 'button--loading',
    className
  ]}
  href={href}
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
  type={!href ? type : undefined}
  disabled={!href && disabled}
  aria-label={isIconOnly ? ariaLabel : undefined}
  aria-busy={loading}
>
  {variant === 'arrow' && (
    <svg class="button-icon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
      {direction === 'right' && <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none"/>}
      {direction === 'left' && <path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" fill="none"/>}
    </svg>
  )}

  {variant === 'primary' && (
    <span class="button-text">
      <slot />
    </span>
  )}

  {variant === 'icon' && <slot />}
</Element>

<style>
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: var(--font-primary);
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.06);
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
    position: relative;
    -webkit-tap-highlight-color: transparent;
  }

  .button:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
  }

  .button:active:not(:disabled) {
    transform: scale(0.98);
  }

  .button--primary {
    border-radius: 200px;
    padding: 0 24px;
    height: 48px;
  }

  .button--sm {
    height: 36px;
    padding: 0 18px;
    font-size: 14px;
  }

  .button--lg {
    height: 56px;
    padding: 0 32px;
    font-size: 18px;
  }

  .button--arrow,
  .button--icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    padding: 0;
  }

  .button:hover:not(:disabled):not(.button--disabled) {
    background: rgba(255, 255, 255, 0.4);
  }

  .button:disabled,
  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .button--loading {
    pointer-events: none;
  }

  .button--loading .button-text {
    visibility: hidden;
  }

  .button--loading::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .button-icon {
    width: 24px;
    height: 24px;
  }
</style>
```
