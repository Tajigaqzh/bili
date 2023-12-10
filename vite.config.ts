import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
/**
 * @description: vite.config.ts
 */
export default defineConfig({
  plugins: [vue()],

  resolve:{
    alias:{
      '@': path.resolve(__dirname, "./src")
    }
  }
})
