// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ubc.my.id', // TODO: Replace with your actual domain
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
});