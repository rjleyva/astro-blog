import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enable: true
  },

  server: {
    port: 3000
  },

  integrations: [react()]
})
