import rejectNil from './rejectNil';

describe('rejectNil', () => {
  test('reject with Array', () => {
    expect(rejectNil([null, 2, undefined, 4])).toEqual([2, 4]);
  });

  test('reduces an array to those not matching a filter', () => {
    const a = rejectNil([1, null, 3, undefined, 5]);
    expect(a).toEqual([1, 3, 5]);
  });

  test('returns an empty array if no element matche', () => {
    const a = rejectNil([undefined]);
    expect(a).toEqual([]);
  });

  test('reject isNil with Object', () => {
    expect(
      rejectNil({
        aaa: null,
        bbb: 2,
        ccc: undefined,
        ddd: 4,
      }),
    ).toEqual({
      bbb: 2,
      ddd: 4,
    });
  });

  test('reject with Set', () => {
    expect(rejectNil(new Set([null, 2, undefined, 4]))).toEqual(
      new Set([2, 4]),
    );
  });

  test('reject with Map', () => {
    expect(
      rejectNil(new Map([['a', null], ['b', 2], ['c', undefined], ['d', 4]])),
    ).toEqual(new Map([['b', 2], ['d', 4]]));
  });
});
