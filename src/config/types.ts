/**
 * TypeScript interfaces for site configuration and content
 * All content types are defined here for type safety
 */

// =============================================================================
// SECTION CONFIGURATION
// =============================================================================

/**
 * Route availability for "Coming Soon" feature
 */
export interface RouteConfig {
  available: boolean;
  message?: string;
}

/**
 * Site-wide configuration
 */
export interface SiteConfig {
  /** Section visibility - true = rendered at build time, false = excluded from HTML */
  sections: {
    hero: boolean;
    featureSlider: boolean;
    about: boolean;
    approach: boolean;
    stats: boolean;
    services: boolean;
    process: boolean;
    testimonial: boolean;
    ctaMid: boolean;
    blog: boolean;
    ctaFinal: boolean;
  };
  /** Route availability map - controls Coming Soon behavior */
  routes: Record<string, RouteConfig>;
}

// =============================================================================
// CONTENT TYPES
// =============================================================================

/**
 * Hero section content
 */
export interface HeroContent {
  badge: string;
  headline: string;
  accentWord: string;
  description?: string;
  fadedText?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  backgroundImage?: string;
  videoId?: string;
  videoThumbnail?: string;
  videoThumbnailAlt?: string;
  infoBadge?: string;
  infoDescription?: string;
}

/**
 * Feature item for FeatureSlider
 */
export interface FeatureItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface FeatureSliderContent {
  badge: string;
  headline: string;
  features: FeatureItem[];
}

/**
 * TwoColumnGrid content (used for About, Approach sections)
 */
export interface TwoColumnContent {
  badge: string;
  headline: string;
  description: string;
  fadedText?: string;
  image: string;
  imageAlt: string;
  linkText?: string;
  linkHref?: string;
  reversed?: boolean;
  badgeColor?: 'white' | 'purple' | 'orange' | 'green' | 'gold';
}

/**
 * Stats section content
 */
export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface StatsContent {
  badge: string;
  headline: string;
  stats: StatItem[];
}

/**
 * Services section content
 */
export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  imageAlt?: string;
  href?: string;
}

export interface ServicesContent {
  introHeadline: string;
  introDescription: string;
  services: ServiceItem[];
}

/**
 * Process steps content
 */
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  badge: string;
  headline: string;
  steps: ProcessStep[];
}

/**
 * Customer quote/testimonial content
 */
export interface TestimonialContent {
  quote: string;
  author: string;
  authorTitle: string;
  company: string;
  companyLogo?: string;
  linkText?: string;
  linkHref?: string;
}

/**
 * Blog post item
 */
export interface BlogPostItem {
  title: string;
  excerpt: string;
  category: string;
  categoryColor: 'white' | 'purple' | 'orange' | 'green' | 'gold';
  image: string;
  imageAlt: string;
  href: string;
  date: string;
}

export interface BlogGridContent {
  badge: string;
  headline: string;
  posts: BlogPostItem[];
  showViewAll: boolean;
  viewAllHref: string;
}

/**
 * CTA section content
 */
export interface CTAContent {
  headline: string;
  accentWord: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}
