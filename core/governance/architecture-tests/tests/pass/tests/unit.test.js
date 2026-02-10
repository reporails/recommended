// Unit tests for the user service module
const { createUser, getUser, deleteUser } = require('../src/user-service');

describe('UserService', () => {
  test('creates a new user with valid input', async () => {
    const user = await createUser({ name: 'Alice', email: 'alice@example.com' });
    expect(user.id).toBeDefined();
    expect(user.name).toBe('Alice');
  });

  test('returns null for non-existent user', async () => {
    const user = await getUser('non-existent-id');
    expect(user).toBeNull();
  });

  test('deletes user and returns confirmation', async () => {
    const result = await deleteUser('user-123');
    expect(result.deleted).toBe(true);
  });

  test('throws on invalid email format', async () => {
    await expect(createUser({ name: 'Bob', email: 'not-an-email' }))
      .rejects.toThrow('Invalid email');
  });

  test('enforces unique email constraint', async () => {
    await createUser({ name: 'Carol', email: 'carol@example.com' });
    await expect(createUser({ name: 'Dave', email: 'carol@example.com' }))
      .rejects.toThrow('Email already exists');
  });
});
