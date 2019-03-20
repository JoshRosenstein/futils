import reduceWhile from './reduceWhile'

describe('reduceWhile', () => {
  const isOdd = function(y, x) {
    return x % 2 === 1
  }

  test('Array', () => {
    expect(
      reduceWhile(isOdd, (acc, val) => acc + val, 0, [1, 3, 1, 5, 20, 7, 7, 7]),
    ).toEqual(10)
  })

  test('Array2', () => {
    const sum = (a, b) => a + b
    expect(reduceWhile(isOdd, sum, 0, [1, 3, 5, 60, 777, 800])).toEqual(9)
  })

  test('Object', () => {
    const sum = (a, b) => a + b
    expect(
      reduceWhile(isOdd, sum, 0, {a: 1, b: 3, c: 5, d: 60, e: 777, f: 800}),
    ).toEqual(9)
  })

  test('Map', () => {
    const sum = (a, b) => a + b
    expect(
      reduceWhile(
        isOdd,
        sum,
        0,
        new Map([
          ['a', 1],
          ['b', 3],
          ['c', 5],
          ['d', 60],
          ['e', 777],
          ['f', 800],
        ]),
      ),
    ).toEqual(9)
  })

  test('Set', () => {
    const sum = (a, b) => a + b
    expect(
      reduceWhile(isOdd, sum, 0, new Set([1, 3, 5, 60, 777, 800])),
    ).toEqual(9)
  })
})
