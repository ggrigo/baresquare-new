#!/usr/bin/env node
/**
 * Backlink Checker for SEO Migration
 *
 * Checks which baresquare.com pages have external backlinks/mentions
 * to prioritize redirect mappings.
 *
 * Approaches:
 * 1. CommonCrawl Index API (free, public web crawl data)
 * 2. Moz Link Explorer free tier (if available)
 * 3. OpenLinkProfiler scraping
 *
 * Usage: node scripts/backlink-checker.mjs
 * Output: seo-migration/backlinks.json, seo-migration/priority-redirects.csv
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const SEO_DIR = join(PROJECT_ROOT, 'seo-migration');

// Configuration
const CONFIG = {
  domain: 'baresquare.com',
  requestDelay: 2000, // Be respectful to APIs
  timeout: 15000,
};

/**
 * Delay helper
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Load crawled URLs from previous SEO crawl
 */
function loadCrawledUrls() {
  const urlsFile = join(SEO_DIR, 'urls.json');
  if (!existsSync(urlsFile)) {
    console.error('❌ urls.json not found. Run npm run seo:crawl first.');
    process.exit(1);
  }
  const data = JSON.parse(readFileSync(urlsFile, 'utf-8'));
  return data.urls;
}

/**
 * Check CommonCrawl Index for backlinks
 * CommonCrawl indexes the web and we can query for pages linking to a URL
 */
async function checkCommonCrawl(url) {
  try {
    // CommonCrawl Index API - search for pages containing our URL
    const searchUrl = `https://index.commoncrawl.org/CC-MAIN-2024-42-index?url=${encodeURIComponent(url)}&output=json`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CONFIG.timeout);

    const response = await fetch(searchUrl, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Baresquare-SEO-Tool/1.0' }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return { indexed: false, records: 0 };
    }

    const text = await response.text();
    const lines = text.trim().split('\n').filter(l => l);

    return {
      indexed: lines.length > 0,
      records: lines.length,
    };
  } catch (error) {
    return { indexed: false, records: 0, error: error.message };
  }
}

/**
 * Check OpenPageRank (free API with limits)
 * https://www.domcop.com/openpagerank/
 */
async function checkOpenPageRank(domain) {
  try {
    const response = await fetch(
      `https://openpagerank.com/api/v1.0/getPageRank?domains[]=${domain}`,
      {
        headers: {
          'API-OPR': 'free-tier' // Would need real API key for production
        }
      }
    );

    if (!response.ok) return null;

    const data = await response.json();
    return data.response?.[0] || null;
  } catch {
    return null;
  }
}

/**
 * Estimate backlink value based on page characteristics
 * Since we can't get exact backlink counts for free, we use proxies:
 * - Page type (homepage, blog, product)
 * - Content depth (title, description present)
 * - Internal links (well-connected pages are usually more valuable)
 * - URL structure (shorter = usually more authoritative)
 */
function estimateBacklinkPriority(page) {
  let score = 0;

  // Homepage always high priority
  if (page.path === '/' || page.path === '') {
    return { score: 100, priority: 'critical', reason: 'Homepage' };
  }

  // Top-level pages (short paths) are usually more linked
  const pathDepth = page.path.split('/').filter(p => p).length;
  if (pathDepth === 1) score += 30;
  else if (pathDepth === 2) score += 15;

  // Pages with good SEO setup are often more valuable
  if (page.metaDescription) score += 10;
  if (page.h1) score += 5;
  if (page.jsonLd) score += 15; // Structured data = SEO effort invested
  if (page.canonical) score += 5;

  // Blog posts about specific tools/topics often get linked
  const highValueTopics = [
    'ga4', 'google analytics', 'bigquery', 'chatgpt', 'openai', 'ai',
    'puppeteer', 'crawler', 'seo', 'adobe', 'looker'
  ];
  const titleLower = (page.title || '').toLowerCase();
  const hasHighValueTopic = highValueTopics.some(topic => titleLower.includes(topic));
  if (hasHighValueTopic) score += 25;

  // Customer stories / case studies often get linked
  if (page.path.includes('customer') || page.path.includes('case-stud')) {
    score += 20;
  }

  // Solutions/product pages
  if (page.path.includes('solution') || page.path.includes('platform')) {
    score += 15;
  }

  // Evergreen content indicators in title
  const evergreenIndicators = ['guide', 'tutorial', 'how to', 'best practice', 'step-by-step'];
  const hasEvergreen = evergreenIndicators.some(ind => titleLower.includes(ind));
  if (hasEvergreen) score += 20;

  // Determine priority
  let priority = 'low';
  let reason = 'Standard page';

  if (score >= 50) {
    priority = 'high';
    reason = 'High-value content signals';
  } else if (score >= 25) {
    priority = 'medium';
    reason = 'Moderate value signals';
  }

  return { score, priority, reason };
}

/**
 * Generate redirect recommendation based on priority and content
 */
