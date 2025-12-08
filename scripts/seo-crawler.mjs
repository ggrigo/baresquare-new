#!/usr/bin/env node
/**
 * SEO Migration Crawler
 *
 * Crawls baresquare.com to discover all URLs and extract SEO data
 * for migration to the new website.
 *
 * Usage: node scripts/seo-crawler.mjs
 * Output: seo-migration/urls.json, seo-migration/redirects.csv, seo-migration/meta-report.md
 */

import * as cheerio from 'cheerio';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const OUTPUT_DIR = join(PROJECT_ROOT, 'seo-migration');

// Configuration
const CONFIG = {
  baseUrl: 'https://baresquare.com',
  maxPages: 100,
  requestDelay: 1000, // 1 second between requests
  timeout: 10000,
  userAgent: 'Baresquare-SEO-Crawler/1.0 (Migration Tool)',
};

// Store for crawled data
const crawledUrls = new Set();
const urlsToVisit = [];
const pageData = [];
const errors = [];

/**
 * Delay helper
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Normalize URL to prevent duplicates
 */
function normalizeUrl(url) {
  try {
    const parsed = new URL(url, CONFIG.baseUrl);
    // Remove trailing slash, hash, and common tracking params
    let normalized = parsed.origin + parsed.pathname.replace(/\/$/, '');
    return normalized || parsed.origin;
  } catch {
    return null;
  }
}

/**
 * Check if URL should be crawled
 */
function shouldCrawl(url) {
  if (!url) return false;
  try {
    const parsed = new URL(url, CONFIG.baseUrl);
    // Only crawl same domain
    if (!parsed.hostname.includes('baresquare.com')) return false;
    // Skip assets, files
    const skipExtensions = ['.pdf', '.jpg', '.jpeg', '.png', '.gif', '.svg', '.css', '.js', '.ico', '.xml'];
    if (skipExtensions.some(ext => parsed.pathname.toLowerCase().endsWith(ext))) return false;
    // Skip mailto, tel, javascript
    if (['mailto:', 'tel:', 'javascript:'].some(p => url.startsWith(p))) return false;
    return true;
  } catch {
    return false;
  }
}

/**
 * Fetch a page with error handling
 */
async function fetchPage(url) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CONFIG.timeout);

    const response = await fetch(url, {
      headers: { 'User-Agent': CONFIG.userAgent },
      signal: controller.signal,
      redirect: 'follow',
    });

    clearTimeout(timeoutId);

    const html = await response.text();
    return {
      url: response.url, // Final URL after redirects
      status: response.status,
      html,
      redirected: response.redirected,
    };
  } catch (error) {
    return {
      url,
      status: 0,
      html: '',
      error: error.message,
    };
  }
}

/**
 * Extract SEO data from HTML
 */
function extractSeoData(url, html, status) {
  const $ = cheerio.load(html);

  // Extract meta data
  const title = $('title').text().trim() || null;
  const metaDescription = $('meta[name="description"]').attr('content') || null;
  const metaRobots = $('meta[name="robots"]').attr('content') || null;
  const canonical = $('link[rel="canonical"]').attr('href') || null;
  const h1 = $('h1').first().text().trim() || null;

  // Open Graph
  const ogTitle = $('meta[property="og:title"]').attr('content') || null;
  const ogDescription = $('meta[property="og:description"]').attr('content') || null;
  const ogImage = $('meta[property="og:image"]').attr('content') || null;
  const ogType = $('meta[property="og:type"]').attr('content') || null;

  // Twitter Cards
  const twitterCard = $('meta[name="twitter:card"]').attr('content') || null;
  const twitterTitle = $('meta[name="twitter:title"]').attr('content') || null;

  // JSON-LD
  const jsonLd = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      jsonLd.push(JSON.parse($(el).html()));
    } catch {}
  });

  // Internal links
  const internalLinks = [];
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (shouldCrawl(href)) {
      const normalized = normalizeUrl(href);
      if (normalized && !internalLinks.includes(normalized)) {
        internalLinks.push(normalized);
      }
    }
  });

  // Determine page type
  let pageType = 'page';
  const path = new URL(url).pathname;
  if (path === '/' || path === '') pageType = 'homepage';
  else if (path.includes('/blog/') || path.includes('/news/')) pageType = 'blog';
  else if (path.includes('/product') || path.includes('/service')) pageType = 'product';
  else if (path.includes('/about') || path.includes('/team')) pageType = 'about';
  else if (path.includes('/contact')) pageType = 'contact';
  else if (path.includes('/case-stud') || path.includes('/work/')) pageType = 'case-study';

  return {
    url,
    path: new URL(url).pathname,
    status,
    pageType,
    title,
    metaDescription,
    metaRobots,
    canonical,
    h1,
    openGraph: { title: ogTitle, description: ogDescription, image: ogImage, type: ogType },
    twitter: { card: twitterCard, title: twitterTitle },
    jsonLd: jsonLd.length > 0 ? jsonLd : null,
    internalLinksCount: internalLinks.length,
    internalLinks,
  };
}

