import path from 'path';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '',
  plugins: [svelte()],
  optimizeDeps: {
    exclude: []
  },
  resolve: {
    alias: {
      '@img': path.resolve('./src/assets/img'),
      '@fonts': path.resolve('./src/assets/fonts'),
      '@metamask': path.resolve('./src/assets/img/metamask_guide'),
      '@thumbnails': path.resolve('./src/assets/img/video_thumbnails'),
      '@stores': path.resolve('./src/stores'),
      '@helpers': path.resolve('./src/helpers')
    }
  }
});
