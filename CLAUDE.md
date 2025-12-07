# Baresquare Website

Production website for Baresquare built with Astro. Uses a config-driven architecture where content and section visibility are managed through TypeScript configuration files.

## Architecture Overview

This project transforms the Scion template into the Baresquare website using a **build-time static** approach:

- **Config is resolved at compile time** - no runtime JavaScript for section toggling
- **Disabled sections produce NO HTML** - not hidden, completely excluded
- **"Coming Soon" links are determined at build time** - rendered as buttons, not `<a>` tags

## Project Structure

```
src/
  config/
    site.config.ts      # Section visibility & route availability
    types.ts            # TypeScript interfaces for all content
  content/
    home/
      index.ts          # Re-exports all homepage content
      hero.ts           # Hero section content
      features.ts       # FeatureSlider content
      about.ts          # About TwoColumnGrid content
      approach.ts       # Approach TwoColumnGrid content
      stats.ts          # Stats content
      services.ts       # Services content
      process.ts        # ProcessSteps content
      testimonial.ts    # CustomerQuote content
      blog.ts           # BlogGrid content
      cta.ts            # CTA sections content
  components/
    global/
      SmartLink.astro        # Link wrapper with Coming Soon handling
      ComingSoonModal.astro  # Modal for unavailable pages
    sections/           # Page section components
    ui/                 # UI components (Button, ArrowLink, etc.)
    layout/             # Navbar, Footer
    base/               # Base components (Container, overlays)
  pages/
    index.astro         # Homepage (uses config + content)
```

## How to Manage Content

### Enable/Disable Sections

Edit `src/config/site.config.ts`:

```typescript
sections: {
  hero: true,           // Visible
  featureSlider: true,
  about: true,
  approach: true,
  stats: true,
  services: true,
  process: true,
  testimonial: true,
  ctaMid: true,
  blog: false,          // Hidden (not built into HTML)
  ctaFinal: true,
}
```

### Edit Section Content

Each section has its own content file in `src/content/home/`:

```typescript
// src/content/home/hero.ts
export const heroContent: HeroContent = {
  badge: 'Meet Tywin',
  headline: 'Agents that work',
  accentWord: 'for you.',
  videoId: '956012005',
  // ...
};
```

### Configure "Coming Soon" Routes

Routes without pages should be marked as unavailable:

```typescript
// src/config/site.config.ts
routes: {
  '/about': { available: false, message: 'About page coming soon!' },
  '/services': { available: false },
  '/services/*': { available: false },  // Wildcard for all /services/* paths
  '/contact': { available: true },       // This page exists
}
```

When a link points to an unavailable route:
1. **At build time**: SmartLink renders a `<button>` instead of `<a>`
2. **At runtime**: Clicking shows the ComingSoonModal with the configured message

## Key Components

### SmartLink

Wraps all internal links. At build time, it checks route availability:
- Available route: renders `<a href="...">`
- Unavailable route: renders `<button data-coming-soon="true">`

### ComingSoonModal

Global modal included once in the Layout. Listens for clicks on `[data-coming-soon]` buttons and shows the appropriate message.

## Content Guidelines

### Placeholder Pattern

Per project conventions, use `{sample value}` for unfinished content instead of mock data:

```typescript
// Good
videoId: '{sample video id}',

// Bad - don't hardcode mock values
videoId: '12345678',
```

## Development

```bash
npm install
npm run dev     # Start dev server
npm run build   # Build for production
npm run preview # Preview production build
```

## Build Output

After `npm run build`:
- `dist/` contains pure static HTML
- Disabled sections are NOT in the HTML
- Unavailable routes render as `<button>` with `data-coming-soon` attribute

## Figma Source

Original template design: [Scion Figma File](https://www.figma.com/design/2vjP04wXefh7swP9xHJ6Rc/Scion)

- Template creator: Medium Rare (Craig Garner)
- Style: Dark theme, tech/consulting aesthetic

## Quick Reference

| Task | File |
|------|------|
| Enable/disable sections | `src/config/site.config.ts` |
| Edit hero content | `src/content/home/hero.ts` |
| Edit services | `src/content/home/services.ts` |
| Mark route as "Coming Soon" | `src/config/site.config.ts` routes |
| Add new content type | `src/config/types.ts` |
| Modify Coming Soon modal | `src/components/global/ComingSoonModal.astro` |

## Visual Implementation Verification

When making design changes:

1. **Verify CSS is applied** - Astro scoped CSS does NOT cross slot boundaries
2. **Element-by-element comparison** - Check position, z-index, opacity for layered elements
3. **Use verification tools** - Run scripts in `/.specify/` for verification

### Quick CSS Debug

```javascript
// Run in browser console:
const el = document.querySelector('.your-selector');
const s = window.getComputedStyle(el);
console.log({ position: s.position, zIndex: s.zIndex, opacity: s.opacity });
```
