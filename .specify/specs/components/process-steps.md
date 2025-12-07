# Process Steps Component Specification

Extracted from: https://scion-template.webflow.io/

---

## Structure

```html
<section class="section">
  <div class="container">
    <div class="process-with-sidebar">
      <div class="sidebar-content">
        <div class="dot-title">
          <div class="dot orange"></div>
          <span>Our Process</span>
        </div>
        <h2 class="heading-h2">How we deliver results.</h2>
        <p class="body-text">Supporting description text...</p>
      </div>

      <div class="process-list">
        <div class="process-item">
          <div class="process-number">01</div>
          <div class="process-content">
            <h3 class="process-title">Discovery</h3>
            <p class="process-description">Description text...</p>
          </div>
        </div>
        <!-- More process items -->
      </div>
    </div>
  </div>
</section>
```

---

## Process With Sidebar Container

| Property | Value |
|----------|-------|
| Width | `1200px` |
| Height | `704px` |
| Display | `grid` |
| Grid-template-columns | `576px 576px` |
| Gap | `48px` |

---

## Sidebar Content

| Property | Value |
|----------|-------|
| Width | `576px` |
| Position | `sticky` (optional) |
| Top | `96px` |

### Sidebar Typography
| Element | Size | Line-height | Weight |
|---------|------|-------------|--------|
| Dot title | `12px` | `1.2` | `700` |
| H2 | `48px` | `1.1` | `400` |
| Body text | `16px` | `1.4` | `400` |

---

## Process List

| Property | Value |
|----------|-------|
| Width | `576px` |
| Height | `704px` |
| Display | `flex` |
| Flex-direction | `column` |
| Gap | `72px` |

---

## Process Item

| Property | Value |
|----------|-------|
| Width | `576px` |
| Height | `~163px` (varies) |
| Display | `flex` |
| Gap | `24px` |
| Padding-top | `24px` |
| Border-top | `1px solid rgba(255, 255, 255, 0.1)` |

---

## Process Number

| Property | Value |
|----------|-------|
| Font-size | `48px` |
| Font-weight | `400` |
| Color | `rgba(255, 255, 255, 0.3)` |
| Font-family | Aspekta |
| Line-height | `1` |
| Min-width | `80px` |

---

## Process Content

| Property | Value |
|----------|-------|
| Display | `flex` |
| Flex-direction | `column` |
| Gap | `12px` |
| Flex | `1` |

### Process Title (H3)
| Property | Value |
|----------|-------|
| Font-size | `24px` |
| Line-height | `1.2` |
| Font-weight | `400` |
| Color | `rgb(255, 255, 255)` |

### Process Description
| Property | Value |
|----------|-------|
| Font-size | `16px` |
| Line-height | `22.4px` |
| Color | `rgba(255, 255, 255, 0.7)` |

---

## Responsive Breakpoints

### Tablet (768px)
| Change | Value |
|--------|-------|
| Grid columns | `1fr` (single column) |
| Sidebar | Not sticky, full width |
| Process list | Below sidebar |
| Gap | `48px` between sidebar and list |

### Mobile (390px)
| Change | Value |
|--------|-------|
| Process item gap | `16px` |
| Process number | `32px` font-size |
| Process title | `20px` font-size |
| Gap between items | `48px` |

---

## CSS Implementation

```css
.process-with-sidebar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.sidebar-content {
  position: sticky;
  top: 96px;
  align-self: start;
}

.process-list {
  display: flex;
  flex-direction: column;
  gap: 72px;
}

.process-item {
  display: flex;
  gap: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.process-number {
  font-size: 48px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1;
  min-width: 80px;
}

.process-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.process-title {
  font-size: 24px;
  font-weight: 400;
  color: #fff;
}

.process-description {
  font-size: 16px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 991px) {
  .process-with-sidebar {
    grid-template-columns: 1fr;
  }
  .sidebar-content {
    position: static;
  }
}

@media (max-width: 479px) {
  .process-list {
    gap: 48px;
  }
  .process-item {
    gap: 16px;
  }
  .process-number {
    font-size: 32px;
    min-width: 50px;
  }
  .process-title {
    font-size: 20px;
  }
}
```
