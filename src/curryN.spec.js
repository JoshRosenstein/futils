import curryN from "./curryN";

describe("curryN", () => {
  function sum(x, y, z, missed) {
  return x + y + z + (missed || 0)
}

var curry3Sum = curryN(3, sum)

  test('curry3Sum(1, 2, 3) to equal 6', () => {
    expect(curry3Sum(1, 2, 3)).toBe(6)
  })

  test('curry3Sum(1)(2, 3) to equal 6', () => {
    expect(curry3Sum(1)(2, 3)).toBe(6)
  })

  test('curry3Sum(1, 2)(3) to equal 6', () => {
    expect(curry3Sum(1, 2)(3)).toBe(6)
  })

  test('curry3Sum(1)(2)(3) to equal 6', () => {
    expect(curry3Sum(1)(2)(3)).toBe(6)
  })

});
