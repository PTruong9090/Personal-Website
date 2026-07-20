import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['live', 'in-development', 'paused', 'ongoing']),
    statusDetail: z.string().optional(),
    dates: z.string(),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    tech: z.array(z.string()),
    metrics: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
          caveat: z.string().optional(),
        }),
      )
      .optional(),
    changelog: z.array(z.object({ date: z.string(), text: z.string() })),
  }),
});

export const collections = { projects };
