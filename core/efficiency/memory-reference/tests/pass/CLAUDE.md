# AnalyticsDashboard

Real-time analytics dashboard with streaming data visualization.

## Tech Stack

- React 19, TypeScript, Vite
- D3.js for custom charts, Recharts for standard visualizations
- WebSocket connections for live data feeds
- Vitest for unit tests, Playwright for E2E

## Commands

- `npm run dev` — start development server with HMR
- `npm test` — run Vitest in watch mode
- `npx playwright test` — run end-to-end tests
- `npm run build` — production build with tree-shaking

## Efficiency

- Reference from memory instead of re-reading unchanged files during a session
- If you have already read a configuration file and it has not been modified,
  use your memory of its contents rather than reading it again
- For files you have not seen yet, always read them before making assumptions

## Structure

```
src/components/     # React UI components
src/hooks/          # Custom React hooks (useWebSocket, useChart)
src/services/       # API and WebSocket service layer
src/types/          # Shared TypeScript type definitions
src/utils/          # Pure utility functions
public/             # Static assets
tests/e2e/          # Playwright end-to-end tests
```

## Style

Use named exports for components. Colocate tests with source files using
`*.test.tsx` naming. Custom hooks must start with `use` prefix.

## Constraints

- NEVER store API keys in frontend code or environment files committed to git
- ALWAYS handle WebSocket disconnection and reconnection gracefully
- ALWAYS add loading and error states for async data components
- Keep bundle size under 200KB gzipped for the main chunk
