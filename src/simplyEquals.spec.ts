import simplyEquals from './simplyEquals'

describe('simplyEquals', () => {
  test('confirms that strings are equal', () => {
    expect(simplyEquals('1', '1')).toBeTruthy()
    expect(simplyEquals('1', 'a')).toBeFalsy()
  })

  test('confirms that numbers are equal', () => {
    expect(simplyEquals(1, 1)).toBeTruthy()
    expect(simplyEquals(1, -1)).toBeFalsy()
  })

  test('confirms that functions are equal', () => {
    const a = function a() {}
    expect(simplyEquals(a, a)).toBeTruthy()
  })
})
