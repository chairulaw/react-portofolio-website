import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/your-base-url/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});