import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://apex-content-lab.com',
  redirects: {
    '/services/lead-magnet-launchpad': '/services/lead-capture-system',
    '/services/email-marketing-infrastructure': '/services/lead-nurture-system',
    '/services/content-visibility-system': '/services/content-acquisition-system',
  },
  integrations: [tailwind(), sitemap()],
});
