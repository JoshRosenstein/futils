import { mapKeys } from './mapKeys';

describe('mapKeys', () => {
  test('String', () => {
    const a = mapKeys((value) => `a${value}`)('abc');
    const eA = 'abc';

    expect(a).toEqual(eA);
  });

  test('Array', () => {
    const a = mapKeys((value) => value + 1)([1, 2, 3]);
    const eA = [1, 2, 3];

    expect(a).toEqual(eA);
  });

  test('Object', () => {
    const a = mapKeys((value) => value + 1)({
      age: 29,
      interval: 10,
    });
    const eA = { age1: 29, interval1: 10 };

    expect(a).toEqual(eA);
  });
});
