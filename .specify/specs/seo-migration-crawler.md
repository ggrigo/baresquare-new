# SEO Migration Crawler - Feature Specification

## Overview

**Feature**: SEO Migration Crawler
**Purpose**: Crawl baresquare.com to discover all existing URLs and content that needs SEO juice migration (redirects, canonical URLs, meta data) to the new Baresquare website.

---

## Problem Statement

The new Baresquare website is replacing the existing baresquare.com. To preserve SEO value:
1. All existing URLs must be identified
2. Redirect mappings must be created
3. Meta data must be captured for migration
4. Content structure must be documented

---

## Deliverables

### 1. URL Inventory (`seo-migration/urls.json`)
```json
{
  "crawled": "2024-12-08T...",
  "domain": "baresquare.com",
  "urls": [
    {
      "url": "https://baresquare.com/about",
      "title": "About Baresquare",
      "metaDescription": "...",
      "h1": "...",
      "status": 200,
      "type": "page",
      "lastModified": "..."
    }
  ]
}
```

### 2. Redirect Map (`seo-migration/redirects.csv`)
```csv
old_url,new_url,status_code,notes
/about,/about,301,direct match
/services/analytics,/services/revenue-performance,301,renamed
/blog/old-post,/,301,no equivalent - redirect to home
```

### 3. Meta Data Report (`seo-migration/meta-report.md`)
- Summary of all page titles
- Meta descriptions
- Open Graph tags
- Structured data (JSON-LD)
- Canonical URLs

### 4. Sitemap Analysis (`seo-migration/sitemap-analysis.md`)
- Existing sitemap structure
- Recommended new sitemap structure
- Priority/frequency recommendations

---

## Technical Approach

### Crawling Strategy
1. Start from sitemap.xml if available
2. Fall back to homepage crawl
3. Follow internal links recursively
4. Respect robots.txt
5. Rate limit requests (1 req/sec)

### Data Extraction Per Page
- URL
- HTTP status code
- `<title>` tag
- `<meta name="description">`
- `<meta name="robots">`
- `<link rel="canonical">`
- `<h1>` content
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- JSON-LD structured data
- Internal links found

### Output Location
All files written to: `/seo-migration/` directory in project root

---

## Implementation

### Option A: Node.js Script (Recommended)
- Use `node-fetch` for HTTP requests
- Use `cheerio` for HTML parsing
- Run as npm script: `npm run seo:crawl`

### Option B: External Tool + Import
- Use Screaming Frog or similar
- Export to CSV
- Process into JSON

---

## Acceptance Criteria

- [ ] All public URLs from baresquare.com discovered
- [ ] Each URL has title, description, h1, status code
- [ ] Redirect map generated with recommended mappings
- [ ] Report saved to `/seo-migration/` folder
- [ ] Can be re-run to check for changes

---

## Out of Scope (v1)

- Image SEO audit
- Backlink analysis
- Competitor comparison
- Automated redirect implementation in Netlify
