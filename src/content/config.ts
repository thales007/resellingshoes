import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    readTime: z.string(),
    blurb: z.string(),
  }),
});

export const collections = { articles };
