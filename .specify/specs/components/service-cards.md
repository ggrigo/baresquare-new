# Service Cards Component Specification

Extracted from: https://scion-template.webflow.io/

---

## Structure

```html
<section class="section">
  <div class="services-scrolling-wrapper">
    <div class="services-scrolling-row-wrap">
      <div class="services-scrolling-row">
        <div class="service-item">
          <div class="service-box">
            <div class="noise-bg service-noise"></div>
            <div class="grid-bg service-grid-bg"></div>
            <div class="service-box-content">
              <div class="icon-box">
                <div class="noise-bg icon-box-noise"></div>
                <img class="icon-box-image" src="icon-abstract-shape-03.svg" />
              </div>
              <h3 class="service-title">Data Engineering</h3>
              <p class="service-description">Description text...</p>
              <a class="arrow-link">
                <span class="arrow-link-text">Learn more</span>
                <img class="arrow-link-icon" src="arrow-right.svg" />
              </a>
            </div>
          </div>
        </div>
        <!-- More service items -->
      </div>
    </div>
  </div>
</section>
```

---

## Scrolling Container

### Services Scrolling Wrapper
| Property | Value |
|----------|-------|
| Width | `1200px` |
| Height | `2160px` (stacked rows) |
| Display | `flex` |
| Flex-direction | `row` |
| Overflow | `visible` |

### Services Scrolling Row Wrap
| Property | Value |
|----------|-------|
| Width | `1200px` |
| Height | `589px` |
| Display | `flex` |
| Overflow | `hidden` |

### Services Scrolling Row (Animated)
| Property | Value |
|----------|-------|
| Width | `2448px` (extends beyond viewport) |
| Height | `589px` |
| Display | `flex` |
| Gap | `24px` |
| Padding-right | `24px` |
| Animation | Infinite horizontal scroll |

---

## Service Item

| Property | Value |
|----------|-------|
| Width | `384px` |
| Height | `589px` |
| Display | `flex` |
| Padding | `0` |

---

## Service Box (Card)

| Property | Value |
|----------|-------|
| Background | `rgba(255, 255, 255, 0.06)` |
| Border-radius | `10px` |
| Overflow | `hidden` |
| Position | `relative` |
| Padding | `24px` |
| Display | `flex` |
| Flex-direction | `column` |
| Gap | `24px` |

### Noise Overlay (.service-noise)
| Property | Value |
|----------|-------|
| Opacity | `0.3` |
| Z-index | `4` |
| Background-size | `150px 150px` |

### Grid Background (.service-grid-bg)
| Property | Value |
|----------|-------|
| Opacity | `0.2` |
| Z-index | `3` |

---

## Icon Box

| Property | Value |
|----------|-------|
| Width | `96px` |
| Height | `96px` |
| Background | `rgb(108, 88, 141)` (purple accent) |
| Border-radius | `10px` |
| Display | `flex` |
| Align-items | `center` |
| Justify-content | `center` |
| Position | `relative` |
| Overflow | `hidden` |

### Icon Box Noise
| Property | Value |
|----------|-------|
| Opacity | `1` |
| Z-index | `4` |

### Icon Image
| Property | Value |
|----------|-------|
| Width | `96px` |
| Height | `96px` |
| Border-radius | `5px` |
| Object-fit | `contain` |
| Z-index | `5` |

---

## Service Content

### Service Title (H3)
| Property | Value |
|----------|-------|
| Font-size | `24px` |
| Line-height | `1.2` |
| Font-weight | `400` |
| Color | `rgb(255, 255, 255)` |
| Font-family | Aspekta |

### Service Description
| Property | Value |
|----------|-------|
| Font-size | `16px` |
| Line-height | `22.4px` |
| Color | `rgba(255, 255, 255, 0.7)` |

### Arrow Link
| Property | Value |
|----------|-------|
| Display | `flex` |
| Gap | `6px` |
| Font-size | `16px` |
| Color | `rgb(255, 255, 255)` |
| Margin-top | `auto` (pushes to bottom) |

---

## Scrolling Animation

### Keyframes
```css
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
```

### Animation Properties
| Property | Value |
|----------|-------|
| Animation-name | `scroll-left` |
| Animation-duration | `30s` (slow, continuous) |
| Animation-timing-function | `linear` |
| Animation-iteration-count | `infinite` |

### Pause on Hover
```css
.services-scrolling-row-wrap:hover .services-scrolling-row {
  animation-play-state: paused;
}
```

---

## Responsive Breakpoints

### Tablet (768px)
| Change | Value |
|--------|-------|
| Card width | Reduce to `320px` |
| Scrolling | May disable |
| Layout | Static grid |

### Mobile (390px)
| Change | Value |
|--------|-------|
| Card width | `100%` |
| Layout | Single column, stacked |
| Scrolling | Disabled |
| Gap | `18px` |

---

## CSS Implementation

```css
.services-scrolling-wrapper {
  width: 100%;
  overflow: hidden;
}

.services-scrolling-row-wrap {
  overflow: hidden;
}

.services-scrolling-row {
  display: flex;
  gap: 24px;
  animation: scroll-left 30s linear infinite;
}

.services-scrolling-row-wrap:hover .services-scrolling-row {
  animation-play-state: paused;
}

.service-item {
  flex-shrink: 0;
  width: 384px;
}

.service-box {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.service-box .noise-bg {
  opacity: 0.3;
}

.service-box .grid-bg {
  opacity: 0.2;
}

.icon-box {
  width: 96px;
  height: 96px;
  background: var(--bg-accent);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.service-title {
  font-size: 24px;
  font-weight: 400;
  color: #fff;
}

.service-description {
  font-size: 16px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.7);
}

.service-box .arrow-link {
  margin-top: auto;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```
