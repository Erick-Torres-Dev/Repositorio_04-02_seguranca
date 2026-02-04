import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/landing_page/',
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  }
})
