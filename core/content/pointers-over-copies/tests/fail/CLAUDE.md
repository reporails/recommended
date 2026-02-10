# Project Instructions

## Tech Stack

- Language: TypeScript 5.x (strict mode)
- Framework: Fastify
- Database: PostgreSQL via Prisma

## API Route Pattern

All routes should follow this pattern:

```typescript
import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { UserService } from '../services/user.service';
import { ApiError } from '../errors/api-error';
import { authenticate } from '../middleware/auth';
import { validate } from '../middleware/validate';
import { paginate } from '../utils/pagination';
import { logger } from '../utils/logger';

const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(255),
  role: z.enum(['admin', 'user', 'viewer']),
});

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', {
    preHandler: [authenticate, validate(CreateUserSchema)],
    handler: async (request, reply) => {
      const service = new UserService();
      try {
        const user = await service.create(request.body);
        logger.info({ userId: user.id }, 'User created');
        return reply.status(201).send(user);
      } catch (error) {
        if (error instanceof ApiError) {
          return reply.status(error.statusCode).send({
            code: error.code,
            message: error.message,
          });
        }
        throw error;
      }
    },
  });

  app.get('/users', {
    preHandler: [authenticate],
    handler: async (request, reply) => {
      const service = new UserService();
      const results = await service.list(paginate(request.query));
      return reply.send(results);
    },
  });
}
```

## Commands

- `npm run dev` — Start development server
- `npm test` — Run all tests
- `npm run build` — Compile TypeScript

## Deployment

Use Docker Compose for local development.
Tag releases with semantic versioning.
