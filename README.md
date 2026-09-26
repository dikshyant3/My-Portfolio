# Website Redesign for Dikshyant Dhungana

Personal academic portfolio built with **Vite + React 18 + TypeScript + Tailwind CSS**.

Original design: https://www.figma.com/design/289QicN9FTzlZRGGKR02QI/Website-Redesign-for-Dikshyant-Dhungana

## Running the code

```bash
npm install     # install dependencies
npm run dev     # start the dev server on http://localhost:3000
npm run build   # typecheck + production build into build/
npm run preview # serve the production build locally
```

## Deployment

Pushes to `main` build the site and force-push the output to the `gh-pages`
branch via `.github/workflows/deploy.yml`. Pages then serves that branch
(Settings > Pages > Deploy from a branch > `gh-pages` > `/ (root)`). Because this is a *project* site it is served
from `/<repo-name>/`, so the workflow builds with `VITE_BASE` set and the app
routes through `src/lib/paths.ts`. Vite also emits a `404.html` copy of
`index.html` so client-side routes survive a direct hit or refresh.

Put your CV at `public/resume.pdf` — the hero's download button links to it.

## Structure

```
index.html              Vite entry HTML
src/main.tsx            React root
src/App.tsx             Path-based router (pushState / popstate)
src/index.css           Tailwind directives + design tokens
src/lib/paths.ts        Deployment-base helpers for routes and links
src/components/layout/  Header, Footer
src/components/pages/   One component per route
src/components/sections/Reusable page sections
src/components/ui/      Breadcrumb, ScrollToTop
```

Design tokens (`--color-text-primary`, `--color-accent-blue`, …) are defined in
`src/index.css` and consumed via Tailwind arbitrary values, e.g.
`text-[var(--color-text-primary)]`.
