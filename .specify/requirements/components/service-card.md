# ServiceCard Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | ServiceCard |
| File | `src/components/ServiceCard.astro` |
| Priority | High |
| Complexity | Medium |
| Estimated Lines | ~100 |

---

## Description

A card component used in the horizontally scrolling services section. Features an icon box with noise overlay, title, and description. Part of an infinite scroll animation.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| NoiseOverlay | Component | Yes |
| IconBox | Component | Yes |
| ArrowLink | Component | Optional |

---

## Props Specification

```typescript
interface ServiceCardProps {
  /**
   * Icon to display
   */
  icon: string; // SVG path or component

  /**
   * Card title
   */
  title: string;

  /**
   * Card description
   */
  description: string;

  /**
   * Link URL
   */
  href?: string;

  /**
   * Additional CSS class
   */
  class?: string;
}
```

---

## HTML Structure

```html
<article class="service-card">
  <div class="service-card-icon">
    <div class="icon-box">
      <img src="..." alt="" aria-hidden="true">
      <div class="noise-overlay noise-overlay--subtle" aria-hidden="true"></div>
    </div>
  </div>
  <h3 class="service-card-title">Service Title</h3>
  <p class="service-card-description">Description text...</p>
  <a href="..." class="service-card-link">
    Learn more
    <svg>...</svg>
  </a>
</article>
```

---

## CSS Implementation

```css
.service-card {
  width: 384px;
  min-height: 589px;
  padding: 36px;
  background: var(--bg-card);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.service-card-icon {
  margin-bottom: 24px;
}

.icon-box {
  width: 96px;
  height: 96px;
  border-radius: 10px;
  background: var(--bg-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.icon-box img {
  width: 48px;
  height: 48px;
}

.service-card-title {
  font-size: 25px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 12px;
}

.service-card-description {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.4;
  flex: 1;
}

.service-card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 16px;
  margin-top: 24px;
  transition: opacity 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.service-card-link:hover {
  opacity: 0.7;
}

.service-card-link svg {
  transition: transform 0.2s ease;
}

.service-card-link:hover svg {
  transform: translateX(4px);
}
```

### Critical CSS Values

| Property | Value |
|----------|-------|
| Card width | 384px |
| Card min-height | 589px |
| Icon box size | 96px |
| Background | rgba(255,255,255,0.06) |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Static card | Initial |
| link-hover | Link opacity 0.7, arrow moves | Mouse on link |
| card-focus | Focus ring on link | Keyboard focus |

---

## Scroll Container Specification

The service cards are wrapped in a scrolling container:

```css
.services-scroll {
  display: flex;
  gap: 24px;
  animation: scroll-infinite 30s linear infinite;
}

.services-scroll:hover {
  animation-play-state: paused;
}

@keyframes scroll-infinite {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (max-width: 991px) {
  .services-scroll {
    animation: none;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .service-card {
    scroll-snap-align: start;
  }
}
```

---

## Accessibility Checklist

- [x] Uses semantic `<article>` element
- [x] Icon has aria-hidden="true"
- [x] Link is keyboard accessible
- [x] Pause animation on hover (for readability)
- [x] Mobile uses native scroll

---

## Acceptance Criteria

```gherkin
Scenario: Card dimensions
  GIVEN a ServiceCard renders
  WHEN viewed on desktop
  THEN width is 384px
  AND min-height is 589px

Scenario: Icon box
  GIVEN ServiceCard renders
  WHEN icon box is visible
  THEN it has noise overlay at 0.3 opacity
  AND icon is 48x48 inside 96x96 box

Scenario: Scroll animation
  GIVEN services section renders
  WHEN animation plays
  THEN cards scroll infinitely left
  AND animation pauses on hover

Scenario: Mobile scroll
  GIVEN viewport ≤ 991px
  WHEN services section renders
  THEN animation stops
  AND native horizontal scroll is enabled
```

---

## Performance Requirements

| Metric | Budget |
|--------|--------|
| CSS Size | < 1KB |
| Animation | GPU-accelerated (translateX) |
