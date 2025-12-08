/**
 * SONY Case Study Content
 *
 * SONY Partnership: 3 Programs
 * 1. 404 Monitoring & Resolution - Detect 404s, auto-resolve with redirects
 * 2. SEO Optimization - AI-powered SEO → 40% budget cut
 * 3. Data Accuracy - Campaign monitoring → 85% faster resolution (Stephanie White quote)
 *
 * Receives SEO redirects from:
 * - /customer-stories/*
 * - /customer-stories
 */

import type { CaseStudyContent } from '../../config/types';

export const sonyContent: CaseStudyContent = {
  brand: 'SONY',
  metric: '85%',
  metricLabel: 'faster issue resolution',
  challenge: {
    headline: 'Three problems. One partnership.',
    description: 'SONY faced compounding challenges across their digital operations: 404 errors damaging SEO rankings, manual SEO management eating budget, and campaign data issues going undetected for days. They needed AI that could work across all three—without adding headcount.',
  },
  solution: {
    headline: 'AI that works across the stack.',
    description: 'We deployed three integrated systems: automated 404 detection that resolves issues before they impact rankings, AI-powered SEO optimization that cut their budget by 40%, and real-time campaign monitoring that surfaces data accuracy issues the moment they appear.',
  },
  results: [
    {
      value: '40%',
      label: 'SEO budget reduction',
    },
    {
      value: '85%',
      label: 'Faster issue resolution',
    },
    {
      value: '10x',
      label: 'AI actions per human input',
    },
    {
      value: '2018',
      label: 'Partnership since',
    },
  ],
  quote: {
    text: 'A human action triggers 10 AI-driven actions. The time to identify and resolve issues dropped by 85%.',
    author: 'Stephanie White',
    title: 'Strategy & Operations',
    company: 'SONY',
  },
  cta: {
    headline: 'Ready to transform your operations?',
    buttonText: 'Get in touch',
    buttonHref: '/contact',
  },
  // Cross-reference to related service
  relatedService: {
    title: 'Data & Operations',
    headline: 'Learn how we automate data operations for enterprise',
    href: '/services/data-operations',
  },
};
