# Sitemap Pages - Feature Specification

## Overview

**Feature**: Create 9 new pages to complete the Baresquare website sitemap
**Purpose**: Enable SEO redirects, complete navigation, and provide content destinations

---

## Pages to Create

### Tier 1: Company Pages (2)

| Page | Path | Purpose | SEO Redirects From |
|------|------|---------|-------------------|
| About | `/about` | Company story, "Not new. Fresh." narrative | `/career`, `/old-home` |
| Contact | `/contact` | Contact form, office locations | `/contact`, `/demo` |

### Tier 2: Service Pages (4)

| Page | Path | Purpose | SEO Redirects From |
|------|------|---------|-------------------|
| Revenue Performance | `/services/revenue-performance` | Pillar 1 deep-dive | `/solutions/revenue-leaders`, `/solutions/performance-marketers` |
| AI Search & Marketing | `/services/ai-search-marketing` | Pillar 2 deep-dive | `/blog/*seo*`, `/blog/*crawler*` |
| Data & Operations | `/services/data-operations` | Pillar 3 deep-dive | `/blog/*ga4*`, `/blog/*analytics*`, `/solutions/analytics-leaders` |
| Learning & Development | `/services/learning-development` | Pillar 4 deep-dive | `/solutions/product-owners` |

### Tier 3: Case Study Pages (3)

| Page | Path | Purpose | SEO Redirects From |
|------|------|---------|-------------------|
| VOGUE | `/work/vogue` | Revenue case study | - |
| SONY | `/work/sony` | Efficiency case study | `/customer-stories/*` |
| adidas | `/work/adidas` | Scale case study | - |

---

## Design System Compliance

All pages must use existing components and tokens:

### Layout Structure
```
<Layout>
  <Navbar />
  <main>
    <!-- Page-specific content -->
  </main>
  <Footer />
</Layout>
```

### Available Components
- `TwoColumnGrid` - Text + image layouts
- `ProcessSteps` - Numbered step sections
- `CTASection` - Call-to-action blocks
- `NoiseOverlay` / `GridOverlay` - Texture overlays

### Design Tokens
- Colors: `--bg-primary`, `--bg-dark`, `--accent-*`
- Typography: Geist, Geist Mono, Newsreader
- Spacing: `--space-1` through `--space-9`
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`

---

## Page Templates

### Template A: Service Page
```
┌─────────────────────────────────────┐
│ Hero: Service name + tagline        │
├─────────────────────────────────────┤
│ Problem: What pain point we solve   │
├─────────────────────────────────────┤
│ Solution: How we solve it           │
├─────────────────────────────────────┤
│ Features: 3-4 key capabilities      │
├─────────────────────────────────────┤
│ CTA: Contact us                     │
└─────────────────────────────────────┘
```

### Template B: Case Study Page
```
┌─────────────────────────────────────┐
│ Hero: Brand logo + headline metric  │
├─────────────────────────────────────┤
│ Challenge: What they faced          │
├─────────────────────────────────────┤
│ Solution: What we built             │
├─────────────────────────────────────┤
│ Results: Key metrics                │
├─────────────────────────────────────┤
│ Quote: Client testimonial           │
├─────────────────────────────────────┤
│ CTA: Contact us                     │
└─────────────────────────────────────┘
```

### Template C: Company Page
```
┌─────────────────────────────────────┐
│ Hero: Page title                    │
├─────────────────────────────────────┤
│ Content: TwoColumnGrid sections     │
├─────────────────────────────────────┤
│ CTA: Contact us                     │
└─────────────────────────────────────┘
```

---

## Content Requirements

### /about
- **Headline**: "Not new. Fresh."
- **Content**: Expand on homepage About section
- **Include**: Offices (London, Thessaloniki), founding year (2018), team philosophy

### /contact
- **Headline**: "Let's find out."
- **Form fields**: Name, Email, Company, Message
- **Include**: Office addresses, social links

### /services/* (all 4)
- **Headline**: Service name from homepage
- **Content**: Expand 1-sentence description to full page
- **Include**: Use cases, features, relevant case study link

### /work/* (all 3)
- **Headline**: Metric from homepage (e.g., "+4% incremental revenue")
- **Content**: Challenge → Solution → Results narrative
- **Include**: Client quote, brand context

---

## File Structure

```
src/
├── pages/
│   ├── about.astro
│   ├── contact.astro
│   ├── services/
│   │   ├── revenue-performance.astro
│   │   ├── ai-search-marketing.astro
│   │   ├── data-operations.astro
│   │   └── learning-development.astro
│   └── work/
│       ├── vogue.astro
│       ├── sony.astro
│       └── adidas.astro
└── content/
    ├── about.ts
    ├── contact.ts
    ├── services/
    │   ├── revenue-performance.ts
    │   ├── ai-search-marketing.ts
    │   ├── data-operations.ts
    │   └── learning-development.ts
    └── work/
        ├── vogue.ts
        ├── sony.ts
        └── adidas.ts
```

---

## Implementation Order

### Phase 1: High Traffic (receives most redirects)
1. `/contact` - All CTAs link here
2. `/services/data-operations` - Receives GA4/analytics redirects
3. `/work/sony` - Receives customer-stories redirects

### Phase 2: Navigation Complete
4. `/about` - Footer link
5. `/services/revenue-performance` - Footer link
6. `/services/ai-search-marketing` - Receives SEO blog redirects

### Phase 3: Full Sitemap
7. `/services/learning-development`
8. `/work/vogue`
9. `/work/adidas`

---

## Route Configuration

Update `src/config/site.config.ts`:

```typescript
routes: {
  '/about': { available: true },
  '/contact': { available: true },
  '/services/revenue-performance': { available: true },
  '/services/ai-search-marketing': { available: true },
  '/services/data-operations': { available: true },
  '/services/learning-development': { available: true },
  '/work/vogue': { available: true },
  '/work/sony': { available: true },
  '/work/adidas': { available: true },
}
```

---

## SEO Requirements

Each page must have:
- Unique `<title>` tag
- Meta description (150-160 chars)
- Open Graph tags (title, description, image)
- Canonical URL
- JSON-LD structured data (Organization or Article)

---

## Acceptance Criteria

- [ ] All 9 pages created and accessible
- [ ] Design system compliance (tokens, components)
- [ ] Navigation links work (header/footer)
- [ ] SEO meta tags present
- [ ] Routes updated in site.config.ts
- [ ] Redirects configured in Netlify
- [ ] Mobile responsive

---

## Out of Scope (v1)

- Blog section
- Team member profiles
- Pricing page
- Legal pages (privacy, terms)
- Multi-language support
