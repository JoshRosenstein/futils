import { ifElse } from './ifElse';

describe('ifElse', () => {
  const getEven = ifElse<any, any, any>(
    (i) => i % 2 === 0,
    (i) => i,
    (i) => i + 1,
  );

  test('applies 1st callback if condition is true', () => {
    expect(getEven(1)).toBe(2);
  });

  test('applies 2nd callback if condition is false', () => {
    expect(getEven(2)).toBe(2);
  });
});
