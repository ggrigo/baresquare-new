import { defineConfig } from 'astro/config';

export default defineConfig({
  // Static output for Netlify deployment
  output: 'static',

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
