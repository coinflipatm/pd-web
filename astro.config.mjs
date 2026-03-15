import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://towtruck.cv',
  output: 'static',
  build: {
    format: 'directory',
  },
});
