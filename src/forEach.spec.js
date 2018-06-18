import forEach from "./forEach";

describe("forEach", () => {
  it("performs the passed in function on each element of the list", () => {
    var list = [
      { x: 1, y: 2 },
      { x: 100, y: 200 },
      { x: 300, y: 400 },
      { x: 234, y: 345 }
    ];
    var sideEffect = {};
    forEach((value,key) => (sideEffect[value.x] = value.y), list);

    expect(sideEffect).toEqual({ 1: 2, 100: 200, 300: 400, 234: 345 });
  });
});
