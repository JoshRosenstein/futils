import isEmpty from './isEmpty'

describe('isEmpty', () => {
  test('returns "true" if value is empty, otherwise "false"', () => {
    expect(isEmpty([1, 2, 3])).toBeFalsy()
    expect(isEmpty([])).toBeTruthy()
    expect(isEmpty('')).toBeTruthy()
    expect(isEmpty(null)).toBeTruthy()
    expect(isEmpty({})).toBeTruthy()
    expect(isEmpty(undefined)).toBeTruthy()
    expect(isEmpty(false)).toBeFalsy()
    expect(isEmpty(true)).toBeFalsy()
    expect(isEmpty(0)).toBeFalsy()
    expect(isEmpty(() => {})).toBeFalsy()
    expect(isEmpty(NaN)).toBeFalsy()
  })
})
