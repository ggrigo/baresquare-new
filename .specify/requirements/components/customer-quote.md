# CustomerQuote Component Specification

## Component Identity

| Property | Value |
|----------|-------|
| Name | CustomerQuote |
| File | `src/components/CustomerQuote.astro` |
| Priority | Medium |
| Complexity | Low |
| Estimated Lines | ~60 |

---

## Description

A testimonial/quote section featuring a large customer photo alongside quote text with attribution.

---

## Props Specification

```typescript
interface CustomerQuoteProps {
  /**
   * Customer photo
   */
  image: {
    src: string;
    alt: string;
  };

  /**
   * Quote text
   */
  quote: string;

  /**
   * Customer name
   */
  name: string;

  /**
   * Customer title/role
   */
  title: string;

  /**
   * Company name
   */
  company?: string;

  /**
   * Follow link
   */
  followLink?: {
    label: string;
    href: string;
  };

  /**
   * Additional CSS class
   */
  class?: string;
}
```

---

## HTML Structure

```html
<section class="quote-section">
  <div class="container">
    <div class="quote-grid">
      <figure class="quote-image">
        <img src="..." alt="Customer Name">
      </figure>
      <blockquote class="quote-content">
        <p class="quote-text">"Quote text here..."</p>
        <footer class="quote-attribution">
          <cite class="quote-name">John Doe</cite>
          <span class="quote-title">CEO, Company Name</span>
        </footer>
        <a href="..." class="quote-follow">
          Follow on X
          <svg>...</svg>
        </a>
      </blockquote>
    </div>
  </div>
</section>
```

---

## CSS Implementation

```css
.quote-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.quote-image {
  margin: 0;
}

.quote-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.quote-content {
  margin: 0;
}

.quote-text {
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 36px;
}

.quote-attribution {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
}

.quote-name {
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
}

.quote-title {
  color: var(--text-muted);
  font-size: 16px;
}

.quote-follow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.quote-follow:hover {
  opacity: 0.7;
}

@media (max-width: 991px) {
  .quote-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .quote-text {
    font-size: 28px;
  }
}
```

### Critical CSS Values

| Property | Value |
|----------|-------|
| Quote text size | 40px (desktop), 28px (tablet) |
| Grid gap | 48px |
| Image border-radius | 10px |

---

## State Matrix

| State | Visual Changes | Trigger |
|-------|----------------|---------|
| default | Static layout | Initial |
| link-hover | Follow link opacity 0.7 | Mouse on link |

---

## Accessibility Checklist

- [x] Uses semantic `<blockquote>` element
- [x] Uses `<figure>` for image
- [x] Attribution uses `<cite>` for name
- [x] Image has descriptive alt text

---

## Acceptance Criteria

```gherkin
Scenario: Quote layout
  GIVEN viewport is desktop
  WHEN CustomerQuote renders
  THEN image on left, quote on right
  AND quote text is 40px

Scenario: Mobile layout
  GIVEN viewport ≤ 991px
  WHEN CustomerQuote renders
  THEN stacks vertically
  AND quote text is 28px
```
