import pickAll from "./pickAll";

describe("pickAll", () => {
  test("pickAll with present keys", () => {
    expect(
      pickAll(["alpha", "beta", "delta"])({
        alpha: "1",
        beta: "2",
        delta: "3",
        feta: "0"
      })
    ).toEqual({
      alpha: "1",
      beta: "2",
      delta: "3"
    });
  });
  test("pickAll with some missing keys", () => {
    expect(
      pickAll(["alpha", "beta", "omega"])({
        alpha: "1",
        beta: "2",
        delta: "2",
        feta: "0"
      })
    ).toEqual({
      alpha: "1",
      beta: "2",
      omega: undefined
    });
  });
});
