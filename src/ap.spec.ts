import ap from './ap'

describe('ap', () => {
  test('applies a list of functions to a list of values', () => {
    const val = ap([i => i * 2, i => i + 3], [1, 2, 3])
    expect(val).toEqual([2, 4, 6, 4, 5, 6])
  })
})
