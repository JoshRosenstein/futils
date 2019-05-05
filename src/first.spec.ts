import { first } from './first';

describe('first', () => {
  test('returns first element of array', () => {
    expect(first([1, 2, 3])).toBe(1);
  });

  test('returns first element of string', () => {
    expect(first('hello')).toBe('h');
  });
});
