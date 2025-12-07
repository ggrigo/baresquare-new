# IconLinkItem Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | IconLinkItem |
| File | `src/components/IconLinkItem.astro` |
| Priority | Medium |
| Complexity | Low |
| Estimated Lines | ~50 |

---

## Description

A grid item featuring an icon box with noise overlay, title, description, and arrow button. Used in a 2x2 grid layout.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| NoiseOverlay | Component | Yes |
| Button (arrow) | Component | Yes |

---

## Props Specification

```typescript
interface IconLinkItemProps {
  /**
   * Icon image or component
   */
  icon: string;

  /**
   * Item title
   */
  title: string;

  /**
   * Item description
   */
  description: string;

  /**
   * Link URL
   */
  href: string;

  /**
   * Additional CSS class
   */
  class?: string;
}
```

---

## HTML Structure

```html
<a href="..." class="icon-link-item">
  <div class="icon-link-icon">
    <div class="icon-box">
      <img src="..." alt="" aria-hidden="true">
      <div class="noise-overlay noise-overlay--subtle" aria-hidden="true"></div>
    </div>
  </div>
  <div class="icon-link-content">
    <h3 class="icon-link-title">Title</h3>
    <p class="icon-link-description">Description text...</p>
  </div>
  <div class="icon-link-arrow">
    <div class="arrow-button">
      <svg>...</svg>
    </div>
  </div>
</a>
```

---

## CSS Implementation

```css
.icon-links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.icon-link-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 24px;
  background: var(--bg-card);
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.icon-link-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.icon-box {
  width: 72px;
  height: 72px;
  border-radius: 10px;
  background: var(--bg-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.icon-box img {
  width: 36px;
  height: 36px;
}

.icon-link-content {
  flex: 1;
}

.icon-link-title {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 6px;
}

.icon-link-description {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.4;
}

.icon-link-arrow {
  flex-shrink: 0;
}

.arrow-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.icon-link-item:hover .arrow-button {
  background: rgba(255, 255, 255, 0.4);
}

@media (max-width: 767px) {
  .icon-links-grid {
    grid-template-columns: 1fr;
  }
}
```

### Critical CSS Values

| Property | Value |
|----------|-------|
| Grid | 2x2 on desktop |
| Icon box | 72x72px |
| Arrow button | 48x48px |
| Background hover | rgba(255,255,255,0.1) |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Static card | Initial |
| hover | Card bg lightens, arrow button lightens | Mouse enter |
| focus | Focus ring on card | Keyboard focus |

---

## Accessibility Checklist

- [x] Entire card is link (larger touch target)
- [x] Icon is decorative (aria-hidden)
- [x] Focus visible on card
- [x] Touch target ≥ 44px

---

## Acceptance Criteria

```gherkin
Scenario: Hover state
  GIVEN IconLinkItem renders
  WHEN user hovers
  THEN card background lightens
  AND arrow button background lightens
  AND transition is 200ms

Scenario: Grid layout
  GIVEN icon links section renders
  WHEN viewport is desktop
  THEN displays as 2x2 grid

Scenario: Mobile layout
  GIVEN viewport ≤ 767px
  THEN displays as single column
```
