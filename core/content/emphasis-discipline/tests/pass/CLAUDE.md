# Project Instructions

## Overview

This is a Node.js microservice handling payment processing.
Built with Express.js and PostgreSQL.

## Code Style

Use TypeScript strict mode for all source files.
Follow the Airbnb style guide with our ESLint overrides.
Name files in kebab-case and exports in camelCase.

## IMPORTANT: Security Requirements

Never commit API keys or secrets to the repository.
Use environment variables for all sensitive configuration.

## Testing

Write unit tests for all business logic functions.
Use `jest` for unit tests and `supertest` for API tests.
Target 85% branch coverage.

## Git Workflow

Branch from `main` using conventional branch names.
Write descriptive commit messages in imperative mood.
Request review from at least one team member.

## Deployment

Use Docker containers for all environments.
Run database migrations before application startup.
Monitor error rates after each deployment for 30 minutes.

## CRITICAL: Data Handling

All PII must be encrypted at rest and in transit.
Mask sensitive fields in log output.
