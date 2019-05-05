import mergeAll from './mergeAll';

describe('mergeAll', () => {
  it('Array', () => {
    const a = mergeAll([['0'], ['1'], ['2']]);
    const eA = ['0', '1', '2'];

    expect(a).toEqual(eA);
  });

  it('Object', () => {
    const a = mergeAll([{ aaa: 'aaa' }, { bbb: 'bbb' }, { ccc: 'ccc' }]);
    const eA = {
      aaa: 'aaa',
      bbb: 'bbb',
      ccc: 'ccc',
    };

    expect(a).toEqual(eA);
  });

  it('Object2', () => {
    const a = mergeAll([{ aaa: 'aaa' }, { aaa: 'bbb' }, { ccc: 'ccc' }]);
    const eA = { aaa: 'bbb', ccc: 'ccc' };

    expect(a).toEqual(eA);
  });
});
