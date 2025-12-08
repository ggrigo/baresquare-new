/**
 * Learning & Development Service Page Content
 *
 * AI-powered learning and development for enterprise HR teams.
 * Related to adidas case study (30K employees, on-premise GenAI).
 */

import type { ServicePageContent } from '../../config/types';

export const learningDevelopmentContent: ServicePageContent = {
  badge: 'Learning & Development',
  title: 'AI that makes your workforce smarter.',
  description:
    'Enterprise-grade AI assistants for training, knowledge management, and employee development. Secure, on-premise deployment for organizations that need control.',

  problem: {
    headline: 'Knowledge is scattered. Training is slow.',
    description:
      'Your organization has decades of expertise trapped in documents, wikis, and the heads of departing employees. Traditional training takes months. New hires struggle to ramp. Teams ask the same questions repeatedly. Meanwhile, competitors are moving faster.',
  },

  solution: {
    headline: 'AI that knows your organization.',
    description:
      'We deploy custom AI assistants trained on your internal knowledge—policies, processes, product specs, best practices. Employees get instant, accurate answers. New hires ramp in weeks, not months. Critical knowledge is preserved and accessible. Deployed on-premise for complete data control.',
  },

  features: [
    {
      title: 'Knowledge AI Assistants',
      description:
        'Custom AI trained on your documentation, policies, and processes. Employees get accurate answers instantly—no more searching through wikis or waiting for SMEs.',
    },
    {
      title: 'Accelerated Onboarding',
      description:
        'New hire AI assistants that provide context-aware guidance. Reduce time-to-productivity from months to weeks.',
    },
    {
      title: 'On-Premise Deployment',
      description:
        'Full data sovereignty with on-premise installation. Your data never leaves your infrastructure. Enterprise security standards met.',
    },
    {
      title: 'Knowledge Preservation',
      description:
        'Capture institutional knowledge before it walks out the door. AI learns from your experts and makes that expertise available to everyone.',
    },
  ],

  cta: {
    headline: 'Ready to unlock your workforce potential?',
    description: 'See how enterprise AI can transform your L&D.',
    buttonText: 'Get in touch',
    buttonHref: '/contact',
  },

  // Cross-reference to related case study
  relatedCaseStudy: {
    brand: 'adidas',
    headline: 'See how we deployed AI for 30,000 adidas employees',
    href: '/work/adidas',
  },
};
