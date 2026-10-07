import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const reports = defineCollection({
	loader: glob({ base: './src/content/reports', pattern: '**/*.mdx' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			order: z.number(),
			imageDesktop: image(),
			imageMobile: image(),
			imageAlt: z.string(),
			description: z.string(),
		}),
});

export const collections = { reports };