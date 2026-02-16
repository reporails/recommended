## Database Migration

When creating a new migration, run prisma migrate dev --name <name> and update the seed file at prisma/seed.ts with test data matching the new schema.

(This only matters during migration work but loads every session)
