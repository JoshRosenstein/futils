import min from './min'

describe('min', () => {
  it('Works with Numbers', () => {
    const a = min(1, 3)
    const eA = 1
    expect(a).toEqual(eA)
  })

  it('Works with Numbered Arrays', () => {
    expect(min([1], [3])).toEqual(1)
    expect(min([3, 4, 5], [6, 7])).toEqual(3)
  })

  it('Works with string Arrays', () => {
    expect(min(['a'], ['b'])).toEqual('a')
    expect(min(['c', 'e', 'd'], ['f'])).toEqual('c')
  })

  it('Works with string Arrays', () => {
    const a = min(['a'], ['b'])
    const eA = 'a'
    expect(a).toEqual(eA)
  })

  it('Works with mixed', () => {
    expect(min(['a'], 'b')).toEqual('a')
    expect(min(1, [4, 3, 6, -8])).toEqual(-8)
  })
})
