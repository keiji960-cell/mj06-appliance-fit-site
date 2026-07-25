import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    heroImage: z.string().optional(),
  }),
});

const dimensionsSchema = z.object({
  widthMm: z.number(),
  heightMm: z.number(),
  depthMm: z.number(),
});

const appliances = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.enum(['미니냉장고', '소형세탁기', '창문형에어컨', '제습기']),
    brand: z.string(),
    model: z.string(),
    typeLabel: z.string(),
    capacityValue: z.number(),
    capacityUnit: z.string(),
    dimensions: dimensionsSchema,
    installClearanceNote: z.string(),
    source: z.object({
      name: z.string(),
      url: z.string(),
      asOfDate: z.string(),
    }),
  }),
});

export const collections = { posts, appliances };
