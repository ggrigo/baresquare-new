# SEO Technical Foundations - Technical Plan

## Technology Stack

| Aspect | Choice |
|--------|--------|
| Framework | Astro 5.x |
| Sitemap | @astrojs/sitemap |
| Structured Data | JSON-LD (inline script) |
| OG Images | Static assets in /public |
| Deployment | Netlify |

---

## Architecture Decision

### Approach: Layout-Level SEO Components

All SEO tags will be injected through the Layout component, with page-specific overrides passed as props.

```
Page.astro
    ↓ passes SEO props
Layout.astro
    ↓ renders
<head>
  <Canonical url={...} />
  <OpenGraph title={...} description={...} image={...} />
  <JsonLd schema={...} />
</head>
```

**Why**: Centralized control, consistent implementation, easy to audit.

---

## Implementation Plan

### Phase 1: SEO Configuration

#### 1.1 Create SEO Config File

**File**: `src/config/seo.config.ts`

```typescript
export const seoConfig = {
  siteUrl: 'https://baresquare.com',
  siteName: 'Baresquare',
  defaultTitle: 'Baresquare - Agents That Work for You',
  defaultDescription: 'AI that monitors your campaigns, inventory, pricing, and competitors—then takes action automatically.',
  defaultOgImage: '/images/og/default.jpg',
  twitterHandle: '@baresquare',
  organization: {
    name: 'Baresquare',
    foundingDate: '2018',
    logo: '/images/baresquare-logo.svg',
  },
};
```

---

### Phase 2: Canonical URLs

#### 2.1 Update Layout Props

**File**: `src/layouts/Layout.astro`

Add to Props interface:
```typescript
interface Props {
  title?: string;
  description?: string;
  canonicalUrl?: string;  // NEW
}
```

#### 2.2 Add Canonical Tag

In Layout.astro `<head>`:
```astro
---
import { seoConfig } from '../config/seo.config';

const canonicalUrl = Astro.props.canonicalUrl || new URL(Astro.url.pathname, seoConfig.siteUrl).href;
---

<link rel="canonical" href={canonicalUrl} />
```

---

### Phase 3: Open Graph Tags

#### 3.1 Update Layout Props

```typescript
interface Props {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;       // NEW
  ogType?: string;        // NEW: 'website' | 'article'
}
```

#### 3.2 Add OG Tags to Layout

```astro
---
const {
  title = seoConfig.defaultTitle,
  description = seoConfig.defaultDescription,
  ogImage = seoConfig.defaultOgImage,
  ogType = 'website',
} = Astro.props;

const ogImageUrl = ogImage.startsWith('http')
  ? ogImage
  : new URL(ogImage, seoConfig.siteUrl).href;
const pageUrl = new URL(Astro.url.pathname, seoConfig.siteUrl).href;
---

<!-- Open Graph -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={ogImageUrl} />
<meta property="og:url" content={pageUrl} />
<meta property="og:type" content={ogType} />
<meta property="og:site_name" content={seoConfig.siteName} />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content={seoConfig.twitterHandle} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImageUrl} />
```

#### 3.3 Create Default OG Image

**File**: `public/images/og/default.jpg`
- Size: 1200x630px
- Content: Baresquare logo + tagline on dark background

---

### Phase 4: JSON-LD Structured Data

#### 4.1 Create JsonLd Component

**File**: `src/components/seo/JsonLd.astro`

```astro
---
interface Props {
  schema: Record<string, any>;
}
const { schema } = Astro.props;
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

#### 4.2 Create Schema Generators

**File**: `src/config/schemas.ts`

```typescript
import { seoConfig } from './seo.config';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.organization.name,
    url: seoConfig.siteUrl,
    logo: new URL(seoConfig.organization.logo, seoConfig.siteUrl).href,
    foundingDate: seoConfig.organization.foundingDate,
    description: seoConfig.defaultDescription,
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'UK',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Thessaloniki',
        addressCountry: 'Greece',
      },
    ],
    sameAs: [
      'https://twitter.com/baresquare',
      'https://linkedin.com/company/baresquare',
    ],
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: new URL(service.url, seoConfig.siteUrl).href,
    provider: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
    },
  };
}

export function getCaseStudySchema(caseStudy: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.headline,
    description: caseStudy.description,
    url: new URL(caseStudy.url, seoConfig.siteUrl).href,
    datePublished: caseStudy.datePublished || new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: new URL(seoConfig.organization.logo, seoConfig.siteUrl).href,
      },
    },
  };
}
```

#### 4.3 Add to Layout

```astro
---
import JsonLd from '../components/seo/JsonLd.astro';

const { jsonLd } = Astro.props;
---

{jsonLd && <JsonLd schema={jsonLd} />}
```

#### 4.4 Update Each Page

**Homepage**: Pass Organization schema
**Service pages**: Pass Service schema
**Case study pages**: Pass Article schema

---

### Phase 5: XML Sitemap

#### 5.1 Install Integration

```bash
npm install @astrojs/sitemap
```

#### 5.2 Configure Astro

**File**: `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://baresquare.com',
  integrations: [sitemap()],
});
```

#### 5.3 Verify Output

After build, check `dist/sitemap-index.xml` and `dist/sitemap-0.xml`.

---

### Phase 6: Pre-Migration Baseline

#### 6.1 Capture Current Metrics

Create `seo-migration/baseline-report.md`:

```markdown
# SEO Migration Baseline Report
Generated: [DATE]

## Current Indexed Pages
- Source: Google Search Console
- Count: [NUMBER]

## Top 20 Organic Pages
| URL | Sessions (30d) | Impressions | Clicks |
|-----|----------------|-------------|--------|
| ... | ... | ... | ... |

## Top 20 Keywords
| Keyword | Position | Impressions | Clicks |
|---------|----------|-------------|--------|
| ... | ... | ... | ... |

## Core Web Vitals
| Metric | Mobile | Desktop |
|--------|--------|---------|
| LCP | ... | ... |
| FID | ... | ... |
| CLS | ... | ... |

## Backlinks
- Total: [NUMBER]
- Referring Domains: [NUMBER]
- Top 10 referring domains: ...
```

---

## File Creation Order

```
1. src/config/seo.config.ts
2. src/config/schemas.ts
3. src/components/seo/JsonLd.astro
4. public/images/og/default.jpg (placeholder)
5. src/layouts/Layout.astro (update)
6. src/pages/index.astro (add jsonLd prop)
7. src/pages/contact.astro (add SEO props)
8. src/pages/services/data-operations.astro (add jsonLd prop)
9. src/pages/work/sony.astro (add jsonLd prop)
10. astro.config.mjs (add sitemap)
11. seo-migration/baseline-report.md
```

---

## Validation Commands

```bash
# Build and check sitemap
npm run build
cat dist/sitemap-index.xml

# Test JSON-LD
# Paste page URL into: https://search.google.com/test/rich-results

# Test OG tags
# Paste page URL into: https://developers.facebook.com/tools/debug/
```

---

## Success Metrics

- [ ] All pages have `<link rel="canonical">` tag
- [ ] All pages have complete OG meta tags
- [ ] Homepage JSON-LD passes Rich Results Test
- [ ] Sitemap generates at build time
- [ ] Sitemap contains exactly 4 URLs (current pages)
- [ ] Baseline report documented

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Wrong canonical URL on staging | Use environment variable for site URL |
| OG image not loading | Test with Facebook Debugger before launch |
| Invalid JSON-LD | Validate with Google Rich Results Test |
| Sitemap includes draft pages | Only published pages in /pages directory |
