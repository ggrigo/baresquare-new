# Sitemap Pages - Technical Plan

## Technology Stack

| Aspect | Choice |
|--------|--------|
| Framework | Astro 5.x |
| Styling | Vanilla CSS + Custom Properties |
| Content | TypeScript content files |
| Config | site.config.ts |
| Deployment | Netlify |

---

## Implementation Plan

### Phase 1: High Traffic Pages (Priority)

These pages receive the most SEO redirects and are linked from CTAs.

#### 1.1 Contact Page (`/contact`)

**Files to create:**
- `src/pages/contact.astro`
- `src/content/contact.ts`

**Components needed:**
- Hero section (simple headline)
- Contact form (new component)
- Office locations (from site.config.ts)
- Social links

**Form approach:**
- Netlify Forms (built-in, no backend needed)
- `<form name="contact" method="POST" data-netlify="true">`

#### 1.2 Data & Operations Service (`/services/data-operations`)

**Files to create:**
- `src/pages/services/data-operations.astro`
- `src/content/services/data-operations.ts`

**Template: Service Page**
- Hero with service name
- Problem statement
- Solution overview
- Key features (3-4 items)
- CTA section

#### 1.3 SONY Case Study (`/work/sony`)

**Files to create:**
- `src/pages/work/sony.astro`
- `src/content/work/sony.ts`

**Template: Case Study Page**
- Hero with metric (+40% cost reduction)
- Challenge section
- Solution section
- Results metrics
- Client quote (Stephanie White)
- CTA

---

### Phase 2: Navigation Complete

#### 2.1 About Page (`/about`)

**Content expansion from homepage:**
- "Not new. Fresh." headline
- Production AI since 2018 narrative
- Office locations
- Team philosophy

#### 2.2 Revenue Performance Service (`/services/revenue-performance`)

**Receives redirects from:**
- `/solutions/revenue-leaders`
- `/solutions/performance-marketers`

#### 2.3 AI Search & Marketing Service (`/services/ai-search-marketing`)

**Receives redirects from:**
- `/blog/*seo*`
- `/blog/*crawler*`

---

### Phase 3: Full Sitemap

#### 3.1 Learning & Development (`/services/learning-development`)
#### 3.2 VOGUE Case Study (`/work/vogue`)
#### 3.3 adidas Case Study (`/work/adidas`)

---

## Reusable Components to Create

### 1. ContactForm.astro
```astro
---
interface Props {
  formName?: string;
}
const { formName = 'contact' } = Astro.props;
---
<form name={formName} method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value={formName} />
  <!-- fields -->
</form>
```

### 2. ServiceHero.astro
```astro
---
interface Props {
  title: string;
  description: string;
  badge?: string;
}
---
```

### 3. CaseStudyHero.astro
```astro
---
interface Props {
  brand: string;
  metric: string;
  metricLabel: string;
  image?: string;
}
---
```

### 4. MetricCard.astro
```astro
---
interface Props {
  value: string;
  label: string;
}
---
```

---

## Content Type Definitions

Add to `src/config/types.ts`:

```typescript
export interface ServicePageContent {
  title: string;
  description: string;
  badge?: string;
  problem: {
    headline: string;
    description: string;
  };
  solution: {
    headline: string;
    description: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  cta: {
    headline: string;
    buttonText: string;
    buttonHref: string;
  };
}

export interface CaseStudyContent {
  brand: string;
  brandLogo?: string;
  metric: string;
  metricLabel: string;
  challenge: {
    headline: string;
    description: string;
  };
  solution: {
    headline: string;
    description: string;
  };
  results: Array<{
    value: string;
    label: string;
  }>;
  quote?: {
    text: string;
    author: string;
    title: string;
  };
  cta: {
    headline: string;
    buttonText: string;
    buttonHref: string;
  };
}

export interface ContactPageContent {
  headline: string;
  description: string;
  formFields: Array<{
    name: string;
    label: string;
    type: 'text' | 'email' | 'textarea';
    required: boolean;
  }>;
}
```

---

## Route Updates

Update `site.config.ts` routes section:

```typescript
// Phase 1
'/contact': { available: true },
'/services/data-operations': { available: true },
'/work/sony': { available: true },

// Phase 2
'/about': { available: true },
'/services/revenue-performance': { available: true },
'/services/ai-search-marketing': { available: true },

// Phase 3
'/services/learning-development': { available: true },
'/work/vogue': { available: true },
'/work/adidas': { available: true },
```

---

## Netlify Redirects

Add to `netlify.toml` or `public/_redirects`:

```
# Phase 1 redirects
/demo /contact 301
/customer-stories/* /work/sony 301
/blog/*ga4* /services/data-operations 301
/blog/*analytics* /services/data-operations 301
/solutions/analytics-leaders /services/data-operations 301
```

---

## File Creation Order

```
1. src/config/types.ts (add new types)
2. src/components/ContactForm.astro
3. src/content/contact.ts
4. src/pages/contact.astro
5. src/content/services/data-operations.ts
6. src/pages/services/data-operations.astro
7. src/content/work/sony.ts
8. src/pages/work/sony.astro
9. src/config/site.config.ts (update routes)
10. public/_redirects (add SEO redirects)
```

---

## Success Metrics

- [ ] All 3 Phase 1 pages live
- [ ] Contact form submits to Netlify
- [ ] SEO redirects working
- [ ] Navigation links resolve (no Coming Soon modal)
- [ ] Mobile responsive
- [ ] Lighthouse score 90+
