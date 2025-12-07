/**
 * Services Section Content
 * Updated to match Baresquare 2026 presentation
 */

import type { ServicesContent } from '../../config/types';

export const servicesContent: ServicesContent = {
  introHeadline: "Four ways we turn AI into business outcomes.",
  introDescription: 'Not demos. Not pilots. Real automation running at scale today.',
  services: [
    {
      enabled: true,
      id: 'revenue-performance',
      title: 'Revenue Performance',
      description: "Don't leave money on the table. Intelligent automation that forecasts, explains, and optimizes—capturing value you're currently missing.",
      icon: '/icons/abstract/shape-04.svg',
      href: '/services/revenue-performance',
    },
    {
      enabled: true,
      id: 'ai-search-marketing',
      title: 'AI Search & Marketing',
      description: 'Be found in the AI era. Adapt to AI-driven discovery, agentic commerce, and win the citation war against competitors.',
      icon: '/icons/abstract/shape-07.svg',
      href: '/services/ai-search-marketing',
    },
    {
      enabled: true,
      id: 'data-operations',
      title: 'Data & Operations',
      description: 'Automation that eliminates manual processes and fixes friction. Connecting your existing infrastructure to unlock efficiency.',
      icon: '/icons/abstract/shape-10.svg',
      href: '/services/data-operations',
    },
    {
      enabled: true,
      id: 'learning-development',
      title: 'Learning & Development',
      description: 'Empower every employee. AI-powered learning matched to roles, skill gaps, and career paths—deployed on enterprise infrastructure.',
      icon: '/icons/abstract/shape-08.svg',
      href: '/services/learning-development',
    },
    {
      enabled: false,
      id: 'regulatory',
      title: 'Regulatory Guidance',
      description: 'Our consultants guide product teams through scientific, technical, and regulatory alignment—so nothing stalls in translation.',
      icon: '/icons/abstract/shape-09.svg',
      href: '/services/regulatory',
    },
    {
      enabled: false,
      id: 'ops',
      title: 'Collaborative Ops',
      description: 'We facilitate coordination between R&D, engineering, and leadership—helping complex teams think clearly and build cohesively.',
      icon: '/icons/abstract/shape-03.svg',
      href: '/services/ops',
    },
  ],
};
