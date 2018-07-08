import isObject from "./isObject";

describe("isObject", () => {
  it("Works", () => {

    expect(isObject([])).toBeFalsy();
      expect(isObject([1,2])).toBeFalsy();
      expect(isObject({})).toBeTruthy();
        expect(isObject({a:1})).toBeTruthy();
  });
});
