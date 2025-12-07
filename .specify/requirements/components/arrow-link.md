# ArrowLink Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | ArrowLink |
| File | `src/components/ArrowLink.astro` |
| Priority | High |
| Complexity | Low |
| Estimated Lines | ~40 |

---

## Description

A text link with an arrow icon that animates on hover. Used throughout the site for "Learn more", "Read more", and similar CTAs.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| Arrow icon SVG | Asset | Yes |

---

## Props Specification

```typescript
interface ArrowLinkProps {
  /**
   * Link text
   */
  label: string;

  /**
   * Link URL
   */
  href: string;

  /**
   * Arrow direction
   * @default 'right'
   */
  direction?: 'right' | 'up-right' | 'down';

  /**
   * External link
   * @default false
   */
  external?: boolean;

  /**
   * Additional CSS class
   */
  class?: string;
}
```

---

## HTML Structure

```html
<a href="..." class="arrow-link">
  <span class="arrow-link-text">Learn more</span>
  <svg class="arrow-link-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
    <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/>
  </svg>
</a>
```

---

## CSS Implementation

```css
.arrow-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.arrow-link:hover {
  opacity: 0.7;
}

.arrow-link-icon {
  transition: transform 0.2s ease;
}

.arrow-link:hover .arrow-link-icon {
  transform: translateX(4px);
}

/* Up-right variant */
.arrow-link--up-right .arrow-link-icon {
  transform: rotate(-45deg);
}

.arrow-link--up-right:hover .arrow-link-icon {
  transform: rotate(-45deg) translate(2px, -2px);
}

/* Down variant */
.arrow-link--down .arrow-link-icon {
  transform: rotate(90deg);
}

.arrow-link--down:hover .arrow-link-icon {
  transform: rotate(90deg) translateX(4px);
}

/* Focus state */
.arrow-link:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
  border-radius: 2px;
}
```

### Critical CSS Values

| Property | Value |
|----------|-------|
| Icon size | 16x16px |
| Gap | 8px |
| Hover opacity | 0.7 |
| Arrow translate | 4px |
| Transition | 0.2s cubic-bezier(0.44, 0, 0.56, 1) |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Static with arrow | Initial |
| hover | Opacity 0.7, arrow moves right | Mouse enter |
| focus | Outline visible | Keyboard focus |

---

## Accessibility Checklist

- [x] Uses semantic `<a>` element
- [x] Arrow is decorative (aria-hidden)
- [x] Focus visible
- [x] External links have rel="noopener noreferrer"
- [x] External links open in new tab

---

## Acceptance Criteria

```gherkin
Scenario: Default rendering
  GIVEN ArrowLink renders
  WHEN viewed
  THEN text and arrow are inline
  AND arrow points right

Scenario: Hover animation
  GIVEN ArrowLink renders
  WHEN user hovers
  THEN opacity changes to 0.7
  AND arrow moves 4px right
  AND transition is 0.2s

Scenario: Up-right variant
  GIVEN direction is 'up-right'
  WHEN rendered
  THEN arrow is rotated 45 degrees up

Scenario: External link
  GIVEN external prop is true
  THEN target="_blank" is set
  AND rel="noopener noreferrer" is set
```

---

## Code Example

```astro
---
interface Props {
  label: string;
  href: string;
  direction?: 'right' | 'up-right' | 'down';
  external?: boolean;
  class?: string;
}

const {
  label,
  href,
  direction = 'right',
  external = false,
  class: className
} = Astro.props;
---

<a
  href={href}
  class:list={['arrow-link', `arrow-link--${direction}`, className]}
  target={external ? '_blank' : undefined}
  rel={external ? 'noopener noreferrer' : undefined}
>
  <span class="arrow-link-text">{label}</span>
  <svg class="arrow-link-icon" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
    <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/>
  </svg>
</a>

<style>
  .arrow-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    text-decoration: none;
    font-size: 16px;
    transition: opacity 0.2s cubic-bezier(0.44, 0, 0.56, 1);
  }

  .arrow-link:hover {
    opacity: 0.7;
  }

  .arrow-link-icon {
    transition: transform 0.2s ease;
  }

  .arrow-link:hover .arrow-link-icon {
    transform: translateX(4px);
  }

  .arrow-link--up-right .arrow-link-icon {
    transform: rotate(-45deg);
  }

  .arrow-link--up-right:hover .arrow-link-icon {
    transform: rotate(-45deg) translate(2px, -2px);
  }

  .arrow-link:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
    border-radius: 2px;
  }
</style>
```
