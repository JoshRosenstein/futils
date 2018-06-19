import multiply from "./multiply";

describe("multiply", () => {
  it("Works", () => {
    const a = multiply(1,2);
    const eA = 2;

    expect(a).toEqual(eA);
  });

});
