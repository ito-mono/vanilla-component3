import { resolve } from 'path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), dts()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@wf': resolve(__dirname, 'src/components/Workflow'),
    },
  },
  build: {
    lib: {
      entry: './index.ts',
      name: 'index',
      fileName: 'index',
      formats: ['es'],
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
});
