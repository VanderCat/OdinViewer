import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/OdinViewer/",
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['vds-video', 'vds-media'].includes(tag),
      }
    }
  })]
})
