# PaymentGateway

Payment processing service with PCI-DSS compliance requirements.

## Tech Stack

- Java 21, Spring Boot 3.3
- PostgreSQL 16 with row-level security
- Kafka for event streaming
- JUnit 5, Testcontainers

## Commands

- `./gradlew test` — run unit tests
- `./gradlew integrationTest` — run integration tests with Testcontainers
- `./gradlew spotlessApply` — auto-format Java source files
- `docker compose up -d` — start Kafka, PostgreSQL, and Redis locally

## Search Guidelines

When searching this codebase, use efficient patterns to minimize noise:

- Use `files_with_matches` mode to locate relevant files before reading content
- Apply `head_limit` to cap search results and avoid flooding context
- Narrow searches with directory scopes (e.g., search in `src/main/` not root)
- Prefer type-filtered searches (e.g., `type: java`) over broad glob patterns

## Structure

```
src/main/java/gateway/     # Application source
  api/                     # REST controllers
  domain/                  # Business logic and entities
  infra/                   # Kafka producers, DB repositories
src/test/java/gateway/     # Unit tests (mirrors src/main)
src/integrationTest/       # Integration tests with containers
config/                    # Spring profiles and external config
```

## Constraints

- NEVER log full card numbers — use masked format (last 4 digits only)
- NEVER commit PCI-scoped secrets to the repository
- ALWAYS use idempotency keys for payment operations
- ALWAYS write both unit and integration tests for payment flows
- Keep transaction processing under 200ms p99 latency
