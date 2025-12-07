# BlogCard Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | BlogCard |
| File | `src/components/BlogCard.astro` |
| Priority | Medium |
| Complexity | Medium |
| Estimated Lines | ~80 |

---

## Description

A card component for displaying blog post previews. Features an image with zoom-on-hover effect, category dot title, post title, and date.

---

## Dependencies

| Dependency | Type | Required |
|------------|------|----------|
| DotTitle | Component | Yes |

---

## Props Specification

```typescript
interface BlogCardProps {
  /**
   * Featured image
   */
  image: {
    src: string;
    alt: string;
  };

  /**
   * Post category
   */
  category: string;

  /**
   * Post title
   */
  title: string;

  /**
   * Publication date
   */
  date: string;

  /**
   * Post URL
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
<article class="blog-card">
  <a href="..." class="blog-card-link">
    <div class="blog-card-image">
      <img src="..." alt="..." loading="lazy">
    </div>
    <div class="blog-card-content">
      <div class="dot-title">
        <span class="dot"></span>
        <span>Category</span>
      </div>
      <h3 class="blog-card-title">Post Title</h3>
      <time class="blog-card-date" datetime="2024-01-15">Jan 15, 2024</time>
    </div>
  </a>
</article>
```

---

## CSS Implementation

```css
.blog-card {
  width: 384px;
}

.blog-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.blog-card-image {
  width: 100%;
  height: 216px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 18px;
}

.blog-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card-link:hover .blog-card-image img {
  transform: scale(1.05);
}

.blog-card-content {
  padding: 0 6px;
}

.blog-card-title {
  font-size: 25px;
  font-weight: 400;
  line-height: 1.25;
  margin: 12px 0;
  color: var(--text-primary);
}

.blog-card-date {
  color: var(--text-subtle);
  font-size: 13px;
}

/* Grid container */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 991px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .blog-card {
    width: 100%;
  }
}

@media (max-width: 479px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
```

### Critical CSS Values

| Property | Value |
|----------|-------|
| Card width | 384px |
| Image height | 216px |
| Image zoom | scale(1.05) on hover |
| Zoom transition | 0.5s ease |
| Title size | 25px |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Static image | Initial |
| hover | Image scales to 1.05 | Mouse enter |
| focus | Focus ring on card | Keyboard focus |

---

## Accessibility Checklist

- [x] Uses semantic `<article>` and `<time>`
- [x] Image has alt text
- [x] Link wraps entire card (larger touch target)
- [x] Time element has datetime attribute
- [x] Focus visible

---

## Acceptance Criteria

```gherkin
Scenario: Image zoom on hover
  GIVEN a BlogCard renders
  WHEN user hovers over card
  THEN image scales to 1.05
  AND transition is 0.5s ease

Scenario: Card dimensions
  GIVEN viewport is desktop
  WHEN BlogCard renders
  THEN width is 384px
  AND image height is 216px

Scenario: Grid layout
  GIVEN blog section renders
  WHEN viewport is desktop
  THEN cards display in 3-column grid

GIVEN viewport ≤ 991px
  THEN cards display in 2-column grid

GIVEN viewport ≤ 479px
  THEN cards display in single column
```

---

## Performance Requirements

| Metric | Budget |
|--------|--------|
| Image | Lazy loaded, WebP format |
| CSS Size | < 500 bytes |
