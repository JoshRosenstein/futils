import comparator from './comparator'

describe('comparator', () => {
  it('builds a comparator function for sorting out of a simple predicate that reports whether the first param is smaller', () => {
    expect([3, 1, 8, 1, 2, 5].sort(comparator((a, b) => a < b))).toEqual([
      1,
      1,
      2,
      3,
      5,
      8,
    ])
  })
})
