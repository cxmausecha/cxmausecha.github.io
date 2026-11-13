// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Dirección pública del sitio en GitHub Pages
  site: 'https://cxmausecha.github.io',
  integrations: [mdx(), sitemap()],
  // Content Security Policy generada automáticamente (meta tag con hashes)
  security: { csp: true },
  markdown: {
    // Prism genera clases CSS (no estilos en línea), compatible con la CSP estricta
    syntaxHighlight: 'prism',
  },
});
