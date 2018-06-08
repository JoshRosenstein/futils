import reject from "./index"

describe("Reject", () => {
  var even = function(x) {return x % 2 === 0;};


  test("reduces an array to those not matching a filter", () => {
    const a = reject(even, [1, 2, 3, 4, 5])
    expect(a).toEqual([1, 3, 5])
  })

  test("returns an empty array if no element matche", () => {
    const a = reject(function(x) { return x < 100; }, [1, 9, 99])
    expect(a).toEqual([])
  })

  test("returns an empty array if asked to filter an empty array", () => {
    const a = reject(function(x) { return x > 100; }, [])
    expect(a).toEqual([])
  })

}) 
