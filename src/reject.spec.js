import reject from './reject'

describe('reject', () => {
  const isOdd = value => value % 2 !== 0
  const even = function (x) { return x % 2 === 0 }
  test('reject with Array', () => {
    expect(reject(isOdd)([1, 2, 3, 4])).toEqual([2, 4])
  })

  test('reduces an array to those not matching a filter', () => {
    const a = reject(even, [1, 2, 3, 4, 5])
    expect(a).toEqual([1, 3, 5])
  })

  test('returns an empty array if no element matche', () => {
    const a = reject((x) => x < 100, [1, 9, 99])
    expect(a).toEqual([])
  })

  test('returns an empty array if asked to filter an empty array', () => {
    const a = reject((x) => x > 100, [])
    expect(a).toEqual([])
  })


  test('reject with Object', () => {
    expect(
      reject(isOdd)({
        aaa: 1,
        bbb: 2,
        ccc: 3,
        ddd: 4
      })
    ).toEqual({
      bbb: 2,
      ddd: 4
    })
  })

  test('reject with Set', () => {
    expect(reject(isOdd)(new Set([1, 2, 3, 4]))).toEqual(new Set([2, 4]))
  })

  test('reject with Map', () => {
    expect(
      reject(isOdd)(new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]))
    ).toEqual(new Map([['b', 2], ['d', 4]]))
  })
})
