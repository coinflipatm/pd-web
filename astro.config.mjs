import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://towtruck.cv',
  output: "hybrid",

  build: {
    format: 'directory',
  },

  adapter: cloudflare()
});