# Footer Component Specification

Extracted from: https://scion-template.webflow.io/

---

## Structure

```html
<footer class="footer">
  <div class="container">
    <div class="footer-wrapper">
      <div class="footer-top">
        <div class="footer-info">
          <div class="footer-info-top">
            <a class="logo-wrapper" href="/">
              <img class="logo" src="scion-logo.svg" />
            </a>
            <div class="social-links">
              <!-- Social icons -->
            </div>
          </div>
          <p class="fine-print footer-fine-print">
            <!-- Legal text -->
          </p>
        </div>
        <div class="footer-menus">
          <div class="footer-menu">
            <div class="footer-menu-title">Pages</div>
            <a class="footer-link">Home</a>
            <!-- More links -->
          </div>
          <!-- More menu columns -->
        </div>
      </div>
      <div class="footer-bottom">
        <!-- Copyright, credits -->
      </div>
    </div>
  </div>
</footer>
```

---

## Desktop Specs (1920px)

### Footer Container
| Property | Value |
|----------|-------|
| Width | `1280px` (full viewport) |
| Height | `647px` |
| Padding | `96px 0px 72px` |
| Background | `transparent` |
| Display | `flex` |
| Flex-direction | `column` |

### Footer Wrapper
| Property | Value |
|----------|-------|
| Width | `1200px` |
| Height | `479px` |
| Display | `flex` |
| Flex-direction | `column` |
| Gap | `168px` |

### Footer Top
| Property | Value |
|----------|-------|
| Width | `1200px` |
| Height | `263px` |
| Display | `grid` |
| Grid-template-columns | `576px 576px` |
| Gap | `48px` |

### Footer Info
| Property | Value |
|----------|-------|
| Width | `576px` |
| Height | `263px` |
| Display | `flex` |
| Flex-direction | `column` |
| Gap | `36px` |

### Footer Info Top
| Property | Value |
|----------|-------|
| Width | `169px` |
| Height | `114px` |
| Display | `flex` |
| Flex-direction | `column` |
| Gap | `24px` |

---

## Footer Menus

### Menu Container
| Property | Value |
|----------|-------|
| Width | `576px` |
| Display | `flex` |
| Gap | `48px` |

### Single Menu Column
| Property | Value |
|----------|-------|
| Width | `160px` |
| Display | `flex` |
| Flex-direction | `column` |
| Gap | `12px` |

### Menu Title
| Property | Value |
|----------|-------|
| Font-size | `12px` |
| Font-weight | `700` |
| Letter-spacing | `0.08em` |
| Text-transform | `uppercase` |
| Color | `rgba(255, 255, 255, 0.5)` |
| Margin-bottom | `12px` |

### Footer Link
| Property | Value |
|----------|-------|
| Font-size | `16px` |
| Line-height | `22.4px` |
| Color | `rgb(255, 255, 255)` |
| Text-decoration | `none` |
| Transition | `opacity 0.2s` |

### Footer Link Hover
| Property | Value |
|----------|-------|
| Opacity | `0.7` |

---

## Social Links

### Container
| Property | Value |
|----------|-------|
| Display | `flex` |
| Gap | `12px` |

### Social Icon
| Property | Value |
|----------|-------|
| Width | `18px` |
| Height | `18px` |
| Color | `rgb(255, 255, 255)` |
| Opacity | `1` |
| Transition | `opacity 0.2s` |

### Social Icon Hover
| Property | Value |
|----------|-------|
| Opacity | `0.7` |

---

## Fine Print

| Property | Value |
|----------|-------|
| Width | `480px` |
| Font-size | `14px` |
| Line-height | `1.4` |
| Color | `rgba(255, 255, 255, 0.5)` |

---

## Footer Bottom

| Property | Value |
|----------|-------|
| Border-top | `1px solid rgba(255, 255, 255, 0.1)` |
| Padding-top | `24px` |
| Display | `flex` |
| Justify-content | `space-between` |

### Copyright Text
| Property | Value |
|----------|-------|
| Font-size | `14px` |
| Color | `rgba(255, 255, 255, 0.5)` |

### Credits Link
| Property | Value |
|----------|-------|
| Font-size | `14px` |
| Color | `rgba(255, 255, 255, 0.7)` |

---

## Responsive Breakpoints

### Tablet (768px)
| Change | Value |
|--------|-------|
| Grid columns | `1fr` (single column) |
| Footer menus | Stack vertically or 2-column grid |
| Gap reduction | From `168px` to `96px` |

### Mobile (390px)
| Change | Value |
|--------|-------|
| All columns | Single column layout |
| Padding | Reduced to `48px 24px` |
| Menu columns | Stack vertically |

---

## CSS Implementation

```css
.footer {
  padding: 96px 0 72px;
}

.footer-wrapper {
  display: flex;
  flex-direction: column;
  gap: 168px;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.footer-menus {
  display: flex;
  gap: 48px;
}

.footer-menu {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-menu-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 12px;
}

.footer-link {
  font-size: 16px;
  line-height: 1.4;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.footer-link:hover {
  opacity: 0.7;
}

.fine-print {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  max-width: 480px;
}

@media (max-width: 991px) {
  .footer-top {
    grid-template-columns: 1fr;
  }
  .footer-wrapper {
    gap: 96px;
  }
}

@media (max-width: 479px) {
  .footer {
    padding: 48px 24px;
  }
  .footer-menus {
    flex-direction: column;
    gap: 36px;
  }
}
```
