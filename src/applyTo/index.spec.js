import applyTo from "./index";

describe("applyTo", () => {
  it("Object (Empty)", () => {
    const a = applyTo(0)(value => `${value}`);
    const eA = "0";

    expect(a).toEqual(eA);
  });
});
