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
      id: 'vogue-ecommerce',
      title: '+4% Revenue',
      description: 'AI-powered ecommerce optimization driving additional revenue through intelligent insights and automated decision-making.',
      image: '/images/feature-work-1.jpg',
      imageAlt: 'VOGUE ecommerce project',
      href: '/work/vogue',
      brandLogo: '/images/brands/vogue-logo.svg',
    },
    {
      enabled: true,
      id: 'sony-seo',
      title: '40% Cost Reduction',
      description: 'Since 2018, delivering AI-driven results: 40% decrease on SEO budget, 90% reduction in 404 errors.',
      image: '/images/feature-work-2.jpg',
      imageAlt: 'SONY partnership project',
      href: '/work/sony',
      brandLogo: '/images/brands/sony-logo.svg',
    },
    {
      enabled: true,
      id: 'adidas-genai',
      title: '30K Users',
      description: 'First GenAI cross-department and global HR solution at adidas—reaching 30,000 users on their enterprise cloud.',
      image: '/images/feature-work-3.jpg',
      imageAlt: 'adidas GenAI project',
      href: '/work/adidas',
      brandLogo: '/images/brands/adidas-logo.svg',
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
