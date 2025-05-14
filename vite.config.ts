import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'docs',
  plugins: [vue()],
  server: {
    open: true
  }
})
