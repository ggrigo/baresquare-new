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
      description: 'We start by mapping the problem with your team—understanding the real challenges before any technology enters the conversation.',
    },
    {
      number: '02',
      title: 'AI where it matters',
      description: 'We automate only what humans already understand. AI amplifies expertise—it doesn\'t replace the thinking that got you here.',
    },
    {
      number: '03',
      title: 'Metrics that move the business',
      description: 'We measure what your stakeholders actually care about—outcomes tied to growth, efficiency, and strategic goals.',
    },
  ],
};
