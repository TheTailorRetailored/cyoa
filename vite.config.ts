import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use BASE_PATH env for GitHub Pages subpath, fallback to root
// Example for project pages: BASE_PATH=/your-repo-name/
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})

