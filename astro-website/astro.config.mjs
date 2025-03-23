// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import svelte from '@astrojs/svelte';
import robotsTxt from 'astro-robots-txt';

import robotsConfig from './robots.config.ts';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://itsfinniii.com',
  integrations: [
    svelte(),
    robotsTxt(robotsConfig),
    (await import("@playform/compress")).default({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
    icon()
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    service: passthroughImageService(),
    remotePatterns: [
      { protocol: "http", hostname: '192.168.2.201', port: '8055' }
    ]
  }
});