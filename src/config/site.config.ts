/**
 * Site Configuration
 *
 * This file controls:
 * 1. Which sections appear on the homepage (build-time static)
 * 2. Which routes are available (for "Coming Soon" modal behavior)
 *
 * IMPORTANT: All configuration is resolved at BUILD TIME.
 * Disabled sections are NOT included in the output HTML.
 */

import type { SiteConfig, RouteConfig } from './types';

export const siteConfig: SiteConfig = {
  /**
   * Section visibility
   * - true: Section is rendered in the HTML output
   * - false: Section is completely excluded from the build
   *
   * To temporarily hide a section, set it to false.
   * This produces smaller, optimized HTML with no unused content.
   */
  sections: {
    hero: true,
    featureSlider: true,
    about: true,
    approach: true,
    stats: true,
    services: true,
    process: true,
    testimonial: true,
    ctaMid: true,
    blog: false,        // Disabled until blog content is ready
    ctaFinal: true,
  },

  /**
   * Route availability
   * Controls "Coming Soon" behavior for links.
   *
   * - available: true → Normal link behavior
   * - available: false → Link triggers "Coming Soon" modal
   *
   * Supports exact paths and wildcards (ending with /*)
   */
  routes: {
    // Main pages
    '/': { available: true },
    '/contact': { available: true },
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
};

// =============================================================================
// HELPER FUNCTIONS (used by components at build time)
// =============================================================================

/**
 * Check if a section is enabled
 * @param sectionId - The section identifier
 * @returns boolean - Whether the section should be rendered
 */
export function isSectionEnabled(sectionId: keyof typeof siteConfig.sections): boolean {
  return siteConfig.sections[sectionId] ?? false;
}

/**
 * Check if a route is available (not "Coming Soon")
 * Supports exact matches and wildcard patterns (e.g., '/work/*')
 *
 * @param path - The route path to check
 * @returns boolean - Whether the route is available
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
 * @param path - The route path
 * @returns string - The message to display in the modal
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
        return siteConfig.routes[routePath].message || 'This page is coming soon!';
      }
    }
  }

  return 'This page is coming soon!';
}

/**
 * Get route config for a path
 * @param path - The route path
 * @returns RouteConfig or undefined
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
