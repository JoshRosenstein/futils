import values from "./index";

describe("Values", () => {
  it("Subtract One from Number", () => {
    const a = values({a:1,b:2});
    const eA = [1,2];

    expect(a).toEqual(eA);
  });

});
