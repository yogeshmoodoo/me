import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Assumes a `ymoodoo.github.io` repo, so no `base` is needed.
export default defineConfig({
  site: 'https://ymoodoo.github.io',
  integrations: [sitemap()],
});
