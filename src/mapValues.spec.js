import mapValues from './mapValues'

describe('mapValues', () => {
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
      interval: 10
    })
    const eA = { age: 30, interval: 11 }

    expect(a).toEqual(eA)
  })
})
