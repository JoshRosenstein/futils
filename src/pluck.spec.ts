import pluck from './pluck';

describe('pluck', () => {
  test('Object', () => {
    const e = pluck('val', { a: { val: 3 }, b: { val: 5 } });
    expect(e).toEqual({
      a: 3,
      b: 5,
    });
  });

  it('returns a function that maps the appropriate property over an array', () => {
    const people = [
      { name: 'Fred', age: 23 },
      { name: 'Wilma', age: 21 },
      { name: 'Pebbles', age: 2 },
    ];

    expect(pluck('name', people)).toEqual(['Fred', 'Wilma', 'Pebbles']);
  });

  it('Array Pairs by Index', () => {
    expect(pluck(0, [[1, 2], [3, 4]])).toEqual([1, 3]);
  });

  it('Array Objects', () => {
    expect(pluck('a', [{ a: 1 }, { a: 2 }])).toEqual([1, 2]);
  });
});
