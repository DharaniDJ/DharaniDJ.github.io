import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const PRELOAD_FONTS = [
  /bricolage-grotesque-latin-wght-normal.*\.woff2$/,
  /inter-latin-wght-normal.*\.woff2$/,
  /jetbrains-mono-latin-wght-normal.*\.woff2$/,
];

function preloadFonts(): Plugin {
  let base = '/';
  return {
    name: 'preload-fonts',
    apply: 'build',
    configResolved(config) {
      base = config.base;
    },
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        const files = Object.keys(ctx.bundle ?? {});
        return PRELOAD_FONTS.map((pattern) => {
          const file = files.find((f) => pattern.test(f));
          if (!file) throw new Error(`preload-fonts: no emitted font matches ${pattern}`);
          return {
            tag: 'link',
            attrs: { rel: 'preload', href: `${base}${file}`, as: 'font', type: 'font/woff2', crossorigin: '' },
            injectTo: 'head' as const,
          };
        });
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), preloadFonts()],
  base: '/',
});
