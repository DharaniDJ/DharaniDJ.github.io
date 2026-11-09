# dharanidj.github.io

Personal portfolio of Dharani Chinta, Software Development Engineer at Amazon working on GenAI platforms and distributed systems. Live at [dharanidj.github.io](https://dharanidj.github.io/).

## Stack

- React 19 + TypeScript (strict)
- Vite 8
- Tailwind CSS 3.4 with design tokens defined as CSS custom properties in `src/index.css`
- Framer Motion for reveal, count-up and nav transitions (all disabled under `prefers-reduced-motion`)
- Self-hosted variable fonts via `@fontsource-variable` (Bricolage Grotesque, Inter, JetBrains Mono)

All content lives in `src/data/portfolio.ts`, typed by `src/types/index.ts`.

## Development

Requires Node 22.13 or newer (see `.nvmrc`).

```bash
npm install
npm run dev      # local dev server
npm run lint     # ESLint
npm run build    # type-check and production build into dist/
npm run preview  # serve the production build locally
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages.
