import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://5sec-tools.pages.dev',
  integrations: [sitemap()],
});
