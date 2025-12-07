# Figma Design Tokens

Extracted from: Figma File `2vjP04wXefh7swP9xHJ6Rc`, Node `555-4074`

---

## Colors

### Brand Colors
| Token | Hex | RGB |
|-------|-----|-----|
| Brand 1 (Purple) | `#6c588d` | `rgb(108, 88, 141)` |
| Brand 2 (Green) | `#a2b79f` | `rgb(162, 183, 159)` |
| Brand 3 (Gold) | `#d8a373` | `rgb(216, 163, 115)` |
| Brand 4 (Orange) | `#e0835c` | `rgb(224, 131, 92)` |

### Interface Colors
| Token | Value | Description |
|-------|-------|-------------|
| White | `#ffffff` | Primary text |
| Dark | `#1e1e1e` | Primary background |
| Dark 2 | `#121212` | Secondary background |
| Body Text | `#ffffffb2` | 70% white |
| Faded Heading | `#ffffff80` | 50% white |
| Border White | `#ffffff1a` | 10% white |
| Line White | `#ffffff26` | 15% white |
| Glass BG Dark | `#00000040` | 25% black |
| Glass BG White | `#ffffff26` | 15% white |

---

## Typography

### Font Family
- **Primary**: Geist (Regular)
- **Serif**: Newsreader 60pt

### Type Scale
| Token | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| Display | `64px` | 400 | 1.1 | 0 |
| h1 | `51px` | 400 | 1.15 | 0 |
| h2 | `40px` | 400 | 1.2 | 0 |
| h4 | `25px` | 400 | 1.25 | 0 |
| h5 | `20px` | 400 | 1.35 | 0 |
| Body Default | `16px` | 400 | 1.4 | 0 |
| Body Strong | `16px` | 500 | 1.4 | 0 |
| Badge | `13px` | 600 | 1.4 | 0 |
| Fine Print | `13px` | 400 | 1.4 | 0 |

---

## Spacing

| Token | Value |
|-------|-------|
| 6px | `6` |
| 12px | `12` |
| 18px | `18` |
| 24px | `24` |
| 36px | `36` |
| 48px | `48` |
| 72px | `72` |
| 96px | `96` |
| 168px | `168` |

### Grid Gaps
| Token | Value |
|-------|-------|
| Tight | `12px` |
| Default | `24px` |
| Loose | `48px` |

---

## Containers

| Token | Value | Usage |
|-------|-------|-------|
| Main | `1200px` | Primary container width |
| Content XL | `960px` | Extra large content area |
| Content L | `768px` | Large content area |
| Content S | `480px` | Small content area |
| Content XS | `384px` | Extra small / card width |
| Window | `1500px` | Reference window width |

---

## Border Radius

| Token | Value |
|-------|-------|
| Small | `5px` |
| Default | `10px` |

---

## Buttons

| Token | Value |
|-------|-------|
| Button Height | `48px` |
| Button X Radius | `54px` (horizontal padding area) |

---

## Global Values

| Token | Value |
|-------|-------|
| Navbar Height | `52px` |
| Wide Section Padding | `9px` |

---

## Effects

### Glass Blur
| Token | Type | Radius |
|-------|------|--------|
| Glass Blur Intense | Background Blur | `64px` |
| Glass Blur Subtle | Background Blur | `12px` |

### Shadow
| Token | Properties |
|-------|------------|
| Shadow | `drop-shadow(0 4px 48px rgba(0, 0, 0, 0.25))` |

---

## CSS Variables (from Figma)

```css
:root {
  /* Brand Colors */
  --brand-purple: #6c588d;
  --brand-green: #a2b79f;
  --brand-gold: #d8a373;
  --brand-orange: #e0835c;

  /* Interface Colors */
  --color-white: #ffffff;
  --color-dark: #1e1e1e;
  --color-dark-2: #121212;
  --color-body-text: rgba(255, 255, 255, 0.7);
  --color-faded: rgba(255, 255, 255, 0.5);
  --color-border: rgba(255, 255, 255, 0.1);
  --color-line: rgba(255, 255, 255, 0.15);
  --color-glass-dark: rgba(0, 0, 0, 0.25);
  --color-glass-white: rgba(255, 255, 255, 0.15);

  /* Typography */
  --font-primary: 'Aspekta', 'Geist', sans-serif;
  --font-serif: 'Newsreader', serif;

  /* Font Sizes */
  --text-display: 64px;
  --text-h1: 51px;
  --text-h2: 40px;
  --text-h4: 25px;
  --text-h5: 20px;
  --text-body: 16px;
  --text-small: 13px;

  /* Spacing */
  --space-1: 6px;
  --space-2: 12px;
  --space-3: 18px;
  --space-4: 24px;
  --space-5: 36px;
  --space-6: 48px;
  --space-7: 72px;
  --space-8: 96px;
  --space-9: 168px;

  /* Grid Gaps */
  --gap-tight: 12px;
  --gap-default: 24px;
  --gap-loose: 48px;

  /* Containers */
  --container-main: 1200px;
  --container-xl: 960px;
  --container-l: 768px;
  --container-s: 480px;
  --container-xs: 384px;

  /* Border Radius */
  --radius-small: 5px;
  --radius-default: 10px;

  /* Buttons */
  --button-height: 48px;
  --button-padding-x: 54px;

  /* Globals */
  --navbar-height: 52px;
  --wide-section-padding: 9px;

  /* Effects */
  --blur-intense: 64px;
  --blur-subtle: 12px;
  --shadow-default: 0 4px 48px rgba(0, 0, 0, 0.25);
}
```

---

## Notes

1. **Font Discrepancy**: Figma/Framer use "Geist", Webflow uses "Aspekta". Recommend using Aspekta as primary with Geist fallback.

2. **Display vs H1**: Figma defines "Display" (64px) separately from "h1" (51px). The Webflow H1 uses Display size.

3. **Spacing System**: Consistent 6px base unit across all sources.

4. **Container Widths**: Match the extracted Webflow values exactly.

5. **Wide Section Padding**: Confirmed at 9px (matches Webflow extraction).
