//@ flow
import toPairs from './toPairs';
const data = [
  [null, []],
  [undefined, []],
  [false, []],
  [0, []],
  ['', []],
  ['foo', [[0, 'f'], [1, 'o'], [2, 'o']]],
  [[], []],
  [[1, 2, 3], [[0, 1], [1, 2], [2, 3]]],
  [new Array(2), [[0, undefined], [1, undefined]]],

  [new Uint8Array([10, 20]), [[0, 10], [1, 20]]],

  [{}, []],
  [{ x: 1 }, [['x', 1]]],
  [{ x: 1, y: 2, z: 3 }, [['x', 1], ['y', 2], ['z', 3]]],
  [
    { y: 'bar', 1: 'x', 2: 'y', 0: 'z', x: 'foo' },
    [['0', 'z'], ['1', 'x'], ['2', 'y'], ['y', 'bar'], ['x', 'foo']],
  ],

  [Object.create(null), []],

  [new Set([1, 2, 3]), [[1, 1], [2, 2], [3, 3]]],
  [new Set([1, 1]), [[1, 1]]],
  [new Set(), []],

  [new Map(), []],
  [new Map([[1, 2], [3, 4]]), [[1, 2], [3, 4]]],
  [new Map([[1, 2], [1, 2]]), [[1, 2]]],

  [new WeakSet(), []],
  [new WeakMap(), []],
];

describe('toPairs', () => {
  it('Object', () => {
    const a = toPairs({
      aaa: 'a',
      bbb: 'b',
      ccc: 'c',
    });
    const eA = [['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']];

    expect(a).toEqual(eA);
  });
  it('Array', () => {
    const a = toPairs(['a', 'b', 'c']);
    const eA = [[0, 'a'], [1, 'b'], [2, 'c']];

    expect(a).toEqual(eA);
  });

  it('Set', () => {
    const a = toPairs(new Set(['a', 'b', 'c']));
    const eA = [['a', 'a'], ['b', 'b'], ['c', 'c']];

    expect(a).toEqual(eA);
  });

  it('Map', () => {
    const a = toPairs(new Map([['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']]));
    const eA = [['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']];

    expect(a).toEqual(eA);
  });
  it('String', () => {
    const a = toPairs('abc');
    const eA = [[0, 'a'], [1, 'b'], [2, 'c']];

    expect(a).toEqual(eA);
  });
  //   it('Error', () => {

  //     function testError() {
  //       // @ts-ignore
  //       toPairs(true)
  //     }
  // //expect( toPairs(true)).toEqual([])
  //    expect( testError).toThrowError()
  //   })

  test.each(data)('KV.entries(%O) === %o', (value, expected) => {
    expect(toPairs(value)).toEqual(expected);
  });
});
