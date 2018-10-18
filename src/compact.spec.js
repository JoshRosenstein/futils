import compact from './compact'

describe('compact', () => {
  it('Works', () => {
    const a = compact({a: 1, b: null})
    const eA = {a: 1}
    expect(a).toEqual(eA)
  })
})
