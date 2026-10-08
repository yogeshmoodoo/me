import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Project site: the GitHub repo is `me`, so it is served from /me.
export default defineConfig({
  site: 'https://yogeshmoodoo.github.io',
  base: '/me',
  integrations: [sitemap()],
});
