import { defineCollection, z } from 'astro:content';

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      tag: z.string(),
      googleDocUrl: z.string().url(),
    }),
  }),
};