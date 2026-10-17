// astro.config.mjs
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
// PENDIENTE: definir SITE_URL con el dominio real (en .env o en Vercel).
const SITE_URL = env.SITE_URL || process.env.SITE_URL || 'https://example.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [
    sitemap({ filter: (page) => !page.includes('/404') }),
  ],
});
