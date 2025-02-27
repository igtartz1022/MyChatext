import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/profile-pics': 'http://localhost:7000',
      '/post-pics': 'http://localhost:7000',
    },
  },
  build: {
    rollupOptions: {
      external: ['react-icons/io'],
    },
  },
})
