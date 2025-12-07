# Interactions Specification

## Document Info
| Property | Value |
|----------|-------|
| Purpose | Define all animations, transitions, and interactive behaviors |
| Reference | Webflow + Framer implementations |

---

## Global Timing Standards

### Easing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-smooth` | `cubic-bezier(0.44, 0, 0.56, 1)` | Primary hover/focus transitions |
| `--ease-out` | `ease-out` | Dropdown/menu animations |
| `--ease-in-out` | `ease-in-out` | Slider transitions |
| `ease` | `ease` | Image zoom effects |

### Duration Standards

| Category | Duration | Usage |
|----------|----------|-------|
| Micro | 100ms | Icon rotations, subtle changes |
| Fast | 200ms | Hover states, focus rings |
| Medium | 300-400ms | Transforms, slides |
| Slow | 500ms | Image zoom, page transitions |
| Animation | 20-60s | Background blob animations |

---

## Hover Transitions

### Button Hover
```css
.button {
  background: rgba(255, 255, 255, 0.06);
  transition: background-color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.button:hover {
  background: rgba(255, 255, 255, 0.4);
}
```

| Property | From | To | Duration | Easing |
|----------|------|-----|----------|--------|
| background-color | rgba(255,255,255,0.06) | rgba(255,255,255,0.4) | 200ms | cubic-bezier(0.44, 0, 0.56, 1) |

### Arrow Link Hover
```css
.arrow-link {
  transition: opacity 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.arrow-link:hover {
  opacity: 0.7;
}

.arrow-link-icon {
  transition: transform 0.2s ease;
}

.arrow-link:hover .arrow-link-icon {
  transform: translateX(4px);
}
```

| Property | From | To | Duration | Easing |
|----------|------|-----|----------|--------|
| opacity | 1 | 0.7 | 200ms | cubic-bezier(0.44, 0, 0.56, 1) |
| transform | none | translateX(4px) | 200ms | ease |

### Image Zoom Hover
```css
.image-container img {
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.05);
}
```

| Property | From | To | Duration | Easing |
|----------|------|-----|----------|--------|
| transform | scale(1) | scale(1.05) | 500ms | ease |

### Card Background Hover
```css
.card {
  transition: background-color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.card:hover {
  background: rgba(255, 255, 255, 0.1);
}
```

| Property | From | To | Duration | Easing |
|----------|------|-----|----------|--------|
| background-color | rgba(255,255,255,0.06) | rgba(255,255,255,0.1) | 200ms | cubic-bezier(0.44, 0, 0.56, 1) |

### Social Link Hover
```css
.social-link {
  transition: background-color 0.2s cubic-bezier(0.44, 0, 0.56, 1);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
}
```

---

## Focus States

### Standard Focus Ring
```css
:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}
```

| Property | Value |
|----------|-------|
| outline-width | 2px |
| outline-color | white |
| outline-style | solid |
| outline-offset | 2px |

### Button Active State
```css
.button:active {
  transform: scale(0.98);
}
```

---

## Dropdown Animations

### Navbar Dropdown
```css
.nav-dropdown-content {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.2s ease-out;
}

.nav-dropdown:hover .nav-dropdown-content {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```

| Property | From | To | Duration | Easing |
|----------|------|-----|----------|--------|
| opacity | 0 | 1 | 200ms | ease-out |
| transform | translateY(-10px) | translateY(0) | 200ms | ease-out |
| visibility | hidden | visible | 200ms | ease-out |

### Dropdown Arrow Rotation
```css
.dropdown-arrow {
  transition: transform 0.2s ease;
}

.nav-dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}
```

---

## Slider Transitions

### Slide Change
```css
.slider-track {
  transition: transform 0.5s ease-in-out;
}
```

| Property | From | To | Duration | Easing |
|----------|------|-----|----------|--------|
| transform | translateX(0) | translateX(-100%) | 500ms | ease-in-out |

### Dot Pagination
```css
.slider-dot {
  transition: background-color 0.2s ease;
}
```

---

## Scroll Animations

### Service Cards Infinite Scroll
```css
.services-scroll {
  animation: scroll-infinite 30s linear infinite;
}

.services-scroll:hover {
  animation-play-state: paused;
}

@keyframes scroll-infinite {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

| Property | Value |
|----------|-------|
| Duration | 30s |
| Timing | linear |
| Iteration | infinite |
| Pause trigger | hover |

---

## Background Animations

### Hero Blob Animations
```css
.blob--1 {
  animation: blob-float-1 45s ease-in-out infinite;
}

@keyframes blob-float-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(50px, 30px) scale(1.1);
  }
  50% {
    transform: translate(-30px, 60px) scale(0.95);
  }
  75% {
    transform: translate(40px, -20px) scale(1.05);
  }
}
```

| Blob | Duration | Properties Animated |
|------|----------|---------------------|
| Blob 1 | 45s | translate, scale |
| Blob 2 | 38s | translate, scale |
| Blob 3 | 52s | translate, scale |
| Blob 4 | 60s | translate, scale |
| Blob 5 | 42s | translate, scale |

---

## Loading States

### Button Loading Spinner
```css
.button--loading::after {
  content: '';
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .hero-blobs {
    display: none;
  }

  .services-scroll {
    animation: none;
    overflow-x: auto;
  }
}
```

---

## Keyboard Navigation Interactions

### Tab Focus Order
```
1. Skip link (shows on focus)
2. Logo
3. Nav links (left to right)
4. Nav dropdowns
5. CTA button
6. Page content (top to bottom)
7. Footer links
```

### Dropdown Keyboard Behavior
| Key | Action |
|-----|--------|
| Enter/Space | Open dropdown |
| Escape | Close dropdown |
| Arrow Down | Next item in dropdown |
| Arrow Up | Previous item in dropdown |
| Tab | Move to next focusable |

### Slider Keyboard Behavior
| Key | Action |
|-----|--------|
| Arrow Right | Next slide |
| Arrow Left | Previous slide |
| Tab | Move to controls |

---

## Touch Interactions

### Slider Swipe
| Gesture | Action | Threshold |
|---------|--------|-----------|
| Swipe Left | Next slide | 50px |
| Swipe Right | Previous slide | 50px |

### Service Cards (Mobile)
| Gesture | Action |
|---------|--------|
| Horizontal scroll | Native browser scroll |
| Snap | scroll-snap-align: start |

---

## Scroll-Triggered Animations (Optional)

### Fade In Up
```css
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

| Trigger | Threshold |
|---------|-----------|
| IntersectionObserver | 15-20% viewport |

### Stagger Animation
```css
.stagger-item {
  transition-delay: calc(var(--index) * 100ms);
}
```

---

## Animation Performance Guidelines

### GPU-Accelerated Properties
Only animate these for best performance:
- `transform`
- `opacity`

### Properties to Avoid Animating
- `width`/`height`
- `top`/`left`/`right`/`bottom`
- `margin`/`padding`
- `font-size`
- `border-width`

### Performance Budgets
| Metric | Target |
|--------|--------|
| Animation FPS | 60fps |
| Composite layers | Minimize |
| Paint area | Contained |
