// Architecture boundary tests — validate layer separation
const { analyzeImports } = require('../src/utils/import-analyzer');

describe('Architecture Boundary Tests', () => {
  test('domain layer does not import from infrastructure', () => {
    const violations = analyzeImports('src/domain/', {
      forbidden: ['src/infrastructure/', 'src/adapters/'],
    });
    expect(violations).toHaveLength(0);
  });

  test('presentation layer does not bypass service layer', () => {
    const violations = analyzeImports('src/controllers/', {
      forbidden: ['src/domain/repositories/'],
    });
    expect(violations).toHaveLength(0);
  });

  test('architecture layer spec compliance for shared modules', () => {
    const violations = analyzeImports('src/shared/', {
      forbidden: ['src/domain/', 'src/controllers/', 'src/infrastructure/'],
    });
    expect(violations).toHaveLength(0);
  });

  test('boundary test for event handlers', () => {
    const violations = analyzeImports('src/events/', {
      allowed: ['src/domain/', 'src/shared/'],
    });
    expect(violations).toHaveLength(0);
  });
});
