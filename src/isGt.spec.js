import isGt from './isGt'


describe('isGt', () => {
  test('works', () => {
    expect(isGt(1)(2)).toBeTruthy()
    expect(isGt(1)(0)).toBeFalsy()
    expect(isGt(1,2)).toBeTruthy()
    expect(isGt(1,0)).toBeFalsy()
  })
})
