/**
 * AI Search & Marketing Service Page Content
 *
 * AI-powered search optimization and marketing automation
 * for enterprise teams.
 */

import type { ServicePageContent } from '../../config/types';

export const aiSearchMarketingContent: ServicePageContent = {
  badge: 'AI Search & Marketing',
  title: 'Search that adapts. Marketing that learns.',
  description:
    'AI-powered optimization for search, content, and campaigns. Reach the right customers with the right message—automatically.',

  problem: {
    headline: 'Marketing is getting harder.',
    description:
      'Search algorithms change weekly. Customer behavior shifts constantly. Your team can\'t test fast enough to keep up. Meanwhile, AI is reshaping how people find and buy products. Traditional marketing playbooks are failing.',
  },

  solution: {
    headline: 'AI that moves as fast as the market.',
    description:
      'Our AI continuously optimizes your search presence, content strategy, and campaign performance. It tests, learns, and adapts faster than any human team. From SEO to paid search to product discovery—intelligent automation that compounds.',
  },

  features: [
    {
      title: 'Intelligent SEO',
      description:
        'Automated content optimization, keyword targeting, and technical SEO monitoring. Stay ahead of algorithm changes without constant manual work.',
    },
    {
      title: 'Search Experience Optimization',
      description:
        'Improve on-site search results with AI-powered relevance tuning. Help customers find what they want—and discover what they need.',
    },
    {
      title: 'Campaign Automation',
      description:
        'AI-driven bid management, audience targeting, and creative optimization across Google, Meta, and retail media networks.',
    },
    {
      title: 'Content Intelligence',
      description:
        'Identify content gaps, predict trending topics, and optimize existing content for maximum search visibility.',
    },
  ],

  cta: {
    headline: 'Ready to modernize your marketing?',
    description: 'See how AI can accelerate your growth.',
    buttonText: 'Get in touch',
    buttonHref: '/contact',
  },

  // No related case study yet - will link to VOGUE when created
};
