import unless from './unless';
import of from './of';
import isArray from './isArray';

describe('unless', () => {
  const arrOf = (x) => of(null)(x)([]);
  test('calls the whenFalse function if the validator returns a falsy value', () => {
    expect(unless(isArray, arrOf, 10)).toEqual([10]);
  });

  test('returns the argument unmodified if the validator returns a truthy value', () => {
    expect(unless(isArray, arrOf, [10])).toEqual([10]);
  });

  test('returns a curried function', () => {
    expect(unless(isArray)(arrOf)(10)).toEqual([10]);
    expect(unless(isArray)(arrOf)([10])).toEqual([10]);
  });
});
