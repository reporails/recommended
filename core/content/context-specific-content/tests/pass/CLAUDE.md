# Project Overview

This is a TypeScript monorepo using Turborepo for build orchestration.

## Tech Stack

- Runtime: Node.js 20 LTS
- Language: TypeScript 5.x (strict mode)
- Framework: Fastify for HTTP services
- Database: PostgreSQL 16 via Prisma ORM
- Testing: Vitest + Playwright

## Structure

```
apps/web/          # Next.js frontend
apps/api/          # Fastify backend
packages/shared/   # Shared types and utilities
packages/config/   # Shared configuration
```

## Commands

- `turbo build` — Build all packages
- `turbo test` — Run all test suites
- `turbo lint` — Lint all packages
- `turbo dev` — Start development servers

## Conventions

Use path-scoped instruction files for domain-specific guidance:
- `apps/api/.claude/rules/` — API-specific conventions
- `apps/web/.claude/rules/` — Frontend-specific conventions

For detailed API documentation, see `@docs/api-reference.md`.
For database migration procedures, see `@docs/migrations.md`.

## Git Workflow

Create feature branches from `main`.
Write conventional commits: `feat:`, `fix:`, `docs:`, `chore:`.
All PRs require one approval and passing CI.

## Environment

Copy `.env.example` to `.env.local` for local development.
Never commit secrets or credentials to the repository.
