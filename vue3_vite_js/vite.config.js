import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
    minify: false
  },
  plugins: [vue()],
})
