import { complement } from './complement';

describe('complement', () => {
  test('complement with positive', () => {
    expect(complement((value) => value === '0')('0')).toBe(false);
  });
  test('complement with negative', () => {
    expect(complement((value) => value !== '0')('0')).toBe(true);
  });

  it('accepts a function that take multiple parameters', () => {
    function between(a, b, c) {
      return a < b && b < c;
    }
    const f = complement(between);
    expect(f(4, 5, 11)).toBe(false);
    expect(f(12, 2, 6)).toBe(true);
    expect(f(12)(2, 6)).toBe(true);
  });

  it('is curried', () => {
    function between(a, b, c) {
      return a < b && b < c;
    }
    const f = complement(between);
    expect(f(4)(5, 11)).toBe(false);
    expect(f(4)(5)(11)).toBe(false);
    expect(f(12)(2, 6)).toBe(true);
    expect(f(12)(2)(6)).toBe(true);
  });
});
