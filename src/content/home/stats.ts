/**
 * Stats Section Content
 */

import type { StatsContent } from '../../config/types';

export const statsContent: StatsContent = {
  badge: 'Consulting Impact',
  headline: 'Measurable outcomes',
  stats: [
    {
      id: 'avgROI',
      enabled: true,
      value: '32%',
      label: 'Average ROI increase',
      description: 'for our strategic consulting clients',
    },
    {
      id: 'projectsDelivered',
      enabled: true,
      value: '150+',
      label: 'Projects delivered',
      description: 'across healthcare, biotech, and tech',
    },
    {
      id: 'clientRetention',
      enabled: true,
      value: '98%',
      label: 'Client satisfaction',
      description: 'based on post-engagement surveys',
    },
  ],
};
