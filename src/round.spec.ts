import round from './round';

describe('round', () => {
  it('works', () => {
    const a = round(0.01, 112.336);
    const eA = 112.34;

    expect(a).toEqual(eA);
  });
});
