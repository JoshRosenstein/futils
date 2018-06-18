import values from "./values";

describe("Values", () => {
  it("Works", () => {
    const a = values({a:1,b:2});
    const eA = [1,2];

    expect(a).toEqual(eA);
  });

});
