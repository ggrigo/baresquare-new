# Sitemap Pages - Task Breakdown

## Phase 1: High Traffic Pages

### Task 1.1: Add Content Types
- [ ] Add `ServicePageContent` type to `src/config/types.ts`
- [ ] Add `CaseStudyContent` type to `src/config/types.ts`
- [ ] Add `ContactPageContent` type to `src/config/types.ts`

### Task 1.2: Create Contact Page
- [ ] Create `src/components/ContactForm.astro`
- [ ] Create `src/content/contact.ts`
- [ ] Create `src/pages/contact.astro`
- [ ] Update route in `site.config.ts`: `/contact` → available
- [ ] Test Netlify form submission

### Task 1.3: Create Data & Operations Service Page
- [ ] Create `src/content/services/` directory
- [ ] Create `src/content/services/data-operations.ts`
- [ ] Create `src/pages/services/` directory
- [ ] Create `src/pages/services/data-operations.astro`
- [ ] Update route in `site.config.ts`

### Task 1.4: Create SONY Case Study
- [ ] Create `src/content/work/` directory
- [ ] Create `src/content/work/sony.ts`
- [ ] Create `src/pages/work/` directory
- [ ] Create `src/pages/work/sony.astro`
- [ ] Update route in `site.config.ts`

### Task 1.5: Configure Phase 1 Redirects
- [ ] Add redirects to `public/_redirects`
- [ ] Test redirect: `/demo` → `/contact`
- [ ] Test redirect: `/customer-stories/*` → `/work/sony`
- [ ] Test redirect: `/blog/*ga4*` → `/services/data-operations`

---

## Phase 2: Navigation Complete

### Task 2.1: Create About Page
- [ ] Create `src/content/about.ts`
- [ ] Create `src/pages/about.astro`
- [ ] Update route in `site.config.ts`

### Task 2.2: Create Revenue Performance Service Page
- [ ] Create `src/content/services/revenue-performance.ts`
- [ ] Create `src/pages/services/revenue-performance.astro`
- [ ] Update route in `site.config.ts`

### Task 2.3: Create AI Search & Marketing Service Page
- [ ] Create `src/content/services/ai-search-marketing.ts`
- [ ] Create `src/pages/services/ai-search-marketing.astro`
- [ ] Update route in `site.config.ts`

### Task 2.4: Configure Phase 2 Redirects
- [ ] Add redirects for `/solutions/*` pages
- [ ] Add redirects for SEO blog posts

---

## Phase 3: Full Sitemap

### Task 3.1: Create Learning & Development Service Page
- [ ] Create `src/content/services/learning-development.ts`
- [ ] Create `src/pages/services/learning-development.astro`
- [ ] Update route in `site.config.ts`

### Task 3.2: Create VOGUE Case Study
- [ ] Create `src/content/work/vogue.ts`
- [ ] Create `src/pages/work/vogue.astro`
- [ ] Update route in `site.config.ts`

### Task 3.3: Create adidas Case Study
- [ ] Create `src/content/work/adidas.ts`
- [ ] Create `src/pages/work/adidas.astro`
- [ ] Update route in `site.config.ts`

### Task 3.4: Final Redirect Configuration
- [ ] Complete all redirect mappings
- [ ] Test all 96 old URLs redirect correctly
- [ ] Verify no 404s in Google Search Console

---

## Verification Tasks

### Task V.1: SEO Verification
- [ ] All pages have unique `<title>`
- [ ] All pages have meta descriptions
- [ ] All pages have OG tags
- [ ] Sitemap.xml updated

### Task V.2: Navigation Verification
- [ ] Footer links all work
- [ ] No "Coming Soon" modals on new pages
- [ ] Mobile navigation works

### Task V.3: Performance Verification
- [ ] Lighthouse score 90+ on all pages
- [ ] No CLS issues
- [ ] Images optimized

---

## Estimated Effort

| Phase | Tasks | Complexity |
|-------|-------|------------|
| Phase 1 | 5 | Medium |
| Phase 2 | 4 | Medium |
| Phase 3 | 4 | Low |
| Verification | 3 | Low |
| **Total** | **16** | |

---

## Dependencies

```
types.ts ─────► content/*.ts ─────► pages/*.astro
                     │
site.config.ts ◄─────┘
                     │
                     ▼
              public/_redirects
```

---

## Ready to Implement

Start with: **Task 1.1: Add Content Types**
