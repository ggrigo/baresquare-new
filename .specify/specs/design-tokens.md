# Design Tokens - Scion Landing

Extracted from: https://scion-template.webflow.io/

---

## Breakpoints (Media Queries)

| Name | Query | Target |
|------|-------|--------|
| Desktop | `min-width: 992px` | Desktop and up |
| Tablet Landscape | `max-width: 991px` and `min-width: 768px` | Tablet landscape |
| Tablet Portrait | `max-width: 767px` and `min-width: 480px` | Tablet portrait |
| Mobile | `max-width: 479px` | Mobile devices |

---

## Colors

### Backgrounds
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `rgb(30, 30, 30)` / `#1e1e1e` | Main page background |
| `--bg-dark` | `rgb(18, 18, 18)` / `#121212` | Darker sections |
| `--bg-black` | `rgb(0, 0, 0)` / `#000000` | Pure black elements |
| `--bg-card` | `rgba(255, 255, 255, 0.06)` | Card/panel backgrounds |
| `--bg-overlay` | `rgba(0, 0, 0, 0.8)` | Modal/dropdown overlays |
| `--bg-accent` | `rgb(108, 88, 141)` / `#6c588d` | Hero gradient accent |
| `--bg-highlight` | `rgb(255, 222, 222)` | Light accent backgrounds |
| `--bg-button-hover` | `rgba(255, 255, 255, 0.4)` | Button hover state |

### Text Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `rgb(255, 255, 255)` / `#ffffff` | Primary text |
| `--text-muted` | `rgba(255, 255, 255, 0.7)` | Secondary/muted text |
| `--text-subtle` | `rgba(255, 255, 255, 0.5)` | Subtle text |
| `--text-dark` | `rgb(34, 34, 34)` / `#222222` | Text on light backgrounds |
| `--text-accent-orange` | `rgb(224, 131, 92)` / `#e0835c` | Orange accent text |
| `--text-accent-blue` | `rgb(56, 152, 236)` / `#3898ec` | Blue accent text |
| `--text-accent-green` | `rgb(162, 183, 159)` / `#a2b79f` | Green accent text |
| `--text-accent-gold` | `rgb(216, 163, 115)` / `#d8a373` | Gold accent text |
| `--text-accent-purple` | `rgb(108, 88, 141)` / `#6c588d` | Purple accent text |

### Border Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--border-light` | `rgba(255, 255, 255, 0.1)` | Subtle borders |
| `--border-white` | `rgb(255, 255, 255)` | White borders |

---

## Typography

### Font Families
| Token | Value | Usage |
|-------|-------|-------|
| `--font-primary` | `Aspekta, Arial, sans-serif` | Headings, body text, UI |
| `--font-serif` | `Newsreader, "Times New Roman", sans-serif` | Italic accents in headings |
| `--font-decorative` | `Blobz, Arial, sans-serif` | Decorative elements |

### Font Weights
| Token | Value |
|-------|-------|
| `--font-weight-regular` | `400` |
| `--font-weight-bold` | `700` |

### Typography Scale (Desktop - 992px+)

| Element | Font Size | Line Height | Weight | Letter Spacing |
|---------|-----------|-------------|--------|----------------|
| H1 | `64px` | `70.4px` (1.1) | 400 | normal |
| H2 | TBD | TBD | TBD | TBD |
| H3 | TBD | TBD | TBD | TBD |
| Body | `16px` | `22.4px` (1.4) | 400 | normal |
| Nav Link | `16px` | - | 400 | normal |
| Dropdown Link | `20px` | - | 400 | normal |
| Label | `16px` | - | 400 | normal |

### H1 Styling Note
The H1 "Pulling the future **forward**." uses:
- `Aspekta` for most text
- `Newsreader` (italic) for the word "forward"
- This serif-italic treatment is a key design signature

---

## Spacing

### Section Padding
| Context | Value |
|---------|-------|
| Wide section outer | `0px 9px` |
| Main container inside wide | `48px 24px` |
| Standard section | `96px 0px` (vertical rhythm) |

