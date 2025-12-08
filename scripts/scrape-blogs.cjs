const https = require('https');
const fs = require('fs');

// All blog URLs: 47 from listing + missing high-traffic posts from GSC analysis
const urls = [
  // HIGH TRAFFIC - Must capture
  "https://baresquare.com/blog/keep-your-data-local-using-ollama-and-anythingllm-for-private-ai-interactions",
  "https://baresquare.com/blog/decoding-time-series-an-in-depth-look-at-definitions-types-and-challenges",
  "https://baresquare.com/blog/openai-assistants-vs-custom-gpts",
  "https://baresquare.com/blog/enhancing-privacy-in-ai-protecting-user-data-in-chatgpt",
  "https://baresquare.com/blog/how-to-create-images-with-chatgpt",
  "https://baresquare.com/blog/openapi-specification",
  "https://baresquare.com/blog/a-beginners-guide-to-web-crawlers-and-scrapers",
  "https://baresquare.com/blog/build-a-custom-seo-crawler-with-advertools",
  "https://baresquare.com/blog/mastering-merchandising-evars-analytics-guide",
  "https://baresquare.com/blog/power-of-looker-studio-why-you-need-to-make-the-switch-from-excel",

  // From blog listing
  "https://baresquare.com/blog/spot-broken-digital-campaigns-tracking-with-google-and-adobe-analytics",
  "https://baresquare.com/blog/merchandising-wiz-bites-7-home-furnishing-trends-spring-2025",
  "https://baresquare.com/blog/merchandising-wiz-bites-6-premium-athleisure-marketing-2025-reality-analysis",
  "https://baresquare.com/blog/merchandising-wiz-bites-retailers-smart-split-clearing-winter-while-promoting-spring",
  "https://baresquare.com/blog/merchandising-wiz-bites-4-athleisure-brand-predictions",
  "https://baresquare.com/blog/merchandising-wiz-bites-3-unwinding-the-holiday-strategies-of-timepiece-giants",
  "https://baresquare.com/blog/merchandising-wiz-bites-2-apparel-and-pop-culture-leaders-stitched-up-2024",
  "https://baresquare.com/blog/marketing-wiz-bites-01-black-friday-and-the-holiday-sprint",
  "https://baresquare.com/blog/using-claude-ai-to-build-online-game-digital-analytics",
  "https://baresquare.com/blog/unlocking-the-black-box-the-power-of-explainable-ai-for-transparent-ai-systems",
  "https://baresquare.com/blog/power-and-pitfalls-of-gen-ai-assistants-in-coding",
  "https://baresquare.com/blog/ai-prompting",
  "https://baresquare.com/blog/how-to-prepare-for-a-job-interview-with-ai",
  "https://baresquare.com/blog/ethics-in-ai",
  "https://baresquare.com/blog/master-business-english-with-the-help-of-ai",
  "https://baresquare.com/blog/ga4-ecommerce-best-practices-2024",
  "https://baresquare.com/blog/query-function-google-sheets-streamline-data-analysis",
  "https://baresquare.com/blog/unleashing-the-power-of-baresquare-campaign-diagnostics-for-optimal-marketing-success",
  "https://baresquare.com/blog/alerts-monitoring-a-quick-case-study",
  "https://baresquare.com/blog/ga4-bigquery-integration-for-unsampled-data-and-deeper-insights",
  "https://baresquare.com/blog/real-time-personalization-adobe-target-guide",
  "https://baresquare.com/blog/fix-the-html-errors-of-your-website-it-matters",
  "https://baresquare.com/blog/boost-google-analytics-baresquare",
  "https://baresquare.com/blog/common-mistakes-in-adobe-analysis-workspace",
  "https://baresquare.com/blog/the-ultimate-metric-for-bot-traffic-detection",
  "https://baresquare.com/blog/effective-data-storytelling-unleashing-insights-for-informed-decision-making",
  "https://baresquare.com/blog/google-looker-studio-best-practices-for-reports",
  "https://baresquare.com/blog/one-team-one-vision-how-effective-communication-can-eliminate-organizational-silos",
  "https://baresquare.com/blog/effective-communication-in-web-analytics-projects",
  "https://baresquare.com/blog/ultimate-guide-how-to-spot-bot-traffic",
  "https://baresquare.com/blog/introducing-ecom-product-analyst-custom-gpt",
  "https://baresquare.com/blog/create-jira-issues-for-new-baresquare-tickets",
  "https://baresquare.com/blog/introducing-new-zapier-actions-for-effortless-ticket-management",
  "https://baresquare.com/blog/introducing-visual-description-feature",
  "https://baresquare.com/blog/404-error-hound-hunting-down-fixing-website-errors-with-ai-power",
  "https://baresquare.com/blog/announcing-ga4-migration-gap-hunter-app",
  "https://baresquare.com/blog/baresquare-auth0-secure-easy-user-authentication",
  "https://baresquare.com/blog/dive-deeper-with-a-follow-up-analysis",
  "https://baresquare.com/blog/introducing-our-new-feature-share-a-baresquare-ticket-on-slack",
  "https://baresquare.com/blog/automate-actions-using-zapier",

  // Additional missing from GSC analysis
  "https://baresquare.com/blog/use-openai-chatgpt-with-python",
  "https://baresquare.com/blog/guide-for-fine-tuning-a-gpt-3-model-for-analytics",
  "https://baresquare.com/blog/gpts-one-step-closer-to-wider-ai-utilization",
  "https://baresquare.com/blog/revolutionize-analytics-ai-guide-building-digital-assistant-openai-api",
  "https://baresquare.com/blog/importance-of-human-expertise-in-ai",
  "https://baresquare.com/blog/supercharge-tagging-productivity-chatgpt",
  "https://baresquare.com/blog/google-analytics-ga4-ua-discrepancies",
  "https://baresquare.com/blog/google-analytics-alerts-and-baresquare",
  "https://baresquare.com/blog/digital-analytics-in-the-age-of-ai",
  "https://baresquare.com/blog/boost-your-e-commerce-conversion-rates-with-custom-cta",
  "https://baresquare.com/blog/can-large-language-models-supercharge-time-series",
  "https://baresquare.com/blog/mastering-web-scraping-with-puppeteer",
  "https://baresquare.com/blog/organic-traffic-why-it-is-important",
  "https://baresquare.com/blog/optimize-slack-efficiency-essential-apps",
  "https://baresquare.com/blog/cookie-consent-models-understanding",
  "https://baresquare.com/blog/the-problem-with-dashboards",
  "https://baresquare.com/blog/bi-tools-and-teams-that-leverage-ai-will-replace",
  "https://baresquare.com/blog/tedx-talk-how-to-avoid-the-rise-of-inequality-in-our-ai-future",
  "https://baresquare.com/blog/how-saas-tools-contributed-to-the-evolution",
  "https://baresquare.com/blog/day-in-the-life-of-a-digital-analyst",
  "https://baresquare.com/blog/a-tale-of-2-digital-analysts",
  "https://baresquare.com/blog/work-life-balance-tips-for-data-analysts",
  "https://baresquare.com/blog/how-siemens-gained-30-improvement",
  "https://baresquare.com/blog/chat-and-website-data-unlocking-deeper-insights",
  "https://baresquare.com/blog/ai-and-content-optimization-revolutionizing-ad-copy",
  "https://baresquare.com/blog/the-power-of-ai-in-personalized-marketing",
  "https://baresquare.com/blog/best-practices-on-digital-marketing-and-analytics-integration"
];

