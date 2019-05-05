import pickAll from './pickAll';

describe('pickAll', () => {
  test('pickAll with present keys', () => {
    const e = pickAll(['alpha', 'beta', 'delta'], {
      alpha: '1',
      beta: '2',
      delta: '3',
      feta: '0',
    });
    expect(e).toEqual({
      alpha: '1',
      beta: '2',
      delta: '3',
    });
  });
  test('pickAll with some missing keys', () => {
    const e = pickAll(['alpha', 'beta', 'omega'], {
      alpha: '1',
      beta: '2',
      delta: '2',
      feta: '0',
    });

    expect(e).toEqual({
      alpha: '1',
      beta: '2',
      omega: undefined,
    });
  });
});
