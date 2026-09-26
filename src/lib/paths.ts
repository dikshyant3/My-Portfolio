/**
 * Deployment-base helpers.
 *
 * Locally and on a root domain the site is served from `/`, but a GitHub Pages
 * *project* site is served from `/<repo-name>/`. Vite injects the configured
 * base as `import.meta.env.BASE_URL`, so routes are written as plain app paths
 * ('/research') everywhere and translated through here at the edges.
 */

// '' when served from the root, '/My-Portfolio' on a project Pages site.
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Turn an app route into a real href for this deployment. */
export const href = (path: string): string => `${BASE}${path}`;

/** The current app route, with any deployment base stripped off. */
export const routeFromLocation = (): string => {
  const path = window.location.pathname;
  const stripped =
    BASE && path.startsWith(BASE) ? path.slice(BASE.length) : path;
  // '' (the base with no trailing path) means the home route.
  return stripped || '/';
};
