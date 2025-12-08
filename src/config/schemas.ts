/**
 * JSON-LD Schema Generators
 *
 * Generate structured data for search engines.
 * Schemas follow Schema.org specifications.
 */

import { seoConfig } from './seo.config';

/**
 * Organization Schema
 * Use on homepage and about page
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seoConfig.organization.name,
    url: seoConfig.siteUrl,
    logo: new URL(seoConfig.organization.logo, seoConfig.siteUrl).href,
    foundingDate: seoConfig.organization.foundingDate,
    description: seoConfig.defaultDescription,
    address: seoConfig.addresses.map((addr) => ({
      '@type': 'PostalAddress',
      addressLocality: addr.locality,
      addressCountry: addr.country,
    })),
    sameAs: seoConfig.socialProfiles,
  };
}

/**
 * Service Schema
 * Use on service pages (/services/*)
 */
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: new URL(service.url, seoConfig.siteUrl).href,
    provider: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
    },
  };
}

/**
 * Case Study / Article Schema
 * Use on case study pages (/work/*)
 */
export function getCaseStudySchema(caseStudy: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.headline,
    description: caseStudy.description,
    url: new URL(caseStudy.url, seoConfig.siteUrl).href,
    datePublished: caseStudy.datePublished || new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: new URL(seoConfig.organization.logo, seoConfig.siteUrl).href,
      },
    },
  };
}

/**
 * Contact Page Schema
 * Use on contact page
 */
export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Baresquare',
    description: 'Get in touch with Baresquare to discuss how AI can help your business.',
    url: new URL('/contact', seoConfig.siteUrl).href,
    mainEntity: {
      '@type': 'Organization',
      name: seoConfig.organization.name,
      url: seoConfig.siteUrl,
    },
  };
}
