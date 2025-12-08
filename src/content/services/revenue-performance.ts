/**
 * Revenue Performance Service Page Content
 *
 * E-commerce revenue optimization powered by Tywin,
 * the autonomous agent for commerce teams.
 */

import type { ServicePageContent } from '../../config/types';

export const revenuePerformanceContent: ServicePageContent = {
  badge: 'Revenue Performance',
  title: "AI that finds revenue you're missing.",
  description:
    'Autonomous agents that monitor your campaigns, inventory, pricing, and competitors—then take action before opportunities slip away.',

  problem: {
    headline: 'Revenue leaks are everywhere.',
    description:
      'Stockouts. Pricing mismatches. Underperforming campaigns. Competitor moves you catch too late. Your data shows these problems—but by the time someone spots them, the revenue is already lost. Commerce moves faster than human attention.',
  },

  solution: {
    headline: 'Meet Tywin.',
    description:
      'Our autonomous agent monitors your entire commerce operation in real-time. When inventory runs low, Tywin adjusts campaigns. When competitors cut prices, Tywin alerts your team. When opportunities emerge, Tywin captures them—automatically. 60x faster detection. 10x team productivity.',
  },

  features: [
    {
      title: 'Campaign Optimization',
      description:
        'Real-time performance monitoring across all channels. Automatic budget reallocation when products go out of stock or campaigns underperform.',
    },
    {
      title: 'Inventory Intelligence',
      description:
        'Stockout prediction and prevention. Coordinate marketing with inventory levels to maximize revenue without overselling.',
    },
    {
      title: 'Competitive Monitoring',
      description:
        'Track competitor pricing, promotions, and product launches. Get actionable alerts when the market shifts.',
    },
    {
      title: 'Revenue Anomaly Detection',
      description:
        'Instant alerts when conversion rates drop, cart abandonment spikes, or revenue patterns break. Know about problems before they cost you.',
    },
  ],

  cta: {
    headline: 'Ready to capture more revenue?',
    description: 'See how Tywin can work for your commerce team.',
    buttonText: 'Get in touch',
    buttonHref: '/contact',
  },

  // Cross-reference to related case study
  relatedCaseStudy: {
    brand: 'VOGUE',
    headline: 'See how we drove +4% incremental revenue for VOGUE',
    href: '/work/vogue',
  },
};
