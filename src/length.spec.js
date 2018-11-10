import length from './length'

describe('length', () => {
  test('Works', () => {
    expect(length(null)).toBe(undefined)
    expect(length(undefined)).toBe(undefined)
    expect(length([])).toBe(0)
    expect(length([1])).toBe(1)
    expect(length({a: 1})).toBe(1)
    expect(length('')).toBe(0)
    expect(length('abc')).toBe(3)
    expect(length(new Map([['aaa', 'aaa'], ['bbb', 'bbb']]))).toBe(2)
    expect(length(new Set([1, 2, 3]))).toBe(3)
    expect(length({length: -10})).toBe(1)
  })
})
