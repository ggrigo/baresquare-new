# Blog Cards Component Specification

Extracted from: https://scion-template.webflow.io/

---

## Structure

```html
<section class="section">
  <div class="container">
    <div class="blog-grid w-dyn-items">
      <div class="w-dyn-item">
        <a class="blog-card w-inline-block" href="/blog/post">
          <div class="zoom-image-link blog-image">
            <img class="zoom-image" src="blog-01.webp" loading="lazy" />
          </div>
          <div class="blog-card-body">
            <div class="blog-card-content">
              <div class="dot-title">
                <div class="dot orange"></div>
                <span>Category</span>
              </div>
              <h3 class="blog-card-title">Blog Post Title</h3>
            </div>
            <div class="blog-card-meta">
              <span class="blog-date">Oct 15, 2024</span>
            </div>
          </div>
        </a>
      </div>
      <!-- More blog items -->
    </div>
  </div>
</section>
```

---

## Blog Grid

| Property | Value |
|----------|-------|
| Width | `1200px` |
| Height | `436px` |
| Display | `grid` |
| Grid-template-columns | `repeat(3, 1fr)` |
| Gap | `24px` |

---

## Blog Card

| Property | Value |
|----------|-------|
| Width | `384px` |
| Height | `436px` |
| Display | `flex` |
| Flex-direction | `column` |
| Border-radius | `10px` |
| Overflow | `hidden` |
| Background | `transparent` |
| Text-decoration | `none` |
| Transition | `transform 0.3s ease` |

### Card Hover
| Property | Value |
|----------|-------|
| Transform | `translateY(-4px)` (subtle lift) |

---

## Blog Image Container

| Property | Value |
|----------|-------|
| Width | `384px` |
| Height | `256px` |
| Overflow | `hidden` |
| Border-radius | `10px 10px 0 0` |

### Zoom Image Effect
| Property | Value |
|----------|-------|
| Default transform | `scale(1)` |
| Hover transform | `scale(1.05)` |
| Transition | `transform 0.5s ease` |

### Image
| Property | Value |
|----------|-------|
| Width | `100%` |
| Height | `100%` |
| Object-fit | `cover` |
| Loading | `lazy` |

---

## Blog Card Body

| Property | Value |
|----------|-------|
| Width | `384px` |
| Height | `180px` |
| Padding | `18px` |
| Background | `rgb(18, 18, 18)` |
| Display | `flex` |
| Flex-direction | `column` |
| Justify-content | `space-between` |
| Gap | `72px` |
| Border-radius | `0 0 10px 10px` |

---

## Blog Card Content

### Dot Title (Category Label)
| Property | Value |
|----------|-------|
| Display | `flex` |
| Align-items | `center` |
| Gap | `12px` |
| Font-size | `12px` |
| Font-weight | `700` |
| Letter-spacing | `0.08em` |
| Text-transform | `uppercase` |
| Color | `rgb(255, 255, 255)` |

### Category Dot
| Property | Value |
|----------|-------|
| Width | `6px` |
| Height | `6px` |
| Border-radius | `50%` |
| Background | `rgb(224, 131, 92)` (orange) |

### Blog Card Title (H3)
| Property | Value |
|----------|-------|
| Font-size | `20px` |
| Line-height | `1.3` |
| Font-weight | `400` |
| Color | `rgb(255, 255, 255)` |
| Margin-top | `12px` |

---

## Blog Card Meta

| Property | Value |
|----------|-------|
| Display | `flex` |
| Align-items | `center` |

### Date
| Property | Value |
|----------|-------|
| Font-size | `14px` |
| Color | `rgba(255, 255, 255, 0.5)` |

---

## Responsive Breakpoints

### Tablet (768px)
| Change | Value |
|--------|-------|
| Grid columns | `repeat(2, 1fr)` |
| Card width | Auto (fills column) |

### Mobile (390px)
| Change | Value |
|--------|-------|
| Grid columns | `1fr` (single column) |
| Card width | `100%` |
| Card height | Auto |
| Image height | `200px` |

---

## CSS Implementation

```css
.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-4px);
}

.zoom-image-link.blog-image {
  width: 100%;
  height: 256px;
  overflow: hidden;
}

.zoom-image-link .zoom-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.zoom-image-link:hover .zoom-image {
  transform: scale(1.05);
}

.blog-card-body {
  padding: 18px;
  background: var(--bg-dark);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  gap: 72px;
}

.dot-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.dot.orange {
  background: var(--accent-orange);
}

.blog-card-title {
  font-size: 20px;
  line-height: 1.3;
  font-weight: 400;
  color: #fff;
  margin-top: 12px;
}

.blog-date {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 991px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 479px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
  .zoom-image-link.blog-image {
    height: 200px;
  }
}
```
