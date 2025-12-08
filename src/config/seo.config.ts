/**
 * SEO Configuration
 *
 * Central configuration for all SEO-related settings.
 * Used by Layout.astro for canonical URLs, OG tags, and JSON-LD schemas.
 */

export const seoConfig = {
  // Site URL - use production domain
  siteUrl: 'https://baresquare.com',

  // Site identity
  siteName: 'Baresquare',

  // Default meta tags (used when page doesn't specify)
  defaultTitle: 'Baresquare - Agents That Work for You',
  defaultDescription: 'AI that monitors your campaigns, inventory, pricing, and competitors—then takes action automatically.',

  // Default OG image (1200x630 recommended)
  defaultOgImage: '/images/og/default.png',

  // Social handles
  twitterHandle: '@baresquare',

  // Organization info (for JSON-LD)
  organization: {
    name: 'Baresquare',
    foundingDate: '2018',
    logo: '/images/logo.svg',
  },

  // Office locations (for JSON-LD)
  addresses: [
    {
      locality: 'London',
      country: 'UK',
    },
    {
      locality: 'Thessaloniki',
      country: 'Greece',
    },
  ],

  // Social profiles (for JSON-LD sameAs)
  socialProfiles: [
    'https://twitter.com/baresquare',
    'https://linkedin.com/company/baresquare',
  ],
};
