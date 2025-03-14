import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enable: true
  },
  server: {
    port: 3000
  }
})
