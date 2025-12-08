# SEO Technical Foundations - Feature Specification

## Overview

**Feature**: Implement missing SEO technical requirements for website migration
**Purpose**: Preserve search rankings and link equity during migration from baresquare.com
**Risk Level**: HIGH - Missing these can cause 50%+ traffic loss

---

## Background

### Why This Matters

From industry research:
> "Even minor mistakes during a site migration process can slash organic traffic by fifty percent or more, with recovery taking months or even years."
> — [VELOX SEO Migration Guide](https://www.veloxmedia.com/blog/seo-migration-2024-the-complete-guide)

### Current State

| Item | Status | Risk |
|------|--------|------|
| 301 Redirects | ✅ 94 configured | - |
| Content Strategy | ✅ Cross-references | - |
| Canonical URLs | ❌ Missing | HIGH |
| Open Graph Tags | ❌ Missing | MEDIUM |
| JSON-LD Structured Data | ❌ Missing | MEDIUM |
| XML Sitemap | ❌ Not updated | HIGH |
| Pre-migration Baseline | ❌ Not captured | HIGH |

---

## Requirements

### 1. Canonical URLs

**What**: Self-referencing canonical tag on every page
**Why**: Prevents duplicate content issues, tells Google which URL is authoritative

**Implementation**:
```html
<link rel="canonical" href="https://baresquare.com/contact" />
```

**Pages requiring canonical**:
- `/` (homepage)
- `/contact`
- `/services/data-operations`
- `/work/sony`
- All future pages

**Rules**:
- Must be absolute URL (include domain)
- Must be self-referencing (point to current page)
- Must use production domain (baresquare.com), not Netlify preview URL

---

### 2. Open Graph Tags

**What**: Meta tags for social sharing (Facebook, LinkedIn, Twitter)
**Why**: Controls how pages appear when shared; improves CTR from social

**Required tags per page**:
```html
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description (150-160 chars)" />
<meta property="og:image" content="https://baresquare.com/images/og/page-name.jpg" />
<meta property="og:url" content="https://baresquare.com/page-path" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Baresquare" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@baresquare" />
```

**OG Image Requirements**:
- Size: 1200x630px (Facebook/LinkedIn optimal)
- Format: JPG or PNG
- Must be absolute URL
- Default fallback image for pages without custom OG image

---

### 3. JSON-LD Structured Data

**What**: Machine-readable data that helps Google understand page content
**Why**: Enables rich results, improves SERP visibility

**Required schemas by page type**:

#### Homepage (`/`)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Baresquare",
  "url": "https://baresquare.com",
  "logo": "https://baresquare.com/images/baresquare-logo.svg",
  "description": "AI that monitors your campaigns, inventory, pricing, and competitors—then takes action automatically.",
  "foundingDate": "2018",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Thessaloniki",
      "addressCountry": "Greece"
    }
  ],
  "sameAs": [
    "https://twitter.com/baresquare",
    "https://linkedin.com/company/baresquare"
  ]
}
```

#### Service Pages (`/services/*`)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data & Operations",
  "provider": {
    "@type": "Organization",
    "name": "Baresquare"
  },
  "description": "Automation that eliminates manual processes and fixes friction.",
  "url": "https://baresquare.com/services/data-operations"
}
```

#### Case Study Pages (`/work/*`)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SONY Case Study - 85% Faster Issue Resolution",
  "author": {
    "@type": "Organization",
    "name": "Baresquare"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Baresquare",
    "logo": {
      "@type": "ImageObject",
      "url": "https://baresquare.com/images/baresquare-logo.svg"
    }
  },
  "datePublished": "2024-12-08",
  "description": "How SONY achieved 85% faster issue resolution with AI-powered campaign intelligence."
}
```

---

### 4. XML Sitemap Update

**What**: Machine-readable index of all pages for search engines
**Why**: Helps Google discover and crawl all pages efficiently

**Requirements**:
- Auto-generated from Astro pages
- Only include indexable pages (200 status, has canonical)
- Exclude: redirected URLs, non-canonical pages, noindex pages
- Submit to Google Search Console after launch

**Astro Integration**:
```bash
npm install @astrojs/sitemap
```

**Config**:
```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://baresquare.com',
  integrations: [sitemap()],
});
```

---

### 5. Pre-Migration Baseline Capture

**What**: Snapshot of current SEO performance before migration
**Why**: Enables comparison after migration to detect issues

**Metrics to capture**:
- Current indexed pages (from Google Search Console)
- Top 20 pages by organic traffic
- Top 20 ranking keywords
- Current Core Web Vitals scores
- Backlink count and top referring domains

**Tools**:
- Google Search Console export
- Google Analytics export
- Screaming Frog crawl of current site
- Ahrefs/Semrush backlink report (if available)

**Output**: `seo-migration/baseline-report.md`

---

## File Structure

```
src/
├── layouts/
│   └── Layout.astro          # MODIFY: Add canonical, OG, JSON-LD
├── components/
│   └── seo/
│       ├── Canonical.astro   # NEW: Canonical URL component
│       ├── OpenGraph.astro   # NEW: OG tags component
│       └── JsonLd.astro      # NEW: JSON-LD component
├── config/
│   └── seo.config.ts         # NEW: SEO configuration
└── pages/
    └── *.astro               # MODIFY: Pass SEO props to Layout

public/
└── images/
    └── og/
        ├── default.jpg       # NEW: Default OG image
        ├── contact.jpg       # NEW: Contact page OG image
        └── ...               # NEW: Per-page OG images

seo-migration/
└── baseline-report.md        # NEW: Pre-migration baseline

astro.config.mjs              # MODIFY: Add sitemap integration
```

---

## Implementation Order

### Phase 1: Foundation (Critical)
1. Create SEO config file with site-wide settings
2. Create Canonical component
3. Update Layout.astro to include canonical

### Phase 2: Social (High)
4. Create OpenGraph component
5. Create default OG image
6. Update Layout.astro to include OG tags

### Phase 3: Rich Results (Medium)
7. Create JsonLd component
8. Add Organization schema to homepage
9. Add Service schema to service pages
10. Add Article schema to case study pages

### Phase 4: Discovery (High)
11. Install @astrojs/sitemap
12. Configure sitemap generation
13. Verify sitemap output

### Phase 5: Baseline (Critical)
14. Export Google Search Console data
15. Export Google Analytics data
16. Document baseline metrics

---

## Validation Checklist

### Per-Page Validation
- [ ] Has self-referencing canonical URL
- [ ] Has complete OG tags (title, description, image, url)
- [ ] Has valid JSON-LD (test with Google Rich Results Test)
- [ ] Appears in generated sitemap.xml

### Site-Wide Validation
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Sitemap contains only indexable URLs
- [ ] No duplicate canonical URLs
- [ ] OG images load correctly (test with Facebook Sharing Debugger)

### Post-Launch Validation
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for key pages
- [ ] Monitor Search Console for crawl errors
- [ ] Compare traffic to baseline after 2 weeks

---

## Acceptance Criteria

- [ ] All 4 current pages have canonical URLs
- [ ] All 4 current pages have OG tags
- [ ] Homepage has Organization JSON-LD
- [ ] Service page has Service JSON-LD
- [ ] Case study has Article JSON-LD
- [ ] Sitemap generates at /sitemap.xml
- [ ] Baseline report documented
- [ ] All schemas pass Google Rich Results Test

---

## Out of Scope (v1)

- Robots.txt customization (use Astro default)
- Hreflang tags (single language site)
- AMP pages
- News sitemap
- Video sitemap

---

## References

- [Google Search Central: Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Open Graph Protocol](https://ogp.me/)
- [Schema.org](https://schema.org/)
- [Astro Sitemap Integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