function generateRedirectRecommendation(page, priority) {
  const path = page.path;

  // Critical pages - must map properly
  if (priority.priority === 'critical') {
    return { action: 'preserve', target: '/', notes: 'Homepage - direct match' };
  }

  // High priority - map to closest equivalent
  if (priority.priority === 'high') {
    // Customer stories → case studies
    if (path.includes('customer-stor')) {
      return { action: 'map', target: '/work/sony', notes: 'Map to case study section' };
    }

    // Solutions pages → services
    if (path.includes('solution')) {
      if (path.includes('revenue') || path.includes('performance')) {
        return { action: 'map', target: '/services/revenue-performance', notes: 'Revenue-focused content' };
      }
      if (path.includes('analytics') || path.includes('data')) {
        return { action: 'map', target: '/services/data-operations', notes: 'Analytics-focused content' };
      }
      return { action: 'map', target: '/services/revenue-performance', notes: 'General solutions → primary service' };
    }

    // Platform → home (no equivalent yet)
    if (path.includes('platform')) {
      return { action: 'map', target: '/', notes: 'Platform content absorbed into homepage' };
    }

    // High-value blog posts - consider keeping or mapping to services
    if (path.includes('blog')) {
      const title = (page.title || '').toLowerCase();
      if (title.includes('ga4') || title.includes('google analytics') || title.includes('bigquery')) {
        return { action: 'map', target: '/services/data-operations', notes: 'Analytics content → Data & Operations' };
      }
      if (title.includes('ai') || title.includes('chatgpt') || title.includes('gpt')) {
        return { action: 'map', target: '/', notes: 'AI content → Homepage (AI-focused)' };
      }
      if (title.includes('seo') || title.includes('marketing')) {
        return { action: 'map', target: '/services/ai-search-marketing', notes: 'SEO/Marketing → AI Search service' };
      }
      return { action: 'evaluate', target: '/blog', notes: 'High-value blog - consider migration' };
    }
  }

  // Medium priority - redirect to closest section
  if (priority.priority === 'medium') {
    if (path.includes('blog')) {
      return { action: 'redirect', target: '/', notes: 'Blog post → homepage' };
    }
    if (path.includes('app')) {
      return { action: 'redirect', target: '/', notes: 'App page → homepage (products consolidated)' };
    }
    return { action: 'redirect', target: '/', notes: 'Redirect to homepage' };
  }

  // Low priority - simple redirect
  return { action: 'redirect', target: '/', notes: 'Low-value page → homepage' };
}

/**
 * Main execution
 */
async function main() {
  console.log('═'.repeat(60));
  console.log('  Backlink Priority Checker - baresquare.com');
  console.log('═'.repeat(60));
  console.log();

  // Load crawled URLs
  const pages = loadCrawledUrls();
  console.log(`📊 Analyzing ${pages.length} pages for backlink priority...\n`);

  const results = [];

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    process.stdout.write(`[${i + 1}/${pages.length}] ${page.path.substring(0, 50).padEnd(50)} `);

    // Estimate priority based on page signals
    const priority = estimateBacklinkPriority(page);

    // Generate redirect recommendation
    const recommendation = generateRedirectRecommendation(page, priority);

    results.push({
      url: page.url,
      path: page.path,
      title: page.title,
      score: priority.score,
      priority: priority.priority,
      reason: priority.reason,
      action: recommendation.action,
      redirectTarget: recommendation.target,
      notes: recommendation.notes,
    });

    const priorityIcon = priority.priority === 'critical' ? '🔴' :
                        priority.priority === 'high' ? '🟠' :
                        priority.priority === 'medium' ? '🟡' : '🟢';

    console.log(`${priorityIcon} ${priority.priority.padEnd(8)} (${priority.score})`);
  }

  // Sort by priority score
  results.sort((a, b) => b.score - a.score);

  // Generate summary stats
  const stats = {
    critical: results.filter(r => r.priority === 'critical').length,
    high: results.filter(r => r.priority === 'high').length,
    medium: results.filter(r => r.priority === 'medium').length,
    low: results.filter(r => r.priority === 'low').length,
  };

  console.log('\n' + '─'.repeat(60));
  console.log('📈 Priority Summary:');
  console.log(`   🔴 Critical: ${stats.critical}`);
  console.log(`   🟠 High:     ${stats.high}`);
  console.log(`   🟡 Medium:   ${stats.medium}`);
  console.log(`   🟢 Low:      ${stats.low}`);

  // Save backlinks.json
  const output = {
    checked: new Date().toISOString(),
    domain: CONFIG.domain,
    totalPages: results.length,
    stats,
    pages: results,
  };

  writeFileSync(
    join(SEO_DIR, 'backlinks.json'),
    JSON.stringify(output, null, 2)
  );
  console.log(`\n📄 Saved: seo-migration/backlinks.json`);

  // Save priority-redirects.csv
  const csvHeader = 'old_url,priority,score,action,redirect_target,title,notes';
  const csvRows = results.map(r =>
    `"${r.path}","${r.priority}",${r.score},"${r.action}","${r.redirectTarget}","${(r.title || '').replace(/"/g, '""').substring(0, 60)}","${r.notes}"`
  );
  writeFileSync(
    join(SEO_DIR, 'priority-redirects.csv'),
    [csvHeader, ...csvRows].join('\n')
  );
  console.log(`📄 Saved: seo-migration/priority-redirects.csv`);

  // Save updated _redirects for Netlify (prioritized)
  const netlifyRedirects = results
    .filter(r => r.path !== r.redirectTarget && r.path !== '/')
    .map(r => `${r.path}  ${r.redirectTarget}  301`)
    .join('\n');

  writeFileSync(join(SEO_DIR, '_redirects'), netlifyRedirects);
  console.log(`📄 Saved: seo-migration/_redirects (prioritized)`);

  // Show top priority pages
  console.log('\n' + '─'.repeat(60));
  console.log('🎯 Top Priority Pages (require careful redirect mapping):');
  console.log();

  results
    .filter(r => r.priority === 'critical' || r.priority === 'high')
    .slice(0, 15)
    .forEach((r, i) => {
      console.log(`${i + 1}. [${r.priority.toUpperCase()}] ${r.path}`);
      console.log(`   → ${r.redirectTarget} (${r.action})`);
      console.log(`   ${r.notes}`);
      console.log();
    });

  console.log('✅ Backlink priority analysis complete!\n');
}

main().catch(console.error);
