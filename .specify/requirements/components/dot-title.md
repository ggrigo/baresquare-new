# DotTitle Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | DotTitle |
| File | `src/components/DotTitle.astro` |
| Priority | Medium |
| Complexity | Low |
| Estimated Lines | ~30 |

---

## Description

A small label/badge component with a colored dot indicator. Used for categories, section labels, and status indicators throughout the site.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| None | - | - |

---

## Props Specification

```typescript
interface DotTitleProps {
  /**
   * Label text
   */
  label: string;

  /**
   * Dot color variant
   * @default 'white'
   */
  color?: 'white' | 'purple' | 'orange' | 'green' | 'gold';

  /**
   * Additional CSS class
   */
  class?: string;
}
```

---

## HTML Structure

```html
<div class="dot-title">
  <span class="dot-title-dot" aria-hidden="true"></span>
  <span class="dot-title-text">Category Name</span>
</div>
```

---

## CSS Implementation

```css
.dot-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.dot-title-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-primary);
  flex-shrink: 0;
}

.dot-title-text {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

/* Color variants */
.dot-title--purple .dot-title-dot {
  background: var(--accent-purple);
}

.dot-title--orange .dot-title-dot {
  background: var(--accent-orange);
}

.dot-title--green .dot-title-dot {
  background: var(--accent-green);
}

.dot-title--gold .dot-title-dot {
  background: var(--accent-gold);
}
```

### Critical CSS Values

| Property | Value |
|----------|-------|
| Dot size | 6px |
| Gap | 8px |
| Font size | 13px |
| Font weight | 600 |
| Text transform | uppercase |
| Letter spacing | 0.05em |

### Color Values

| Variant | Dot Color |
|---------|-----------|
| white | #ffffff |
| purple | rgb(108, 88, 141) |
| orange | rgb(224, 131, 92) |
| green | rgb(162, 183, 159) |
| gold | rgb(216, 163, 115) |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Static label | Initial |

*Note: DotTitle is a static decorative element with no interactive states*

---

## Accessibility Checklist

- [x] Dot is decorative (aria-hidden)
- [x] Text is visible and readable
- [x] Color is not sole conveyor of meaning
- [x] Sufficient contrast for text

---

## Acceptance Criteria

```gherkin
Scenario: Default rendering
  GIVEN DotTitle renders
  WHEN viewed
  THEN dot is 6px white circle
  AND text is uppercase, 13px

Scenario: Color variant
  GIVEN color prop is 'purple'
  WHEN rendered
  THEN dot is rgb(108, 88, 141)

Scenario: Inline layout
  GIVEN DotTitle renders
  THEN dot and text are inline (flex)
  AND gap is 8px
```

---

## Code Example

```astro
---
interface Props {
  label: string;
  color?: 'white' | 'purple' | 'orange' | 'green' | 'gold';
  class?: string;
}

const { label, color = 'white', class: className } = Astro.props;
---

<div class:list={['dot-title', `dot-title--${color}`, className]}>
  <span class="dot-title-dot" aria-hidden="true"></span>
  <span class="dot-title-text">{label}</span>
</div>

<style>
  .dot-title {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .dot-title-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--text-primary);
    flex-shrink: 0;
  }

  .dot-title-text {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
  }

  .dot-title--purple .dot-title-dot {
    background: var(--accent-purple);
  }

  .dot-title--orange .dot-title-dot {
    background: var(--accent-orange);
  }

  .dot-title--green .dot-title-dot {
    background: var(--accent-green);
  }

  .dot-title--gold .dot-title-dot {
    background: var(--accent-gold);
  }
</style>
```
