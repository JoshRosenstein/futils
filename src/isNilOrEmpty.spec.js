import isNilOrEmpty from "./isNilOrEmpty";

describe("isNilOrEmptyOrEmpty", () => {
  test('returns true for undefined and null and empty', () => {
    expect(isNilOrEmpty(null)).toBeTruthy()
    expect(isNilOrEmpty(undefined)).toBeTruthy()
    expect(isNilOrEmpty([])).toBeTruthy()
    expect(isNilOrEmpty('')).toBeTruthy()
expect(isNilOrEmpty({})).toBeTruthy()
  })

  test('returns false otherwise', () => {
    expect(isNilOrEmpty(true)).toBeFalsy()
    expect(isNilOrEmpty('test')).toBeFalsy()
    expect(isNilOrEmpty(5)).toBeFalsy()
    expect(isNilOrEmpty({a:1})).toBeFalsy()
        expect(isNilOrEmpty([1])).toBeFalsy()
  })



});
