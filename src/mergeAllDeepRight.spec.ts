import mergeAllDeepRight from './mergeAllDeepRight';

describe('mergeAllDeepRight', () => {
  it('Array', () => {
    const a = mergeAllDeepRight([{ a: { a: 1 } }, { a: { b: 1 } }]);
    const eA = { a: { a: 1, b: 1 } };

    expect(a).toEqual(eA);
  });

  it('Array', () => {
    const a = mergeAllDeepRight([{ a: { a: 1 } }, { a: { a: 2 } }]);
    const eA = { a: { a: 2 } };

    expect(a).toEqual(eA);
  });
});
