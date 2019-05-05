import { identity } from './identity';

describe('identity', () => {
  test('returns value', () => {
    expect(identity(1)).toBe(1);
  });
});
