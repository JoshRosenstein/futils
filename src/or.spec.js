import or from './or'

describe('or', () => {
  test('confirms that at least one of two arguments is true', () => {
    expect(or(true, true)).toBeTruthy()
    expect(or(true, false)).toBeTruthy()
    expect(or(false, true)).toBeTruthy()
    expect(or(false, false)).toBeFalsy()
  })

})
