import doWhile from './doWhile'

describe('doWhile', () => {
  test('applies cb to value while condition is truthy', () => {
    const val = doWhile(i => i <= 100, i => i * 2)(2)
    expect(val).toBe(128)
  })
})
