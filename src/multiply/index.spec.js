import multiply from "./index";

describe("multiply", () => {
  it("Subtract One from Number", () => {
    const a = multiply(1,2);
    const eA = 2;

    expect(a).toEqual(eA);
  });

});
