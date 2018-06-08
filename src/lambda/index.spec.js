import lambda from "./index";

describe("lambda", () => {
  it("performs the passed in function on each element of the list", () => {
    let createfn = lambda("a, b => a + b");
    let evalfn = lambda("a, b => a + b")(1, 2);

    expect(createfn(1, 2)).toEqual(3);
    expect(evalfn).toEqual(3);
  });
});
