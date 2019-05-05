import drop from './drop';

describe('drop', () => {
  test('Array', () => {
    const a = drop(2)(['a', 'b', 'c']);
    const res = ['c'];
    expect(a).toEqual(res);
  });

  test('Array2', () => {
    const a = drop(1)(['a', 'b', 'c']);
    const res = ['b', 'c'];
    expect(a).toEqual(res);
  });

  test('String', () => {
    const a = drop(2)('abc');
    const res = 'c';
    expect(a).toEqual(res);
  });

  test('String', () => {
    const a = drop(1)('abc');
    const res = 'bc';
    expect(a).toEqual(res);
  });
});
