# Project Overview

This is a TypeScript monorepo using Turborepo.

## API Endpoints

The main endpoint for user management is POST /api/users.
Each endpoint must validate the request body using Zod schemas.
The endpoint for authentication returns a JWT token in the response.

## Database Schema

The users table has columns: id, email, name, created_at.
Every query must use parameterized statements to prevent injection.
The orders query joins with the products table on product_id.

## More Endpoints

GET /api/products endpoint returns paginated results.
The search endpoint accepts query parameters for filtering.
DELETE endpoint requires admin role authorization.

## Query Patterns

Use the findMany query with pagination for list endpoints.
The aggregate query computes dashboard statistics.
Complex mutation queries must be wrapped in transactions.

## Commands

- `npm run dev` — Start development server
- `npm test` — Run all tests
- `npm run build` — Build for production

## Git Workflow

Create feature branches from `main`.
All PRs require one approval.
