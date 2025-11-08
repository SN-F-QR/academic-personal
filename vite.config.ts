import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import mdx from '@mdx-js/rollup';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [mdx({ jsxImportSource: 'solid-js/h' }), solid(), tailwindcss()],
});
