# Buttons Component Specification

Extracted from: https://scion-template.webflow.io/

---

## Primary Button (.button)

### Desktop Specs
| Property | Value |
|----------|-------|
| Display | `flex` |
| Align-items | `center` |
| Justify-content | `center` |
| Padding | `0px 54px` (horizontal only) |
| Height | Auto (inherits from parent) |
| Background | `rgba(255, 255, 255, 0.06)` |
| Border-radius | `200px` (pill shape) |
| Border | `none` |
| Font-size | `13px` |
| Font-weight | `400` |
| Font-family | Aspekta |
| Color | `rgb(255, 255, 255)` |
| Text-transform | `none` |
| Cursor | `pointer` |
| Transition | `background-color 0.2s ease` |

### Hover State
| Property | Value |
|----------|-------|
| Background | `rgba(255, 255, 255, 0.4)` |

### Button Text Wrapper
For animated text effect:
| Property | Value |
|----------|-------|
| Display | `flex` |
| Overflow | `hidden` |
| Position | `relative` |

---

## Checkout Button (.w-commerce-commercecartcheckoutbutton)

| Property | Value |
|----------|-------|
| Padding | `9px 54px` |
| Background | `rgba(255, 255, 255, 0.06)` |
| Border-radius | `200px` |
| Font-size | `13px` |

---

## Arrow Button (.arrow-button)

Used for slider navigation:

| Property | Value |
|----------|-------|
| Width | `48px` |
| Height | `48px` |
| Border-radius | `50%` (circle) |
| Background | `rgba(255, 255, 255, 0.06)` |
| Display | `flex` |
| Align-items | `center` |
| Justify-content | `center` |
| Cursor | `pointer` |
| Position | `absolute` |
| Transition | `background-color 0.2s ease` |

### Arrow Icon Inside
| Property | Value |
|----------|-------|
| Width | `24px` |
| Height | `24px` |
| Color | `rgb(255, 255, 255)` |

### Reverse Variant (.arrow-button.reverse)
| Property | Value |
|----------|-------|
| Transform | `rotate(180deg)` |

### Hover State
| Property | Value |
|----------|-------|
| Background | `rgba(255, 255, 255, 0.2)` |

---

## Icon Button (Video Play)

| Property | Value |
|----------|-------|
| Width | `48px` |
| Height | `48px` |
| Border-radius | `50%` |
| Background | `rgba(0, 0, 0, 0.5)` |
| Display | `flex` |
| Align-items | `center` |
| Justify-content | `center` |
| Backdrop-filter | `blur(10px)` |

### Play Icon
| Property | Value |
|----------|-------|
| Width | `16px` |
| Height | `19px` |
| Color | `rgb(255, 255, 255)` |

---

## CSS Implementation

```css
/* Primary Button */
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 54px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 200px;
  border: none;
  font-size: 13px;
  font-weight: 400;
  font-family: var(--font-primary);
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.button:hover {
  background: rgba(255, 255, 255, 0.4);
}

/* Arrow Button */
.arrow-button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.arrow-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.arrow-button.reverse {
  transform: rotate(180deg);
}
```

---

## Accessibility Notes

1. All buttons should have visible focus states
2. Focus ring: `outline: 2px solid white; outline-offset: 2px;`
3. Ensure sufficient color contrast (WCAG AA)
4. Include `aria-label` for icon-only buttons
