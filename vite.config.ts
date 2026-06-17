import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/' works for DharaniDJ.github.io (root repo)
  // Change to '/portfolio/' if using a non-root repo name
  base: '/',
})
