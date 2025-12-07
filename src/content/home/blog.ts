/**
 * Blog Grid Section Content
 */

import type { BlogGridContent } from '../../config/types';

export const blogContent: BlogGridContent = {
  badge: 'Our Journal',
  headline: 'Latest Insights',
  posts: [
    {
      title: 'The Future of AI in Healthcare',
      excerpt: 'Exploring how artificial intelligence is transforming patient care and medical research across the globe.',
      category: 'Technology',
      categoryColor: 'purple',
      image: '/images/blog-ai-healthcare.svg',
      imageAlt: 'AI and healthcare visualization',
      href: '/blog/ai-healthcare',
      date: 'Dec 1, 2024',
    },
    {
      title: 'Building Sustainable Business Models',
      excerpt: 'How leading companies are integrating sustainability into their core strategies for long-term success.',
      category: 'Strategy',
      categoryColor: 'green',
      image: '/images/blog-sustainable.svg',
      imageAlt: 'Sustainability visualization',
      href: '/blog/sustainable-business',
      date: 'Nov 28, 2024',
    },
    {
      title: 'Innovation in Biotech',
      excerpt: 'The latest breakthroughs shaping the future of biotechnology and life sciences industries.',
      category: 'Research',
      categoryColor: 'orange',
      image: '/images/blog-biotech.svg',
      imageAlt: 'Biotech innovation visualization',
      href: '/blog/biotech-innovation',
      date: 'Nov 25, 2024',
    },
  ],
  showViewAll: true,
  viewAllHref: '/blog',
};
