# Acme API Gateway

API gateway handling authentication and routing.

## Tech Stack

- Node.js 20 LTS
- Express
- JWT for authentication tokens
- Redis for session storage

## Commands

- `npm run dev` — start gateway on port 8080
- `npm test` — run Jest suite
- `npm run lint` — eslint check

## Security

### Credential Handling

- NEVER log API keys or passwords in plain text
- NEVER store secrets in source code — use vault or env vars
- NEVER disable TLS verification in production code
- Rotate API keys every 90 days via the key management console

### Authentication Flow

All requests must pass through the auth middleware. The middleware
validates JWT tokens and attaches the decoded user to `req.user`.

Invalid or expired tokens return 401 Unauthorized.

### Access Control

Role-based access control with three levels: reader, editor, admin.
Each endpoint declares its minimum required role in the route config.

## Constraints

- NEVER bypass the rate limiter — it protects downstream services
- ALWAYS validate input with Joi schemas before processing
- ALWAYS sanitize user input to prevent injection attacks

## Deployment

Deployed behind an AWS ALB with TLS termination. Health check
endpoint at `/health` returns 200 when the service is ready.
