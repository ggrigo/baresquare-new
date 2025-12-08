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
      description: 'We map the problem with your team before technology enters the conversation.',
    },
    {
      number: '02',
      title: 'AI where it matters',
      description: 'We automate what humans already understand.',
    },
    {
      number: '03',
      title: 'Metrics that move the business',
      description: 'Outcomes your stakeholders actually measure.',
    },
  ],
};
