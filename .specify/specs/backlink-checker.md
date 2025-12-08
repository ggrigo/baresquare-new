# Backlink Checker - Feature Specification

## Overview

**Feature**: Backlink Checker for SEO Migration
**Purpose**: Discover which baresquare.com pages have external backlinks to prioritize redirect mappings and preserve SEO value.

---

## Problem Statement

Not all 96 pages have equal SEO value. Pages with external backlinks:
- Pass link equity when redirected properly
- Should be mapped to topically-relevant new pages
- Are worth preserving or redirecting carefully

We need to identify which pages have backlinks before finalizing the redirect strategy.

---

## Data Sources (Free Options)

### Option A: CommonCrawl Index (Recommended)
- Free, public web crawl data
- API: `https://index.commoncrawl.org`
- Query: Find pages linking TO baresquare.com

### Option B: Google Search Operators
- `link:baresquare.com/page` (deprecated but sometimes works)
- `"baresquare.com" -site:baresquare.com` (find mentions)

### Option C: Bing Webmaster API
- Free with Bing Webmaster account
- Provides backlink data

### Option D: OpenLinkProfiler
- Free backlink checker
- Limited queries per day

---

## Deliverables

### 1. Backlink Report (`seo-migration/backlinks.json`)
```json
{
  "checked": "2024-12-08T...",
  "domain": "baresquare.com",
  "pages": [
    {
      "url": "/blog/ga4-bigquery-integration",
      "backlinks": 12,
      "referringDomains": 8,
      "topReferrers": ["medium.com", "dev.to"],
      "priority": "high"
    }
  ]
}
```

### 2. Priority Redirect Map (`seo-migration/priority-redirects.csv`)
```csv
old_url,backlinks,referring_domains,priority,recommended_action
/blog/ga4-bigquery-integration,12,8,high,map to /services/data-operations
/blog/random-post,0,0,low,redirect to /
```

### 3. Updated Meta Report
Add backlink data to existing `meta-report.md`

---

## Implementation Approach

### Phase 1: Google Search Mining
Use web search to find pages mentioning baresquare.com URLs.
- Search: `"baresquare.com/blog/xyz" -site:baresquare.com`
- Count results as proxy for backlinks

### Phase 2: CommonCrawl Query (if needed)
Query CommonCrawl index for actual backlink data.

---

## Technical Implementation

```javascript
// For each URL in urls.json:
// 1. Search for mentions using web search
// 2. Count referring pages
// 3. Classify priority: high (>5), medium (1-5), low (0)
// 4. Generate priority redirect recommendations
```

---

## Acceptance Criteria

- [ ] All 96 URLs checked for backlink signals
- [ ] Priority classification (high/medium/low)
- [ ] Recommended redirect action per URL
- [ ] Report saved to seo-migration/backlinks.json
- [ ] Updated redirect strategy based on findings

---

## Out of Scope

- Exact backlink counts (would need paid tools)
- Anchor text analysis
- Domain authority metrics
- Competitor backlink comparison
