import dec from './dec';

describe('dec', () => {
  it('Subtract One from Number', () => {
    const a = dec(1);
    const eA = 0;

    expect(a).toEqual(eA);
  });

  it('Subtract One from Numberic String', () => {
    const a = dec('1a');
    const eA = '0a';

    expect(a).toEqual(eA);
  });

  it('Subtract One from Numberic String', () => {
    const a = dec(null);
    const eA = null;

    expect(a).toEqual(eA);
  });
});
