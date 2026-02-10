# Project Instructions

## Code Style

Use 2-space indentation for all JavaScript and TypeScript files.
Maximum 80 characters per line for all source files.
Use the opening brace on the same line as the statement.
Add a trailing semicolon after every statement.
Name React components in PascalCase and utility functions in camelCase.

## Formatting Rules

Indentation with 4 spaces for Python files.
Line length of 120 characters for Python.
Use trailing comma in multi-line objects and arrays.

## Architecture Patterns

Use the repository pattern for data access layers.
Separate business logic from HTTP handlers using service classes.
Keep controller methods thin — delegate to services for logic.

## Error Handling

Define custom error classes in `src/errors/` for each domain.
Return structured error responses from all API endpoints.
Log errors with structured metadata using the shared logger.

## Dependencies

Prefer built-in Node.js APIs over third-party packages.
Use exact version pinning in `package.json`.

## Git Workflow

Branch from `main` with descriptive names.
Write conventional commit messages.
Squash merge all pull requests.
