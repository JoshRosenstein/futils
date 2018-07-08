import complement from "./complement";

describe("complement", () => {
  test("complement with positive", () => {
    expect(complement((value) => value === "0")("0"))
      .toBe(false)
  })
  test("complement with negative", () => {
    expect(complement((value) => value !== "0")("0"))
      .toBe(true)
  })

});
