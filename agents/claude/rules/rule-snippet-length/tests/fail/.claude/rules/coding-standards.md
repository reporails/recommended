---
description: Comprehensive coding standards for all project files
globs:
  - "**/*"
paths:
  - "src/**"
  - "lib/**"
---

# Comprehensive Coding Standards

This rule covers all coding conventions for the entire project.

## Naming Conventions

ALWAYS use camelCase for variables and functions.
ALWAYS use PascalCase for classes and components.
ALWAYS use UPPER_SNAKE_CASE for constants.
NEVER use single-letter variable names except in loops.
NEVER use abbreviations unless they are universally understood.

## Error Handling

ALWAYS catch specific exceptions, never use bare except.
ALWAYS log errors with contextual information.
NEVER swallow exceptions silently.
NEVER return null when an error occurs; throw or return Result types.

## Testing

ALWAYS write tests for public API methods.
ALWAYS use descriptive test names that explain the scenario.
NEVER test implementation details, test behavior.
NEVER use sleep or fixed delays in tests.

## Documentation

ALWAYS add docstrings to public functions and classes.
ALWAYS document non-obvious design decisions in comments.
NEVER leave TODO comments without an associated issue.
NEVER duplicate documentation between code and external docs.

## Performance

ALWAYS use lazy loading for expensive resources.
ALWAYS prefer streaming over buffering for large data.
NEVER make synchronous network calls in the main thread.
NEVER use recursive algorithms without tail-call optimization.

## Security

ALWAYS validate and sanitize user input at the boundary.
ALWAYS use parameterized queries for database access.
NEVER log sensitive data like passwords or tokens.
NEVER hardcode credentials or API keys in source code.

## Code Style

ALWAYS keep functions under 50 lines.
ALWAYS limit line length to 120 characters.
NEVER nest more than 3 levels of control flow.
NEVER use magic numbers; define named constants instead.
