import { getCollection } from 'astro:content';

export async function getPosts() {
  return (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getLabs() {
  return (await getCollection('laboratorios', ({ data }) => !data.draft))
    .sort((a, b) => a.data.numero - b.data.numero);
}

export function readingTime(body = '') {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min de lectura`;
}