/**
 * Crawl the website
 */
async function crawl() {
  console.log(`\n🕷️  Starting SEO crawl of ${CONFIG.baseUrl}\n`);

  // Start with homepage and sitemap
  urlsToVisit.push(CONFIG.baseUrl);
  urlsToVisit.push(`${CONFIG.baseUrl}/sitemap.xml`);

  let pagesProcessed = 0;

  while (urlsToVisit.length > 0 && pagesProcessed < CONFIG.maxPages) {
    const url = urlsToVisit.shift();
    const normalizedUrl = normalizeUrl(url);

    if (!normalizedUrl || crawledUrls.has(normalizedUrl)) continue;
    crawledUrls.add(normalizedUrl);

    console.log(`[${pagesProcessed + 1}/${CONFIG.maxPages}] Crawling: ${normalizedUrl}`);

    const result = await fetchPage(normalizedUrl);

    if (result.error) {
      errors.push({ url: normalizedUrl, error: result.error });
      console.log(`  ❌ Error: ${result.error}`);
    } else {
      // Handle sitemap
      if (normalizedUrl.includes('sitemap')) {
        const $ = cheerio.load(result.html, { xmlMode: true });
        $('loc').each((_, el) => {
          const sitemapUrl = $(el).text();
          if (shouldCrawl(sitemapUrl)) {
            const normalized = normalizeUrl(sitemapUrl);
            if (normalized && !crawledUrls.has(normalized)) {
              urlsToVisit.push(normalized);
            }
          }
        });
        console.log(`  📋 Sitemap: Found ${$('loc').length} URLs`);
      } else {
        // Regular page
        const data = extractSeoData(normalizedUrl, result.html, result.status);
        pageData.push(data);

        console.log(`  ✅ ${result.status} | "${data.title?.substring(0, 50) || 'No title'}..."`);

        // Add found links to queue
        data.internalLinks.forEach(link => {
          if (!crawledUrls.has(link) && !urlsToVisit.includes(link)) {
            urlsToVisit.push(link);
          }
        });
      }
    }

    pagesProcessed++;
    await delay(CONFIG.requestDelay);
  }

  console.log(`\n✅ Crawl complete. Processed ${pageData.length} pages.\n`);
}

/**
 * Generate redirect map based on new site structure
 */
function generateRedirectMap() {
  // Map old URLs to new URLs based on our new site structure
  const newSiteRoutes = {
    '/': '/',
    '/about': '/about',
    '/contact': '/contact',
    '/services': '/services',
    '/blog': '/blog',
    '/careers': '/careers',
    // Service mappings
    '/services/revenue-performance': '/services/revenue-performance',
    '/services/ai-search-marketing': '/services/ai-search-marketing',
    '/services/data-operations': '/services/data-operations',
    '/services/learning-development': '/services/learning-development',
    // Work/case studies
    '/work/vogue': '/work/vogue',
    '/work/sony': '/work/sony',
    '/work/adidas': '/work/adidas',
  };

  const redirects = pageData.map(page => {
    const oldPath = page.path;
    let newPath = '/'; // Default: redirect to home
    let status = 301;
    let notes = '';

    // Check for direct match
    if (newSiteRoutes[oldPath]) {
      newPath = newSiteRoutes[oldPath];
      notes = 'direct match';
    }
    // Check for partial matches
    else if (oldPath.startsWith('/blog/')) {
      newPath = '/blog';
      notes = 'blog post - redirect to blog index';
    }
    else if (oldPath.startsWith('/case-stud') || oldPath.startsWith('/work/')) {
      newPath = '/';
      notes = 'case study - evaluate for migration';
    }
    else if (oldPath.startsWith('/service')) {
      newPath = '/services';
      notes = 'service page - map to closest equivalent';
    }
    else {
      notes = 'no equivalent - redirect to home';
    }

    return {
      old_url: oldPath,
      new_url: newPath,
      status_code: status,
      notes,
      original_title: page.title,
    };
  });

  return redirects;
}

