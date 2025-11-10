import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 5 configuration compatible with Node 18 and Tizen packaging
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true
  },
  preview: {
    port: 3000,
    strictPort: true
  },
  base: './'
})
