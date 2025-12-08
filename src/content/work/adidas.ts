/**
 * adidas Case Study Content
 *
 * Enterprise L&D with on-premise GenAI.
 * 30,000 employees with secure, on-premise deployment.
 *
 * Related service: Learning & Development
 */

import type { CaseStudyContent } from '../../config/types';

export const adidasContent: CaseStudyContent = {
  brand: 'adidas',
  metric: '30K',
  metricLabel: 'employees served',
  challenge: {
    headline: 'Knowledge locked in silos.',
    description:
      'adidas had decades of institutional knowledge scattered across systems, documents, and the minds of long-tenured employees. New hires took months to ramp. Teams asked the same questions repeatedly. Critical expertise was walking out the door with every departure. And any AI solution had to meet strict data sovereignty requirements—nothing could leave their infrastructure.',
  },
  solution: {
    headline: 'AI that lives on-premise.',
    description:
      'We deployed custom AI assistants trained on adidas internal knowledge—policies, processes, product specs, training materials. Completely on-premise, with zero data leaving their infrastructure. Employees get instant, accurate answers. New hires ramp faster. Institutional knowledge is preserved and accessible to everyone who needs it.',
  },
  results: [
    {
      value: '30K',
      label: 'Employees served',
    },
    {
      value: '100%',
      label: 'On-premise deployment',
    },
    {
      value: '50%',
      label: 'Faster onboarding',
    },
    {
      value: '24/7',
      label: 'Knowledge access',
    },
  ],
  quote: {
    text:
      "Our data never leaves our walls, but now every employee has access to decades of institutional knowledge. It's transformed how we onboard and support our teams.",
    author: 'Marcus Weber',
    title: 'VP of Learning & Development',
    company: 'adidas',
  },
  cta: {
    headline: 'Ready to unlock your workforce potential?',
    buttonText: 'Get in touch',
    buttonHref: '/contact',
  },
  // Cross-reference to related service
  relatedService: {
    title: 'Learning & Development',
    headline: 'Learn how we deploy enterprise AI for L&D',
    href: '/services/learning-development',
  },
};
