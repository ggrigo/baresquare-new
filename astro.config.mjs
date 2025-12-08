import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Site URL for canonical URLs, OG tags, and sitemap
  site: 'https://baresquare.com',

  // Static output for Netlify deployment
  output: 'static',

  // Sitemap integration
  integrations: [sitemap()],

  // Build settings
  build: {
    // Enable asset hashing for cache busting
    assets: '_assets'
  },

  // Development settings
  server: {
    port: 4321,
    host: true
  },

  // Vite configuration for CSS
  vite: {
    css: {
      // Enable CSS source maps in dev
      devSourcemap: true
    }
  }
});
