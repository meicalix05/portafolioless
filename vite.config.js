import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',  
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    }
  },
  server: {
    port: 5178
  }
})
