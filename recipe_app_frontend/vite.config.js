import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for Tizen development with explicit 0.0.0.0 binding
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0', // bind explicitly for container/external access
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0',
  },
  base: './',
})
