import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: true,
    host: true,
    allowedHosts: ["creation-roman-released-plates.trycloudflare.com"],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        service: resolve(__dirname, 'service.html'),
        blog: resolve(__dirname, 'blog.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        cookies: resolve(__dirname, 'cookies.html'),
        licenses: resolve(__dirname, 'licenses.html'),
        404: resolve(__dirname, '404.html'),
      },
    },
  },
});
