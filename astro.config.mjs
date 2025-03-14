import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  devToolbar: {
    enable: true
  },
  server: {
    port: 3000
  }
})

