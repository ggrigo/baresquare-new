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
      title: '+4% Incremental Revenue',
      description: 'What took 5 hours now takes 5 minutes.',
      image: 'https://zajc.pl/upload/inspirations/1920-siedziba-vogue-polska-h-34-1682292161.webp',
      imageAlt: 'VOGUE ecommerce project',
      // brandLogo: '/images/brands/vogue-logo.svg',
      href: '/work/vogue',
    },
    {
      enabled: true,
      id: 'sony-seo',
      title: '40% Reduction in SEO Budget',
      description: '90% fewer 404 errors. Live since 2018.',
      image: 'https://www.fdtimes.com/wp-content/uploads/2016/08/DSC04429-725x483@2x.jpg',
      imageAlt: 'SONY partnership project',
      // brandLogo: '/images/brands/sony-logo.svg',
      href: '/work/sony',
    },
    {
      enabled: true,
      id: 'adidas-genai',
      title: '30,000 Employees',
      description: 'On our AI coach. Global. On-premise.',
      image: 'https://images.ft.com/v3/image/raw/ftcms%3Aa205f306-bea5-11e9-9381-78bab8a70848?source=next-article&fit=scale-down&quality=highest&width=700&dpr=2',
      imageAlt: 'adidas GenAI project',
      // brandLogo: '/images/brands/adidas-logo.svg',
      href: '/work/adidas',
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
