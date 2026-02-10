# Acme Web App

Backend service for the Acme platform.

## Team Structure

| Role | Responsibility | Owner |
|------|----------------|-------|
| Backend Lead | API design, code review | @alice |
| Frontend Lead | UI components, accessibility | @bob |
| DevOps | CI/CD, infrastructure | @carol |
| QA Lead | Test strategy, release sign-off | @dave |

## Ownership

Each component has a designated maintainer who approves changes:

- `src/api/` — @alice (backend team lead)
- `src/web/` — @bob (frontend team lead)
- `infra/` — @carol (DevOps)
- `tests/` — @dave (QA)

## Commands

- `make dev` — start local development server
- `make test` — run pytest suite
- `make lint` — run ruff and mypy

## Architecture

The service follows a layered design with clear boundaries.

## Constraints

- NEVER commit database credentials — use environment variables
- ALWAYS write tests for new endpoints before merging

## Decision Process

The team lead for each domain has final say on architectural decisions
within their scope. Cross-cutting concerns require consensus from all leads.
