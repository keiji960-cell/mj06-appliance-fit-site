import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mj06-appliance-fit-site.vercel.app',
  integrations: [mdx(), sitemap()],
});
