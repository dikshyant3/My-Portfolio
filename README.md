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

## Structure

```
index.html              Vite entry HTML
src/main.tsx            React root
src/App.tsx             Path-based router (pushState / popstate)
src/index.css           Tailwind directives + design tokens
src/components/layout/  Header, Footer
src/components/pages/   One component per route
src/components/sections/Reusable page sections
src/components/ui/      Breadcrumb, ScrollToTop
```

Design tokens (`--color-text-primary`, `--color-accent-blue`, …) are defined in
`src/index.css` and consumed via Tailwind arbitrary values, e.g.
`text-[var(--color-text-primary)]`.
