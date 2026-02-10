# Acme Dashboard

Internal dashboard for metrics visualization.

## Tech Stack

- React 18
- TypeScript 5.4
- Vite
- Recharts for data visualization

## Commands

- `npm run dev` — start Vite dev server on port 3000
- `npm test` — run Vitest suite
- `npm run build` — production build
- `npm run lint` — eslint + prettier check

## Architecture

Single-page application with React Router for navigation.

1. Pages — route-level components
2. Components — reusable UI elements
3. Hooks — shared state and data fetching logic
4. Utils — pure helper functions

## Constraints

- NEVER import from `src/pages/` inside `src/components/` — use props instead
- ALWAYS co-locate test files next to the module they test
- ALWAYS use named exports (no default exports)

## Style Guide

Follow the project ESLint config. Use functional components with hooks.
Prefer `const` arrow functions for component definitions.

## Deployment

Built and served as static files behind an Nginx reverse proxy.
The CI pipeline runs `npm run build` and uploads to the CDN bucket.

## Data Flow

Data is fetched from the backend REST endpoints using React Query.
Stale-while-revalidate strategy with a 30-second cache window.
