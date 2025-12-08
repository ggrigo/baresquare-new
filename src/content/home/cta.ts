/**
 * CTA Sections Content
 */

import type { CTAContent } from '../../config/types';

/**
 * Mid-page CTA (appears after testimonial)
 */
export const ctaMidContent: CTAContent = {
  headline: 'From insight to',
  accentWord: 'impact.',
  description: 'Consulting that translates innovation into outcomes.',
  ctaText: 'Get Started',
  ctaHref: '/contact',
  secondaryText: 'Get in touch',
  secondaryHref: '/contact',
};

/**
 * Final CTA (appears at bottom of page)
 * Includes embedded quote panel inside the colored section
 */
export const ctaFinalContent: CTAContent = {
  headline: 'Ready to shape the',
  accentWord: 'future?',
  description: "Let's discuss how Baresquare can help accelerate your vision.",
  ctaText: 'Contact us',
  ctaHref: '/contact',
  // Quote panel that appears inside the colored CTA section
  quote: 'A human action triggers 10 AI-driven actions. The time to identify and resolve issues dropped by 85%.',
  quoteAuthor: 'Stephanie White',
  quoteAuthorTitle: 'Strategy & Operations',
  quoteCompany: 'SONY',
};
