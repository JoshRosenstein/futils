import reduceWhile from "./index";

describe("reduceWhile", () => {
  var isOdd = function(y, x) {
    return x % 2 === 1
  }
  const sum = (a, b) => a + b
  test("works", () => {
    expect(
      reduceWhile(isOdd, (acc, val) => acc + val, 0, [1, 3, 1, 5, 20, 7, 7, 7])
    ).toEqual(10)
  })

  test("works2", () => {
  expect(reduceWhile(isOdd, sum, 0, [1, 3, 5, 60, 777, 800])).toEqual(9)
  })

})
