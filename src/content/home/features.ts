/**
 * Feature Slider Content
 */

import type { FeatureSliderContent } from '../../config/types';

export const featureSliderContent: FeatureSliderContent = {
  badge: 'Featured Work',
  headline: 'Faster, more confident decisions.',
  features: [
    {
      enabled: true,
      id: 'genetic-insights',
      title: 'Unlocking new genetic and health discovery insights',
      description: 'Strategic transformation for a leading biotech company',
      image: '/images/feature-1.svg',
      imageAlt: 'Genetic research project',
      href: '/work/genetic-insights',
    },
    {
      enabled: true,
      id: 'innovation-platform',
      title: 'Powering breakthrough innovation',
      description: 'Digital platform enabling next-generation research',
      image: '/images/feature-2.svg',
      imageAlt: 'Innovation platform project',
      href: '/work/innovation-platform',
    },
    {
      enabled: true,
      id: 'clinical-ai',
      title: 'Accelerating clinical discoveries',
      description: 'AI-driven analysis for faster patient outcomes',
      image: '/images/feature-3.svg',
      imageAlt: 'Clinical discoveries project',
      href: '/work/clinical-ai',
    },
    {
      enabled: true,
      id: 'patient-engagement',
      title: 'Transforming patient engagement',
      description: 'Next-gen healthcare communication platform',
      image: '/images/feature-1.svg',
      imageAlt: 'Patient engagement project',
      href: '/work/patient-engagement',
    },
    {
      enabled: true,
      id: 'drug-development',
      title: 'Data-driven drug development',
      description: 'ML-powered research acceleration pipeline',
      image: '/images/feature-2.svg',
      imageAlt: 'Drug development project',
      href: '/work/drug-development',
    },
  ],
};
