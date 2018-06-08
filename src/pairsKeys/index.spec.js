import pairsKeys from "./index";

describe("pairsValues", () => {
  it("Works", () => {
    const a = pairsKeys([["a", "b"], ["c", "d"]]);
    const eA = ["a", "c"];

    expect(a).toEqual(eA);
  });
});
