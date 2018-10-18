import flatten from './flatten'

describe('flatten', () => {
  it('Works', () => {
    expect(flatten([['a', 'b'], ['c', 'd']])).toEqual(['a', 'b', 'c', 'd'])
  })

  it('Flattens one Level', () => {
    let nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10]
    expect(flatten(nest)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    nest = [[[[3]], 2, 1], 0, [[-1, -2], -3]]
    expect(flatten(nest)).toEqual([3, 2, 1, 0, -1, -2, -3])
    expect(flatten([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })
})
