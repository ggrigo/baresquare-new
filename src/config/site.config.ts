/**
 * Site Configuration v2
 *
 * This file controls:
 * 1. Section visibility and sub-element visibility (build-time static)
 * 2. Navigation structure (header & footer)
 * 3. Social media links
 * 4. Office locations
 * 5. Route availability ("Coming Soon" behavior)
 *
 * IMPORTANT: All configuration is resolved at BUILD TIME.
 * Disabled sections/elements are NOT included in the output HTML.
 */

import type { SiteConfig, RouteConfig, SectionConfig } from './types';

export const siteConfig: SiteConfig = {
  // ═══════════════════════════════════════════════════════════════════════════
  // SECTIONS - Homepage section visibility and element control
  // ═══════════════════════════════════════════════════════════════════════════
  sections: {
    hero: {
      enabled: true,
      elements: {
        video: { enabled: false },        // Hide video for now
        infoBanner: { enabled: false },   // Hide "Autonomous eCommerce Agent" banner
      },
    },
    featureSlider: {
      enabled: true,
      limit: 3,                           // Show only 3 features (4th ready for later)
    },
    about: {
      enabled: true,
      elements: {
        ctaLink: { enabled: false },      // Hide "Learn about us" link
      },
    },
    approach: {
      enabled: true,
      elements: {
        ctaLink: { enabled: false },
      },
    },
    stats: {
      enabled: false,
      elements: {
        measurableOutcomes: { enabled: false }, // Hide this stat
        clientRetention: { enabled: true },
        projectsDelivered: { enabled: true },
        avgROI: { enabled: true },
      },
    },
    services: {
      enabled: true,
      elements: {
        learnMore: { enabled: false },      // Hide "Learn more" links on service cards
      },
    },
    process: {
      enabled: true,
    },
    testimonial: {
      enabled: true,
    },
    ctaMid: {
      enabled: false,                     // Only use final CTA
    },
    blog: {
      enabled: false,                     // Disabled until blog content is ready
    },
    ctaFinal: {
      enabled: true,
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NAVIGATION - Header and footer structure
  // ═══════════════════════════════════════════════════════════════════════════
  navigation: {
    header: {
      enabled: true,
      logo: {
        src: '/images/baresquare-logo.svg',
        alt: 'Baresquare',
        width: 140,
        height: 20,
      },
      cta: {
        enabled: false,
        label: 'Contact us',
        href: '/contact',
      },
      items: [
        { label: 'Home', href: '/', enabled: false },
        { label: 'About', href: '/about', enabled: false },
        {
          label: 'Services',
          href: '/services',
          enabled: false,
          children: [
            { label: 'Strategy', href: '/services/strategy', enabled: false },
            { label: 'Infrastructure', href: '/services/infrastructure', enabled: false },
            { label: 'AI & Data', href: '/services/ai-data', enabled: false },
          ],
        },
        { label: 'Blog', href: '/blog', enabled: false },
        { label: 'Contact', href: '/contact', enabled: false },
      ],
    },
    footer: {
      enabled: true,
      logo: {
        src: '/images/baresquare-logo.svg',
        alt: 'Baresquare',
        width: 140,
        height: 20,
      },
      tagline: 'Shaping the invisible structures that power visible breakthroughs.',
      columns: [
        {
          title: 'Company',
          enabled: true,
          links: [
            { label: 'About', href: '/about', enabled: true },
            { label: 'Careers', href: '/careers', enabled: false },
            { label: 'Contact', href: '/contact', enabled: true },
          ],
        },
        {
          title: 'Services',
          enabled: true,
          links: [
            { label: 'Revenue Performance', href: '/services/revenue-performance', enabled: true },
            { label: 'AI Search & Marketing', href: '/services/ai-search-marketing', enabled: true },
            { label: 'Data & Operations', href: '/services/data-operations', enabled: true },
            { label: 'Learning & Development', href: '/services/learning-development', enabled: true },
          ],
        },
        {
          title: 'Featured Work',
          enabled: true,
          links: [
            { label: 'VOGUE', href: '/work/vogue', enabled: true },
            { label: 'SONY', href: '/work/sony', enabled: true },
            { label: 'adidas', href: '/work/adidas', enabled: true },
          ],
        },
      ],
      legal: [
        { label: 'Privacy Policy', href: '/privacy', enabled: true },
        { label: 'Terms of Service', href: '/terms', enabled: true },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SOCIAL - Social media links
  // ═══════════════════════════════════════════════════════════════════════════
  social: {
    twitter: {
      enabled: true,
      url: 'https://twitter.com/baresquare',
      label: 'Follow us on Twitter',
    },
    linkedin: {
      enabled: true,
      url: 'https://linkedin.com/company/baresquare',
      label: 'Connect on LinkedIn',
    },
    instagram: {
      enabled: false,
      url: '',
      label: 'Follow us on Instagram',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OFFICES - Office locations (displayed in footer)
  // ═══════════════════════════════════════════════════════════════════════════
  offices: {
    london: {
      enabled: true,
      city: 'London',
      country: 'United Kingdom',
      address: 'White Collar Factory, 1 Old Street Yard',
      fullAddress: 'White Collar Factory, 1 Old Street Yard, London EC1Y 8AF, United Kingdom',
    },
    thessaloniki: {
      enabled: true,
      city: 'Thessaloniki',
      country: 'Greece',
      address: 'Kathigitou Nikolaou Papadaki 19',
      fullAddress: 'Kathigitou Nikolaou Papadaki 19, Thessaloniki 542 48',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ROUTES - Coming Soon behavior for links
  // ═══════════════════════════════════════════════════════════════════════════
  routes: {
    // Main pages
    '/': { available: true },
    '/contact': { available: false, message: 'Contact page coming soon!' },
    '/about': { available: false, message: 'Our About page is coming soon!' },

    // Services
    '/services': { available: false, message: 'Services page coming soon!' },
    '/services/strategy': { available: false },
    '/services/infrastructure': { available: false },
    '/services/execution': { available: false },
    '/services/ai-data': { available: false },
    '/services/regulatory': { available: false },
    '/services/ops': { available: false },

    // Work/Case Studies
    '/work': { available: false, message: 'Case studies coming soon!' },
    '/work/*': { available: false },

    // Blog
    '/blog': { available: false, message: 'Blog coming soon!' },
    '/blog/*': { available: false },

    // Legal
    '/privacy': { available: false, message: 'Privacy Policy coming soon!' },
    '/terms': { available: false, message: 'Terms of Service coming soon!' },
    '/careers': { available: false, message: 'Careers page coming soon!' },
    '/case-studies': { available: false, message: 'Case Studies coming soon!' },
    '/press': { available: false, message: 'Press page coming soon!' },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DEFAULTS - Default messages
  // ═══════════════════════════════════════════════════════════════════════════
  defaults: {
    comingSoonTitle: 'Coming Soon',
    comingSoonMessage: 'This page is coming soon!',
    comingSoonButtonText: 'Got it',
  },
};

// =============================================================================
// HELPER FUNCTIONS (used by components at build time)
// =============================================================================

/**
 * Check if a section is enabled
 */
export function isSectionEnabled(sectionId: keyof typeof siteConfig.sections): boolean {
  return siteConfig.sections[sectionId]?.enabled ?? false;
}

/**
 * Get section config
 */
export function getSectionConfig(sectionId: keyof typeof siteConfig.sections): SectionConfig {
  return siteConfig.sections[sectionId];
}

/**
 * Check if a section element is enabled
 */
export function isElementEnabled(
  sectionId: keyof typeof siteConfig.sections,
  elementId: string
): boolean {
  const section = siteConfig.sections[sectionId];
  return section?.elements?.[elementId]?.enabled ?? true; // Default to true if not specified
}

/**
 * Get section limit (for item lists)
 */
export function getSectionLimit(sectionId: keyof typeof siteConfig.sections): number | undefined {
  return siteConfig.sections[sectionId]?.limit;
}

/**
 * Check if a route is available (not "Coming Soon")
 */
export function isRouteAvailable(path: string): boolean {
  // Check exact match first
  if (path in siteConfig.routes) {
    return siteConfig.routes[path].available;
  }

  // Check wildcard patterns
  for (const routePath of Object.keys(siteConfig.routes)) {
    if (routePath.endsWith('/*')) {
      const basePath = routePath.slice(0, -2);
      if (path.startsWith(basePath + '/')) {
        return siteConfig.routes[routePath].available;
      }
    }
  }

  // Default: available (for undefined routes like external links)
  return true;
}

/**
 * Get the "Coming Soon" message for a route
 */
export function getComingSoonMessage(path: string): string {
  // Check exact match
  if (path in siteConfig.routes && siteConfig.routes[path].message) {
    return siteConfig.routes[path].message!;
  }

  // Check wildcard patterns
  for (const routePath of Object.keys(siteConfig.routes)) {
    if (routePath.endsWith('/*')) {
      const basePath = routePath.slice(0, -2);
      if (path.startsWith(basePath + '/')) {
        return siteConfig.routes[routePath].message || siteConfig.defaults.comingSoonMessage;
      }
    }
  }

  return siteConfig.defaults.comingSoonMessage;
}

/**
 * Get route config for a path
 */
export function getRouteConfig(path: string): RouteConfig | undefined {
  if (path in siteConfig.routes) {
    return siteConfig.routes[path];
  }

  // Check wildcards
  for (const routePath of Object.keys(siteConfig.routes)) {
    if (routePath.endsWith('/*')) {
      const basePath = routePath.slice(0, -2);
      if (path.startsWith(basePath + '/')) {
        return siteConfig.routes[routePath];
      }
    }
  }

  return undefined;
}

/**
 * Get enabled navigation items (filters by enabled flag)
 */
export function getEnabledNavItems() {
  return siteConfig.navigation.header.items.filter(item => item.enabled);
}

/**
 * Get enabled footer columns
 */
export function getEnabledFooterColumns() {
  return siteConfig.navigation.footer.columns
    .filter(col => col.enabled)
    .map(col => ({
      ...col,
      links: col.links.filter(link => link.enabled),
    }));
}

/**
 * Get enabled social links
 */
export function getEnabledSocialLinks() {
  return Object.entries(siteConfig.social)
    .filter(([_, config]) => config?.enabled)
    .map(([platform, config]) => ({
      platform,
      ...config!,
    }));
}

/**
 * Get enabled office locations
 */
export function getEnabledOffices() {
  return Object.entries(siteConfig.offices)
    .filter(([_, config]) => config.enabled)
    .map(([id, config]) => ({
      id,
      ...config,
    }));
}
