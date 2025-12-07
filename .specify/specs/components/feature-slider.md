# Feature Slider Component Specification

Extracted from: https://scion-template.webflow.io/

---

## Structure

```html
<section class="section wide-section">
  <div class="wide-section-content">
    <!-- Background layers -->
    <div class="grid-bg"></div>
    <div class="noise-bg"></div>

    <div class="container">
      <div class="slider-wrapper">
        <div class="slider w-slider">
          <div class="w-slider-mask">
            <div class="w-slide">
              <div class="slider-slide">
                <!-- Slide content -->
                <div class="slider-content">
                  <div class="dot-title">Label</div>
                  <h2>Slide Title</h2>
                  <p>Description text...</p>
                  <a class="arrow-link">Learn more</a>
                </div>
                <div class="slider-image-wrapper">
                  <img class="slider-image" src="landscape.webp" />
                </div>
              </div>
            </div>
            <!-- More slides -->
          </div>

          <!-- Navigation -->
          <div class="arrow-button reverse slider-prev w-slider-arrow-left">
            <img src="arrow-right.svg" />
          </div>
          <div class="arrow-button slider-next w-slider-arrow-right">
            <img src="arrow-right.svg" />
          </div>

          <!-- Dot navigation -->
          <div class="dot-nav w-slider-nav"></div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## Slider Container

| Property | Value |
|----------|-------|
| Width | `1200px` |
| Height | `675px` |
| Overflow | `visible` |
| Position | `relative` |

### Slider Mask
| Property | Value |
|----------|-------|
| Width | `100%` |
| Height | `675px` |
| Overflow | `hidden` |
| Position | `relative` |

---

## Slide Layout

### Slider Slide
| Property | Value |
|----------|-------|
| Display | `grid` |
| Grid-template-columns | `1fr 1fr` |
| Gap | `48px` |
| Height | `100%` |
| Align-items | `center` |

### Slider Content (Left)
| Property | Value |
|----------|-------|
| Display | `flex` |
| Flex-direction | `column` |
| Gap | `24px` |
| Max-width | `576px` |

### Slider Image Wrapper (Right)
| Property | Value |
|----------|-------|
| Width | `576px` |
| Height | `384px` |
| Border-radius | `10px` |
| Overflow | `hidden` |

### Slider Image
| Property | Value |
|----------|-------|
| Width | `100%` |
| Height | `100%` |
| Object-fit | `cover` |

---

## Slide Content Typography

### Dot Title (Label)
| Property | Value |
|----------|-------|
| Font-size | `12px` |
| Font-weight | `700` |
| Letter-spacing | `0.08em` |
| Text-transform | `uppercase` |
| Color | `rgb(255, 255, 255)` |
| Display | `flex` |
| Gap | `12px` |

### Slide Heading (H2)
| Property | Value |
|----------|-------|
| Font-size | `48px` |
| Line-height | `1.1` |
| Font-weight | `400` |
| Color | `rgb(255, 255, 255)` |

### Slide Description
| Property | Value |
|----------|-------|
| Font-size | `16px` |
| Line-height | `22.4px` |
| Color | `rgba(255, 255, 255, 0.7)` |

---

## Navigation

### Arrow Buttons
| Property | Value |
|----------|-------|
| Width | `48px` |
| Height | `48px` |
| Border-radius | `50%` |
| Background | `rgba(255, 255, 255, 0.06)` |
| Position | `absolute` |
| Cursor | `pointer` |
| Z-index | `10` |

### Previous Button Position
| Property | Value |
|----------|-------|
| Left | `0` |
| Top | `50%` |
| Transform | `translateY(-50%) rotate(180deg)` |

### Next Button Position
| Property | Value |
|----------|-------|
| Right | `0` |
| Top | `50%` |
| Transform | `translateY(-50%)` |

### Arrow Icon
| Property | Value |
|----------|-------|
| Width | `24px` |
| Height | `24px` |

---

## Dot Navigation

| Property | Value |
|----------|-------|
| Width | `462px` |
| Height | `8px` |
| Position | `absolute` |
| Bottom | `24px` |
| Left | `50%` |
| Transform | `translateX(-50%)` |
| Display | `flex` |
| Gap | `8px` |
| Justify-content | `center` |

### Individual Dot
| Property | Value |
|----------|-------|
| Width | `8px` |
| Height | `8px` |
| Border-radius | `50%` |
| Background | `rgba(255, 255, 255, 0.5)` |
| Cursor | `pointer` |
| Transition | `background 0.2s` |

### Active Dot
| Property | Value |
|----------|-------|
| Background | `rgb(255, 255, 255)` |

---

## Slide Transition

| Property | Value |
|----------|-------|
| Transition | `transform 0.5s ease-in-out` |
| Animation | Slide horizontally |

---

## Responsive Breakpoints

### Tablet (768px)
| Change | Value |
|--------|-------|
| Grid columns | `1fr` (single column) |
| Content order | Text first, image below |
| Image height | `300px` |
| Arrow buttons | Hidden or repositioned |

### Mobile (390px)
| Change | Value |
|--------|-------|
| Heading size | `32px` |
| Image height | `200px` |
| Navigation | Swipe-enabled |
| Dot nav | Visible, centered |

---

## CSS Implementation

```css
.slider {
  width: 100%;
  max-width: 1200px;
  position: relative;
  overflow: visible;
}

.w-slider-mask {
  overflow: hidden;
  position: relative;
}

.slider-slide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  height: 100%;
}

.slider-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.slider-image-wrapper {
  border-radius: 10px;
  overflow: hidden;
}

.slider-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Arrow navigation */
.arrow-button.slider-prev,
.arrow-button.slider-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.arrow-button.slider-prev {
  left: 0;
  transform: translateY(-50%) rotate(180deg);
}

.arrow-button.slider-next {
  right: 0;
}

/* Dot navigation */
.dot-nav {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot-nav > div {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.2s ease;
}

.dot-nav > div.w-active {
  background: #fff;
}

@media (max-width: 991px) {
  .slider-slide {
    grid-template-columns: 1fr;
  }
  .slider-image-wrapper {
    height: 300px;
    order: -1;
  }
}

@media (max-width: 479px) {
  .slider-slide h2 {
    font-size: 32px;
  }
  .slider-image-wrapper {
    height: 200px;
  }
}
```
