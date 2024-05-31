import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: "/static/",
  build: {
    manifest: "manifest.json",
    outDir: resolve("../static/"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: '@/pages/home/index.jsx',
        authors: '@/pages/authors/index.jsx',
        books: '@/pages/books/index.jsx',
      }
    },
    output: {
      manualChunks: {
        react: ['react', 'react-dom']
      },
    },
  },
})
