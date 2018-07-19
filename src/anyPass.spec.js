import anyPass from './anyPass'

describe('anyPass', () => {
  const odd = function(n) {
    return n % 2 !== 0
  }
  const gt20 = function(n) {
    return n > 20
  }
  const lt5 = function(n) {
    return n < 5
  }

  it('reports whether any predicates are satisfied by a given value', () => {
    const ok = anyPass([odd, gt20, lt5])

    expect(ok(7)).toBeTruthy()
    expect(ok(9)).toBeTruthy()
    expect(ok(3)).toBeTruthy()
    expect(ok(22)).toBeTruthy()
    expect(ok(10)).toBeFalsy()
    expect(ok(18)).toBeFalsy()
  })

  it('returns false for an empty predicate list', () => {
    expect(anyPass([])(3)).toBeFalsy()
  })
})