### Common Gaps
| Token | Value | Usage |
|-------|-------|-------|
| `--gap-xs` | `2px` | Tight spacing |
| `--gap-sm` | `6px` | Small spacing |
| `--gap-md` | `12px` | Medium spacing |
| `--gap-base` | `18px` | Base unit |
| `--gap-lg` | `24px` | Large spacing |
| `--gap-xl` | `36px` | Extra large |
| `--gap-2xl` | `48px` | 2x extra large |
| `--gap-3xl` | `72px` | 3x extra large |
| `--gap-4xl` | `96px` | 4x extra large |
| `--gap-5xl` | `168px` | Maximum spacing |

### Common Padding Values
- `12px 18px` - Button padding
- `16px 18px` - Card padding
- `18px` - Square padding
- `24px` - Standard padding
- `48px` - Large section padding
- `100px 0px` - Hero vertical padding

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-xs` | `2px` | Subtle rounding |
| `--radius-sm` | `5px` | Small elements |
| `--radius-md` | `9px` | Cards, buttons |
| `--radius-lg` | `10px` | Larger cards |
| `--radius-full` | `200px` | Pill shapes |
| `--radius-circle` | `50%` | Circles |

### Special Radius
- `0px 0px 5px 5px` - Bottom only
- `10px 10px 10px 0px` - Notch top-left
- `10px 0px 10px 10px` - Notch top-right

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `rgba(0, 0, 0, 0.2) 0px 6px 24px` | Subtle lift |
| `--shadow-md` | `rgba(0, 0, 0, 0.25) 0px 5px 25px` | Medium elevation |
| `--shadow-lg` | `rgba(0, 0, 0, 0.25) 0px 24px 24px` | Large cards |
| `--shadow-xl` | `rgba(0, 0, 0, 0.25) 0px 48px 48px` | Hero elements |

---

## CSS Custom Properties Template

```css
:root {
  /* Colors - Backgrounds */
  --bg-primary: rgb(30, 30, 30);
  --bg-dark: rgb(18, 18, 18);
  --bg-black: rgb(0, 0, 0);
  --bg-card: rgba(255, 255, 255, 0.06);
  --bg-overlay: rgba(0, 0, 0, 0.8);
  --bg-accent: rgb(108, 88, 141);

  /* Colors - Text */
  --text-primary: rgb(255, 255, 255);
  --text-muted: rgba(255, 255, 255, 0.7);
  --text-subtle: rgba(255, 255, 255, 0.5);
  --text-dark: rgb(34, 34, 34);

  /* Colors - Accents */
  --accent-orange: rgb(224, 131, 92);
  --accent-blue: rgb(56, 152, 236);
  --accent-green: rgb(162, 183, 159);
  --accent-gold: rgb(216, 163, 115);
  --accent-purple: rgb(108, 88, 141);

  /* Typography */
  --font-primary: 'Aspekta', Arial, sans-serif;
  --font-serif: 'Newsreader', 'Times New Roman', serif;

  /* Font Sizes */
  --text-base: 16px;
  --text-lg: 20px;
  --text-xl: 24px;
  --text-2xl: 32px;
  --text-3xl: 48px;
  --text-4xl: 64px;

  /* Spacing */
  --space-1: 6px;
  --space-2: 12px;
  --space-3: 18px;
  --space-4: 24px;
  --space-5: 36px;
  --space-6: 48px;
  --space-7: 72px;
  --space-8: 96px;

  /* Border Radius */
  --radius-sm: 5px;
  --radius-md: 9px;
  --radius-lg: 10px;
  --radius-full: 200px;

  /* Shadows */
  --shadow-sm: rgba(0, 0, 0, 0.2) 0px 6px 24px;
  --shadow-md: rgba(0, 0, 0, 0.25) 0px 24px 24px;
  --shadow-lg: rgba(0, 0, 0, 0.25) 0px 48px 48px;
}
```

---

## Notes

- Container max-width appears to be `1200px` with `24px` side padding
- Base unit appears to be `6px` (all spacing divisible by 6)
- Section vertical rhythm is `96px` (16 base units)
- Dark theme uses very subtle transparency for depth
