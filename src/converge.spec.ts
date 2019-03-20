import converge from './converge'

describe('converge', () => {
  test("enhance arguments with callbacks from 2rd argument and call 1st with 'em", () => {
    const a = converge((a, b) => a + b, [
      i => i.toUpperCase(),
      i => i.toLowerCase(),
    ])
    expect(a('abc')).toBe('ABCabc')
  })

  const mult = function(a, b) {
    return a * b
  }

  const f2 = converge(mult, [
    function(a) {
      return a
    },
    function(a, b) {
      return b
    },
  ])
  const f3 = converge(mult, [
    function(a) {
      return a
    },
    function(a, b, c) {
      return c
    },
  ])

  it('returns a curried function', () => {
    expect(f2(6, 7)).toBe(42)
    expect(f2(6)(7)).toBe(42)
    expect(f3(6)(7)(8)).toBe(48)
  })

  test('converge', () => {
    const mult = function(a, b) {
      return a * b
    }
    expect(converge(mult, [x => x + 1, x => x + 3])(2)).toEqual(15)
  })
})
