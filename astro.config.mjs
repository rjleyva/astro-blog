import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  devToolbar: {
    enable: true
  },
  server: {
    port: 3000
  }
})
