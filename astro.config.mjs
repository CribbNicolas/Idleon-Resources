// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import solidJs from '@astrojs/solid-js';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@tailwind': resolve(__dirname, './src/styles/global.css'),
      '@styles': resolve(__dirname, './src/styles')
    }
  },
  },
  

  integrations: [solidJs()]
});