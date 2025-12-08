/**
 * SONY Case Study Content
 *
 * Receives SEO redirects from:
 * - /customer-stories/*
 * - /customer-stories
 */

import type { CaseStudyContent } from '../../config/types';

export const sonyContent: CaseStudyContent = {
  brand: 'SONY',
  metric: '40%',
  metricLabel: 'cost reduction',
  challenge: {
    headline: 'Campaign chaos at scale.',
    description: 'SONY runs thousands of digital campaigns across multiple regions and platforms. Manual monitoring meant issues went undetected for days. The team spent more time building reports than acting on insights. They needed visibility and speed—without adding headcount.',
  },
  solution: {
    headline: 'AI-powered campaign intelligence.',
    description: 'We deployed automated monitoring across their entire campaign ecosystem. Anomaly detection surfaces issues in real-time. Automated diagnostics explain what happened and why. The system runs 24/7, scaling effortlessly across regions and channels.',
  },
  results: [
    {
      value: '40%',
      label: 'Cost reduction',
    },
    {
      value: '85%',
      label: 'Faster issue resolution',
    },
    {
      value: '10x',
      label: 'Action multiplier per human input',
    },
    {
      value: '2018',
      label: 'Running continuously since',
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
};
