import converge from './converge'

describe('converge', () => {
  test("enhance arguments with callbacks from 2rd argument and call 1st with 'em", () => {
    const a = converge((a, b) => a + b, [
      i => i.toUpperCase(),
      i => i.toLowerCase()
    ])
    expect(a('abc')).toBe('ABCabc')
  })

  const mult = function(a, b) {
    return a * b
  }

  const f1 = converge(mult, [
    function(a) {
      return a
    },
    function(a) {
      return a
    }
  ])
  const f2 = converge(mult, [
    function(a) {
      return a
    },
    function(a, b) {
      return b
    }
  ])
  const f3 = converge(mult, [
    function(a) {
      return a
    },
    function(a, b, c) {
      return c
    }
  ])
  const add = (a, b) => a + b
  it('returns a curried function', () => {
    const a = function(x) {
      return f1(x)
    }
    const b = function(x) {
      return f2(x)
    }
    const c = function(x, y) {
      return f3(x, y)
    }
    const d = converge(c, [a, b])
    const context = { f1: add(1), f2: add(2), f3: add }
    expect(f2(6, 7)).toBe(42)
    expect(f2(6)(7)).toBe(42)
    expect(f3(6)(7)(8)).toBe(48)

    // eq(a.call(context, 1), 2);
    // eq(b.call(context, 1), 3);
    // eq(d.call(context, 1), 5);
  })

  test('converge', () => {
    const mult = function(a, b) {
      return a * b
    }
    expect(converge(mult, [x => x + 1, x => x + 3])(2)).toEqual(15)
  })
})
