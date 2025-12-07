# FeatureSlider Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | FeatureSlider |
| File | `src/components/FeatureSlider.astro` |
| Priority | High |
| Complexity | High |
| Estimated Lines | ~180 |

---

## Description

An image carousel/slider with text content, arrow navigation buttons, and dot pagination. Displays features with large images and accompanying descriptions.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| Button (arrow variant) | Component | Yes |
| DotTitle | Component | Yes |

---

## Props Specification

```typescript
interface FeatureSliderProps {
  /**
   * Slide items
   */
  slides: SlideItem[];

  /**
   * Auto-play interval in ms (0 = disabled)
   * @default 0
   */
  autoPlay?: number;

  /**
   * Show dot pagination
   * @default true
   */
  showDots?: boolean;

  /**
   * Additional CSS class
   */
  class?: string;
}

interface SlideItem {
  image: {
    src: string;
    alt: string;
  };
  label: string;
  title: string;
  description: string;
}
```

---

## HTML Structure

```html
<div class="feature-slider">
  <!-- Slides container -->
  <div class="slider-track" role="region" aria-label="Feature slides">
    <div class="slider-slide" role="group" aria-roledescription="slide" aria-label="1 of 3">
      <div class="slide-content">
        <span class="dot-title">...</span>
        <h3 class="slide-title">Title</h3>
        <p class="slide-description">Description</p>
      </div>
      <div class="slide-image">
        <img src="..." alt="...">
      </div>
    </div>
    <!-- More slides -->
  </div>

  <!-- Navigation -->
  <div class="slider-nav">
    <button class="slider-arrow slider-arrow--prev" aria-label="Previous slide">
      <svg>...</svg>
    </button>
    <button class="slider-arrow slider-arrow--next" aria-label="Next slide">
      <svg>...</svg>
    </button>
  </div>

  <!-- Dot pagination -->
  <div class="slider-dots" role="tablist" aria-label="Slide navigation">
    <button class="slider-dot slider-dot--active" role="tab" aria-selected="true" aria-label="Slide 1"></button>
    <button class="slider-dot" role="tab" aria-selected="false" aria-label="Slide 2"></button>
  </div>
</div>
```

---

## CSS Implementation

```css
.feature-slider {
  position: relative;
  overflow: hidden;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slider-slide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  min-width: 100%;
  padding: 0 24px;
}

.slide-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide-title {
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  margin: 12px 0;
}

.slide-description {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.4;
}

.slide-image {
  border-radius: 10px;
  overflow: hidden;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Navigation arrows */
.slider-nav {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.slider-arrow {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.slider-arrow:hover {
  background: rgba(255, 255, 255, 0.4);
}

.slider-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Dot pagination */
.slider-dots {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 24px;
}

.slider-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.slider-dot--active {
  background: white;
}

/* Responsive */
@media (max-width: 991px) {
  .slider-slide {
    grid-template-columns: 1fr;
  }

  .slide-image {
    order: -1;
  }
}

@media (max-width: 479px) {
  .slide-title {
    font-size: 28px;
  }
}
```

### Critical CSS Values

| Property | Value |
|----------|-------|
| Slide transition | 0.5s ease-in-out |
| Arrow size | 48px |
| Arrow hover | rgba(255,255,255,0.4) |
| Dot size | 8px |
| Dot active | white |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | First slide visible | Initial |
| transitioning | Slide animating | Nav click |
| at-start | Prev arrow disabled | First slide |
| at-end | Next arrow disabled | Last slide |
| touch-dragging | Follows finger | Touch drag |

---

## Accessibility Checklist

- [x] Uses role="region" with aria-label
- [x] Slides have role="group" and aria-roledescription
- [x] Arrows have aria-label
- [x] Dots use role="tablist" and role="tab"
- [x] Keyboard navigable
- [x] Focus management on slide change
- [x] Pause auto-play on focus/hover

---

## Acceptance Criteria

```gherkin
Scenario: Arrow navigation
  GIVEN slider is on slide 1 of 3
  WHEN user clicks next arrow
  THEN slider transitions to slide 2
  AND transition is 0.5s ease-in-out
  AND active dot updates

Scenario: Keyboard navigation
  GIVEN slider is focused
  WHEN user presses ArrowRight
  THEN slider moves to next slide

Scenario: Touch support
  GIVEN user is on mobile
  WHEN user swipes left
  THEN slider moves to next slide
```

---

## Performance Requirements

| Metric | Budget |
|--------|--------|
| JS Size | < 5KB |
| CSS Size | < 2KB |
| Animation | 60fps |
