import fromIteratorToArray from './fromIteratorToArray'

describe('fromIteratorToArray', () => {
  it('Set', () => {
    const a = fromIteratorToArray(new Set([1, 2, 3]).entries())
    const eA = [[1, 1], [2, 2], [3, 3]]

    expect(a).toEqual(eA)
  })

  it('Map', () => {
    const a = fromIteratorToArray(
      new Map([['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']]).entries(),
    )
    const eA = [['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']]

    expect(a).toEqual(eA)
  })
})
