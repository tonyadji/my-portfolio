import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		tagline: z.string(),
		repo: z.url(),
		status: z.enum(['wip', 'active']),
		stack: z.array(z.string()),
		order: z.number(),
	}),
});

export const collections = { projects };
