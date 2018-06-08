import min from "./index";

describe.skip("min", () => {
  it("Subtract One from Number", () => {
    const a = min([1,3]);
    const eA = 1;

    expect(a).toEqual(eA);
  });

});
