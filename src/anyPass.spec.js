import anyPass from "./anyPass";

describe("anyPass", () => {
  var odd = function(n) {
    return n % 2 !== 0
  }
  var gt20 = function(n) {
    return n > 20
  }
  var lt5 = function(n) {
    return n < 5
  }
  var plusEq = function(w, x, y, z) {
    return w + x === y + z
  }

  it("reports whether any predicates are satisfied by a given value", () => {
    var ok = anyPass([odd, gt20, lt5])

    expect(ok(7)).toBeTruthy()
    expect(ok(9)).toBeTruthy()
    expect(ok(3)).toBeTruthy()
    expect(ok(22)).toBeTruthy()
    expect(ok(10)).toBeFalsy()
    expect(ok(18)).toBeFalsy()
  })

  it("returns false for an empty predicate list", () => {
    expect(anyPass([])(3)).toBeFalsy()
  })
})
