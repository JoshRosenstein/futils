import either from "./index";

describe("either", () => {
  it("combines two boolean-returning functions into one", () => {
    var even = function(x) {
      return x % 2 === 0
    }
    var gt10 = function(x) {
      return x > 10
    }
    var f = either(even, gt10)

    expect(f(8)).toBeTruthy()
    expect(f(13)).toBeTruthy()
    expect(f(7)).toBeFalsy()
  })

  it("accepts functions that take multiple parameters", () => {
    var between = function(a, b, c) {
      return a < b && b < c
    }
    var total20 = function(a, b, c) {
      return a + b + c === 20
    }

    var f = either(between, total20)

    expect(f(4, 5, 8)).toBeTruthy()
    expect(f(12, 2, 6)).toBeTruthy()
    expect(f(7, 5, 1)).toBeFalsy()
  })
})
