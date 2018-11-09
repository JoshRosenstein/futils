import isTrue from './isTrue'

describe('isTrue', () => {
  it('works correctly with boolean', () => {
    expect(isTrue(true)).toBeTruthy()
    expect(isTrue(false)).toBeFalsy()
  })
})
