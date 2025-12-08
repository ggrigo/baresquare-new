/**
 * VOGUE Case Study Content
 *
 * E-commerce revenue optimization with autonomous AI.
 * +4% incremental revenue through automated campaign management.
 *
 * Related service: Revenue Performance
 */

import type { CaseStudyContent } from '../../config/types';

export const vogueContent: CaseStudyContent = {
  brand: 'VOGUE',
  metric: '+4%',
  metricLabel: 'incremental revenue',
  challenge: {
    headline: 'Revenue slipping through the cracks.',
    description:
      'VOGUE Business was losing revenue to problems they could see but not fix fast enough. Stockouts triggered ad spend on unavailable products. Pricing mismatches went unnoticed for hours. Campaign performance data was scattered across platforms. By the time their team spotted issues, the damage was done.',
  },
  solution: {
    headline: 'Tywin takes the wheel.',
    description:
      'We deployed Tywin, our autonomous commerce agent, to monitor their entire operation in real-time. When inventory runs low, Tywin pauses affected campaigns. When conversion rates drop, Tywin investigates and alerts. When opportunities emerge, Tywin captures them—automatically, 24/7.',
  },
  results: [
    {
      value: '+4%',
      label: 'Incremental revenue',
    },
    {
      value: '60x',
      label: 'Faster detection',
    },
    {
      value: '24/7',
      label: 'Autonomous monitoring',
    },
    {
      value: '10x',
      label: 'Team productivity',
    },
  ],
  quote: {
    text:
      "Tywin catches things we'd never see in time. It's like having a team member who never sleeps and never misses anything.",
    author: 'Clarissa Schmidt',
    title: 'Head of E-commerce',
    company: 'VOGUE Business',
  },
  cta: {
    headline: 'Ready to capture more revenue?',
    buttonText: 'Get in touch',
    buttonHref: '/contact',
  },
  // Cross-reference to related service
  relatedService: {
    title: 'Revenue Performance',
    headline: 'Learn how Tywin drives revenue for commerce teams',
    href: '/services/revenue-performance',
  },
};
