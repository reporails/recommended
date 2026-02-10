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

## Development Guidelines

Look through the codebase to find relevant files when starting a new task.
Check the existing patterns in the domain layer before adding new entities.
Review the Kafka producer configurations before modifying event flows.

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
