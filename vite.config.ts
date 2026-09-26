import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import fs from 'fs';

// GitHub Pages serves a project site from /<repo-name>/, so the CI workflow
// sets VITE_BASE. Everywhere else (local dev, a root domain) this stays '/'.
const base = process.env.VITE_BASE || '/';

/**
 * GitHub Pages has no rewrite rules, so a direct hit on /blog would 404.
 * It does serve 404.html for any unmatched path, so shipping a copy of
 * index.html under that name makes client-side routing work.
 */
const spaFallback = () => ({
  name: 'spa-404-fallback',
  closeBundle() {
    const out = path.resolve(__dirname, 'build');
    const index = path.join(out, 'index.html');
    if (fs.existsSync(index)) {
      fs.copyFileSync(index, path.join(out, '404.html'));
    }
  },
});

export default defineConfig({
  base,
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
