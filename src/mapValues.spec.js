import mapValues from './mapValues'

describe('mapValues', () => {
  it('interprets ((->) r) as a functor', () => {
    const f = a => a - 1
    const g = b => b * 2
    const h = mapValues(f, g)
    expect(h(10)).toEqual(10 * 2 - 1)
  })

  test('String', () => {
    const a = mapValues(value => `a${value}`)('abc')
    const eA = 'aaabac'

    expect(a).toEqual(eA)
  })

  test('Array', () => {
    const a = mapValues(value => value + 1)([1, 2, 3])
    const eA = [2, 3, 4]

    expect(a).toEqual(eA)
  })

  test('Object', () => {
    const a = mapValues(value => value + 1)({
      age: 29,
      interval: 10,
    })
    const eA = {age: 30, interval: 11}

    expect(a).toEqual(eA)
  })
})
