import divideBy from './divideBy'

describe('divides numbers', () => {
  test('positive', () => {
    expect(divideBy(2)(4)).toEqual(2)
  })

  test('negative', () => {
    expect(divideBy(-1)(-5)).toEqual(5)
  })

  test('by zero', () => {
    expect(divideBy(0)(1)).toEqual(Infinity)
    expect(divideBy(0)(-1)).toEqual(-Infinity)
  })
})

describe('divides strings', () => {
  test('positive number-like', () => {
    expect(divideBy('2')('4')).toEqual(2)
  })

  test('negative number-like', () => {
    expect(divideBy('-1')('-5')).toEqual(5)
  })

  test('not-a-number-like', () => {
    expect(divideBy('qwe')('rty')).toEqual(NaN)
  })
})

describe('divides booleans', () => {
  test('true values', () => {
    expect(divideBy(true)(true)).toEqual(1)
  })

  test('false values', () => {
    expect(divideBy(false)(false)).toEqual(NaN)
  })
})

describe('divides undefined and null', () => {
  test('undefined values', () => {
    expect(divideBy(undefined)(undefined)).toEqual(NaN)
  })

  test('null values', () => {
    expect(divideBy(null)(null)).toEqual(NaN)
  })
})

describe('divides objects', () => {
  test('empty', () => {
    expect(divideBy({})({})).toEqual(NaN)
  })

  test('non-empty', () => {
    expect(divideBy({ a: 1 })({ b: 2 })).toEqual(NaN)
  })
})
