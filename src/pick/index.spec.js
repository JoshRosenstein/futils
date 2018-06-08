import pick from "./index";

describe("Pick", () => {
  test("pick with present keys", () => {
    expect(
      pick(["alpha", "beta", "delta"])({
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
  test("pick with some missing keys", () => {
    expect(
      pick(["alpha", "beta", "omega"])({
        alpha: "1",
        beta: "2",
        delta: "2",
        feta: "0"
      })
    ).toEqual({
      alpha: "1",
      beta: "2"
    });
  });
});