/**
 * Generate meta report markdown
 */
function generateMetaReport() {
  let report = `# SEO Migration Report - baresquare.com

**Crawl Date:** ${new Date().toISOString()}
**Pages Found:** ${pageData.length}
**Errors:** ${errors.length}

---

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | ${pageData.length} |
| With Title | ${pageData.filter(p => p.title).length} |
| With Meta Description | ${pageData.filter(p => p.metaDescription).length} |
| With H1 | ${pageData.filter(p => p.h1).length} |
| With OG Tags | ${pageData.filter(p => p.openGraph?.title).length} |
| With JSON-LD | ${pageData.filter(p => p.jsonLd).length} |

---

## Pages by Type

| Type | Count |
|------|-------|
${[...new Set(pageData.map(p => p.pageType))].map(type =>
  `| ${type} | ${pageData.filter(p => p.pageType === type).length} |`
).join('\n')}

---

## All Pages

`;

  pageData.forEach((page, i) => {
    report += `### ${i + 1}. ${page.path}

- **URL:** ${page.url}
- **Status:** ${page.status}
- **Type:** ${page.pageType}
- **Title:** ${page.title || '_Not set_'}
- **Meta Description:** ${page.metaDescription ? page.metaDescription.substring(0, 100) + '...' : '_Not set_'}
- **H1:** ${page.h1 || '_Not set_'}
- **Canonical:** ${page.canonical || '_Not set_'}
- **OG Title:** ${page.openGraph?.title || '_Not set_'}
- **Internal Links:** ${page.internalLinksCount}

`;
  });

  if (errors.length > 0) {
    report += `---

## Errors

| URL | Error |
|-----|-------|
${errors.map(e => `| ${e.url} | ${e.error} |`).join('\n')}
`;
  }

  return report;
}

/**
 * Save all output files
 */
function saveOutput() {
  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // 1. Save URLs JSON
  const urlsJson = {
    crawled: new Date().toISOString(),
    domain: 'baresquare.com',
    totalPages: pageData.length,
    urls: pageData,
  };
  writeFileSync(
    join(OUTPUT_DIR, 'urls.json'),
    JSON.stringify(urlsJson, null, 2)
  );
  console.log(`📄 Saved: seo-migration/urls.json`);

  // 2. Save Redirects CSV
  const redirects = generateRedirectMap();
  const csvHeader = 'old_url,new_url,status_code,notes,original_title';
  const csvRows = redirects.map(r =>
    `"${r.old_url}","${r.new_url}",${r.status_code},"${r.notes}","${(r.original_title || '').replace(/"/g, '""')}"`
  );
  writeFileSync(
    join(OUTPUT_DIR, 'redirects.csv'),
    [csvHeader, ...csvRows].join('\n')
  );
  console.log(`📄 Saved: seo-migration/redirects.csv`);

  // 3. Save Meta Report
  const report = generateMetaReport();
  writeFileSync(join(OUTPUT_DIR, 'meta-report.md'), report);
  console.log(`📄 Saved: seo-migration/meta-report.md`);

  // 4. Save Netlify redirects format
  const netlifyRedirects = redirects
    .filter(r => r.old_url !== r.new_url)
    .map(r => `${r.old_url}  ${r.new_url}  ${r.status_code}`)
    .join('\n');
  writeFileSync(join(OUTPUT_DIR, '_redirects'), netlifyRedirects);
  console.log(`📄 Saved: seo-migration/_redirects (Netlify format)`);

  console.log(`\n✅ All files saved to /seo-migration/\n`);
}

/**
 * Main execution
 */
async function main() {
  console.log('═'.repeat(60));
  console.log('  SEO Migration Crawler - baresquare.com');
  console.log('═'.repeat(60));

  try {
    await crawl();
    saveOutput();

    console.log('📊 Quick Stats:');
    console.log(`   Pages crawled: ${pageData.length}`);
    console.log(`   Unique paths: ${new Set(pageData.map(p => p.path)).size}`);
    console.log(`   With meta desc: ${pageData.filter(p => p.metaDescription).length}`);
    console.log(`   Errors: ${errors.length}`);

  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

main();
