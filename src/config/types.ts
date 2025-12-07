/**
 * TypeScript interfaces for site configuration and content
 * v2: Enhanced with element visibility, navigation, social, offices
 */

// =============================================================================
// CONFIGURATION TYPES (v2)
// =============================================================================

/**
 * Element visibility within a section
 */
export interface ElementConfig {
  enabled: boolean;
}

/**
 * Section configuration with optional element visibility and item limits
 */
export interface SectionConfig {
  enabled: boolean;
  elements?: Record<string, ElementConfig>;
  limit?: number;
}

/**
 * Navigation item (header menu)
 */
export interface NavItem {
  label: string;
  href: string;
  enabled: boolean;
  children?: NavItem[];
}

/**
 * Footer link
 */
export interface FooterLink {
  label: string;
  href: string;
  enabled: boolean;
}

/**
 * Footer column
 */
export interface FooterColumn {
  title: string;
  enabled: boolean;
  links: FooterLink[];
}

/**
 * Logo configuration
 */
export interface LogoConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Header navigation configuration
 */
export interface HeaderConfig {
  enabled: boolean;
  logo: LogoConfig;
  cta: {
    enabled: boolean;
    label: string;
    href: string;
  };
  items: NavItem[];
}

/**
 * Footer navigation configuration
 */
export interface FooterConfig {
  enabled: boolean;
  logo: LogoConfig;
  tagline: string;
  columns: FooterColumn[];
  legal: FooterLink[];
}

/**
 * Full navigation configuration
 */
export interface NavigationConfig {
  header: HeaderConfig;
  footer: FooterConfig;
}

/**
 * Social media link configuration
 */
export interface SocialLinkConfig {
  enabled: boolean;
  url: string;
  label?: string;
}

/**
 * Social media configuration
 */
export interface SocialConfig {
  twitter?: SocialLinkConfig;
  linkedin?: SocialLinkConfig;
  instagram?: SocialLinkConfig;
  youtube?: SocialLinkConfig;
  facebook?: SocialLinkConfig;
  [key: string]: SocialLinkConfig | undefined;
}

/**
 * Office location configuration
 */
export interface OfficeLocationConfig {
  enabled: boolean;
  city: string;
  country: string;
  address: string;
  fullAddress: string;
}

/**
 * Offices configuration
 */
export interface OfficesConfig {
  [locationId: string]: OfficeLocationConfig;
}

/**
 * Route availability for "Coming Soon" feature
 */
export interface RouteConfig {
  available: boolean;
  message?: string;
  redirect?: string;
  external?: boolean;
}

/**
 * Default messages configuration
 */
export interface DefaultsConfig {
  comingSoonTitle: string;
  comingSoonMessage: string;
  comingSoonButtonText: string;
}

/**
 * Section IDs for the homepage
 */
export type SectionId =
  | 'hero'
  | 'featureSlider'
  | 'about'
  | 'approach'
  | 'stats'
  | 'services'
  | 'process'
  | 'testimonial'
  | 'ctaMid'
  | 'blog'
  | 'ctaFinal';

/**
 * Sections configuration map
 */
export type SectionsConfig = Record<SectionId, SectionConfig>;

/**
 * Site-wide configuration (v2)
 */
export interface SiteConfig {
  /** Section visibility and element control */
  sections: SectionsConfig;
  /** Navigation structure (header & footer) */
  navigation: NavigationConfig;
  /** Social media links */
  social: SocialConfig;
  /** Office locations */
  offices: OfficesConfig;
  /** Route availability map - controls Coming Soon behavior */
  routes: Record<string, RouteConfig>;
  /** Default messages */
  defaults: DefaultsConfig;
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
  enabled: boolean;
  id?: string;
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
  enabled?: boolean;
  id: string;
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
  enabled: boolean;
  id?: string;
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
  enabled: boolean;
  id?: string;
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
