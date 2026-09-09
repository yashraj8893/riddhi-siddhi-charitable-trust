import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: true,
    cors: true
  },
  preview: {
    port: 4173,
    host: true,
    allowedHosts: true,
    cors: true
  }
})
