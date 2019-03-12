import isPopulated from './isPopulated'

describe('isPopulated', () => {
  test('returns "true" if value is empty, otherwise "false"', () => {
    expect(isPopulated([1, 2, 3])).toBeTruthy()
    expect(isPopulated([undefined])).toBeTruthy()
    expect(isPopulated([])).toBeFalsy()
    expect(isPopulated('')).toBeFalsy()
    expect(isPopulated(null)).toBeFalsy()
    expect(isPopulated({})).toBeFalsy()
    expect(isPopulated(undefined)).toBeFalsy()
    expect(isPopulated(false)).toBeTruthy()
    expect(isPopulated(true)).toBeTruthy()
    expect(isPopulated(0)).toBeTruthy()
    expect(isPopulated(() => {})).toBeTruthy()
    expect(isPopulated(NaN)).toBeTruthy()
  })
})
