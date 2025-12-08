/**
 * Process Steps Section Content
 */

import type { ProcessContent } from '../../config/types';

export const processContent: ProcessContent = {
  badge: 'Our Process',
  headline: 'How we work',
  // linkText: 'Learn more about us',  // Disabled for now
  // linkHref: '/about',
  steps: [
    {
      number: '01',
      title: 'Human intelligence first',
      description: 'Human intelligence maps the problem first.',
    },
    {
      number: '02',
      title: 'AI where it matters',
      description: 'AI automates what humans already understand.',
    },
    {
      number: '03',
      title: 'Metrics that move the business',
      description: 'Metrics the business actually cares about.',
    },
  ],
};
