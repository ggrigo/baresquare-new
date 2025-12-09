/**
 * Astro Content Collections Configuration
 *
 * Defines schemas for blog posts and other content types.
 */

import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    author: z.string(),
    authorImage: z.string().optional(),
    date: z.date(),
    readTime: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    draft: z.boolean().default(false),
  }),
});

const learnCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['ai', 'data', 'search', 'revenue']),
    keywords: z.array(z.string()),
    sourcePosts: z.array(z.string()),
    lastmod: z.string(),
    highValue: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  learn: learnCollection,
};
