import isEnumerable from './isEnumerable'

describe('isNil', () => {
  test('returns true for undefined and null', () => {
    expect(isEnumerable(1)).toBeFalsy()
    expect(isEnumerable('')).toBeTruthy()
    expect(isEnumerable([])).toBeTruthy()
    expect(isEnumerable({})).toBeTruthy()
    expect(isEnumerable(new Map())).toBeTruthy()
    expect(isEnumerable(new Set())).toBeTruthy()
  })
})
