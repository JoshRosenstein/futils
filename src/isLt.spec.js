import isLt from './isLt'


describe('isLt', () => {
  test('works', () => {
    expect(isLt(1)(2)).toBeFalsy()
    expect(isLt(1)(0)).toBeTruthy()
    expect(isLt(1,2)).toBeFalsy()
    expect(isLt(1,0)).toBeTruthy()
  })
})
