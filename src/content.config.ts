import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const CATEGORIAS = {
  'hacking-etico': 'Hacking ético',
  'analisis-de-malware': 'Análisis de malware',
  'auditoria-informatica': 'Auditoría informática',
  'seguridad-en-redes': 'Seguridad en redes',
} as const;

const categoria = z.enum(Object.keys(CATEGORIAS) as [keyof typeof CATEGORIAS, ...(keyof typeof CATEGORIAS)[]]);

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    categoria,
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const laboratorios = defineCollection({
  loader: glob({ base: './src/content/laboratorios', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    numero: z.number(),
    nivel: z.enum(['Básico', 'Intermedio', 'Avanzado']),
    duracion: z.string(),
    categoria,
    requisitos: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, laboratorios };
