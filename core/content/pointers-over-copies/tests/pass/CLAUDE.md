# Project Instructions

## Tech Stack

- Language: TypeScript 5.x (strict mode)
- Framework: Fastify
- Database: PostgreSQL via Prisma
- Testing: Vitest

## Code Patterns

For API route patterns, see `src/routes/users.ts:12-35`.
For error handling middleware, see `src/middleware/error-handler.ts:8-20`.
For database transaction patterns, see `src/repositories/base.ts:45-60`.

## Example: Route Definition

```typescript
app.get('/health', async () => ({ status: 'ok' }));
```

Short inline examples like this are fine for illustration.

## Architecture

Follow the three-layer architecture:
1. **Routes** — HTTP handling, request validation (`src/routes/`)
2. **Services** — Business logic, orchestration (`src/services/`)
3. **Repositories** — Data access, query building (`src/repositories/`)

For the full architecture diagram, see `docs/architecture.md`.

## Testing

Write unit tests for services and integration tests for routes.
For test setup patterns, see `tests/setup.ts:1-15`.
For mock factory examples, see `tests/factories/index.ts`.

## Commands

- `npm run dev` — Start development server with hot reload
- `npm test` — Run all tests
- `npm run build` — Compile TypeScript to `dist/`
- `npm run migrate` — Apply pending database migrations

## Deployment

Use Docker Compose for local development.
For production deployment steps, see `docs/deployment.md`.
Tag releases with semantic versioning.