// Remove duplicates
const uniqueUrls = [...new Set(urls)];

// KB Category mapping based on analysis
const categoryMap = {
  'learning-development': [
    'ollama', 'anythingllm', 'chatgpt', 'openai', 'ai-prompting', 'ethics-in-ai',
    'claude-ai', 'explainable-ai', 'gen-ai', 'gpt', 'llm', 'master-business-english',
    'job-interview-with-ai', 'power-and-pitfalls', 'fine-tuning', 'privacy-in-ai',
    'assistants-vs-custom', 'human-expertise', 'tagging-productivity', 'tedx',
    'day-in-the-life', 'tale-of-2', 'work-life-balance', 'importance-of-human'
  ],
  'data-operations': [
    'ga4', 'bigquery', 'adobe', 'analytics', 'time-series', 'looker-studio',
    'google-sheets', 'bot-traffic', 'data-storytelling', 'evars', 'ua-discrepancies',
    'analysis-workspace', 'alerts-monitoring', 'query-function', 'digital-analytics',
    'baresquare-campaign', 'siemens', 'chat-and-website'
  ],
  'ai-search-marketing': [
    'web-crawler', 'scraper', 'seo', 'advertools', 'html-errors', 'organic-traffic',
    'puppeteer', '404-error', 'cookie-consent', 'openapi-specification'
  ],
  'revenue-performance': [
    'merchandising', 'wiz-bites', 'ecommerce', 'conversion', 'marketing-wiz',
    'campaign', 'personalization', 'adobe-target', 'black-friday', 'e-commerce',
    'ad-copy', 'content-optimization', 'personalized-marketing'
  ]
};

