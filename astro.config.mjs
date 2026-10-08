import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Assumes a `yogeshmoodoo.github.io` repo, so no `base` is needed.
export default defineConfig({
  site: 'https://yogeshmoodoo.github.io',
  integrations: [sitemap()],
});
