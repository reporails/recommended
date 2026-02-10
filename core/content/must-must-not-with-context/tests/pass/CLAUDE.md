# Project Instructions

## Code Quality

You MUST validate all user input at the API boundary — prevents injection attacks.
You MUST NOT skip type checking (because runtime errors are harder to debug than compile errors).
You MUST write tests for public functions — ensures regressions are caught early.

## Security

You MUST encrypt sensitive data at rest — required by compliance policy.
You MUST NOT log personally identifiable information (since GDPR regulations prohibit it).
You MUST rotate API keys quarterly — reduces blast radius of leaked credentials.

## Git Workflow

You MUST use feature branches for all changes — keeps main branch stable.
You MUST NOT force push to shared branches (because it rewrites history for collaborators).
You MUST include a ticket reference in commit messages — enables traceability.

## Deployment

You MUST run the full test suite before deploying — catches integration failures.
You MUST NOT deploy on Fridays (since weekend on-call coverage is reduced).
You MUST tag every production release — enables quick rollback identification.

## Documentation

You MUST update the changelog for user-facing changes — keeps users informed.
You MUST NOT leave TODO comments in merged code (because they accumulate as technical debt).

## Dependencies

You MUST pin exact dependency versions — prevents unexpected breakage from upstream updates.
You MUST NOT use deprecated APIs — they may be removed in future releases.