function categorize(slug) {
  const slugLower = slug.toLowerCase();
  for (const [category, keywords] of Object.entries(categoryMap)) {
    if (keywords.some(kw => slugLower.includes(kw))) {
      return category;
    }
  }
  return 'uncategorized';
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchUrl(res.headers.location).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode === 404) {
        resolve({ notFound: true });
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ html: data, status: res.statusCode }));
    });
    request.on('error', reject);
    request.setTimeout(10000, () => {
      request.destroy();
      reject(new Error('Timeout'));
    });
  });
}

function extractContent(html) {
  // Extract title
  const titleMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  let title = titleMatch ? titleMatch[1].trim() : '';
  title = title.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"');

  // Extract date
  const dateMatch = html.match(/(\w{3,9}\s+\d{1,2},\s+\d{4})/);
  const date = dateMatch ? dateMatch[1] : '';

  // Extract meta description
  const metaMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i) ||
                    html.match(/<meta[^>]*content="([^"]+)"[^>]*name="description"/i);
  let description = metaMatch ? metaMatch[1] : '';
  description = description.replace(/&amp;/g, '&').replace(/&#x27;/g, "'");

  // Extract rich text content (Webflow uses w-richtext class)
  let bodyHtml = '';
  let bodyText = '';

  // Try multiple selectors for content
  const contentPatterns = [
    /<div[^>]*class="[^"]*w-richtext[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<\/div>|<div)/i,
    /<div[^>]*class="[^"]*rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<\/div>|<div)/i,
    /<article[^>]*>([\s\S]*?)<\/article>/i,
    /<div[^>]*class="[^"]*blog-content[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*class="[^"]*post-content[^"]*"[^>]*>([\s\S]*?)<\/div>/i
  ];

  for (const pattern of contentPatterns) {
    const match = html.match(pattern);
    if (match && match[1] && match[1].length > 200) {
      bodyHtml = match[1];
      break;
    }
  }

  // If still no content, try to get everything between header and footer
  if (!bodyHtml) {
    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (mainMatch) {
      bodyHtml = mainMatch[1];
    }
  }

  // Strip HTML tags for plain text
  bodyText = bodyHtml
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

  return { title, date, bodyHtml, bodyText, description };
}

async function scrapeAll() {
  const results = {
    scrapedAt: new Date().toISOString(),
    totalUrls: uniqueUrls.length,
    successCount: 0,
    failedCount: 0,
    notFoundCount: 0,
    categories: {
      'learning-development': [],
      'data-operations': [],
      'ai-search-marketing': [],
      'revenue-performance': [],
      'uncategorized': []
    },
    failed: []
  };

  console.error(`Scraping ${uniqueUrls.length} blog posts...`);
  console.error('');

  for (let i = 0; i < uniqueUrls.length; i++) {
    const url = uniqueUrls[i];
    const slug = url.replace('https://baresquare.com/blog/', '');

    try {
      process.stderr.write(`[${String(i + 1).padStart(2)}/${uniqueUrls.length}] ${slug.substring(0, 50)}...`);

      const response = await fetchUrl(url);

      if (response.notFound) {
        console.error(' 404');
        results.notFoundCount++;
        results.failed.push({ slug, url, error: '404 Not Found' });
        continue;
      }

      const content = extractContent(response.html);
      const category = categorize(slug);

      const post = {
        slug,
        url,
        title: content.title || slug,
        date: content.date,
        description: content.description,
        category,
        bodyText: content.bodyText,
        bodyHtml: content.bodyHtml,
        wordCount: content.bodyText ? content.bodyText.split(/\s+/).length : 0
      };

      results.categories[category].push(post);
      results.successCount++;

      console.error(` ✓ (${post.wordCount} words)`);

      // Small delay to be polite
      await new Promise(r => setTimeout(r, 150));
    } catch (err) {
      console.error(` ✗ ${err.message}`);
      results.failedCount++;
      results.failed.push({ slug, url, error: err.message });
    }
  }

  // Summary
  console.error('');
  console.error('=== Summary ===');
  results.summary = {
    'learning-development': results.categories['learning-development'].length,
    'data-operations': results.categories['data-operations'].length,
    'ai-search-marketing': results.categories['ai-search-marketing'].length,
    'revenue-performance': results.categories['revenue-performance'].length,
    'uncategorized': results.categories['uncategorized'].length,
    'failed': results.failedCount,
    'notFound': results.notFoundCount
  };

  for (const [cat, count] of Object.entries(results.summary)) {
    console.error(`${cat}: ${count}`);
  }

  // Output JSON to stdout
  console.log(JSON.stringify(results, null, 2));
}

scrapeAll();
