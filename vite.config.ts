import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// `base` is '/' for local dev and a future custom domain (theagoramedia.com).
// The GitHub Pages workflow sets VITE_BASE=/agoramedia/ for the project-site URL.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: { port: 8080, host: '::' },
});
