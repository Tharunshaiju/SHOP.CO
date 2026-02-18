import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          redux: ['@reduxjs/toolkit', 'react-redux'],
          icons: ['react-icons', 'lucide-react'],
        },
      },
    },
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    chunkSizeWarningLimit: 800,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@reduxjs/toolkit', 'react-redux'],
  },
})
