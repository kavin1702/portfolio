import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from https://kavin1702.github.io/portfolio/,
// so every asset path must start with /portfolio/.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: { target: 'es2019', cssCodeSplit: false },
});
