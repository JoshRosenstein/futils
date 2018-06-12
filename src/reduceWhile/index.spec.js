import reduceWhile from "./index";

describe("reduceWhile", () => {
  var isOdd = function(y, x) {
    return x % 2 === 1
  }
  test("works", () => {
    expect(
      reduceWhile(isOdd, (acc, val) => acc + val, 0, [1, 3, 1, 5, 20, 7, 7, 7])
    ).toEqual(10)
  })
})
