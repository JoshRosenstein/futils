import paths from './paths';

describe('paths', () => {
  test('getMany with Object', () => {
    expect(paths(['x', 'y'], { x: 1, y: 2 })).toEqual([1, 2]);
    expect(paths(['x.a', 'y.a'], { x: { a: 1 }, y: { a: 2 } })).toEqual([1, 2]);
  });

  test('Array Comma', () => {
    expect(paths('0,1', [1, 2])).toEqual([1, 2]);
    expect(paths('0.0,1.0', [[1], [2]])).toEqual([1, 2]);
  });

  test('Array', () => {
    expect(paths([1, 2], [1, 2, 3])).toEqual([2, 3]);
    expect(
      paths([['1', '0'], ['2', '0']], [[1, 11], [2, 22], [3, 33]]),
    ).toEqual([2, 3]);
    expect(paths([[1, 0], [2, 0]], [[1, 11], [2, 22], [3, 33]])).toEqual([
      2,
      3,
    ]);
  });

  test('Splits Comma Seperated Strings', () => {
    expect(paths('x,y', { x: 1, y: 2 })).toEqual([1, 2]);
    expect(paths('x.a,y.a', { x: { a: 1 }, y: { a: 2 } })).toEqual([1, 2]);
  });
});
