import pairsValues from './pairsValues';

describe('pairsValues', () => {
  it('Works', () => {
    const a = pairsValues([['a', 'b'], ['c', 'd']]);
    const eA = ['b', 'd'];

    expect(a).toEqual(eA);
  });
});
