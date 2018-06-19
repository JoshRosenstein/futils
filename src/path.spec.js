import path from "./path";

describe("path", () => {
  test("object with keys present", () => {
    expect(path(["aaa", "bbb", "ccc"])({ aaa: { bbb: { ccc: "1" } } })).toBe(
      "1"
    );
  });

  test("object with keys present DotNotation", () => {
    expect(path("aaa.bbb.ccc")({ aaa: { bbb: { ccc: "1" } } })).toBe(
      "1"
    );
  });

  test("object with keys missing", () => {
    expect(path(["aaa", "ddd", "ccc"])({ aaa: { bbb: { ccc: "1" } } })).toBe(
      undefined
    );
  });

  test("map with keys present", () => {
    expect(
      path(["aaa", "bbb", "ccc"])(
        new Map([["aaa", new Map([["bbb", new Map([["ccc", "ccc"]])]])]])
      )
    ).toBe("ccc");
  });

  test("map with keys missing", () => {
    expect(
      path(["aaa", "ddd", "ccc"])(
        new Map([["aaa", new Map([["bbb", new Map([["ccc", "ccc"]])]])]])
      )
    ).toBe(undefined);
  });

  test("array with keys present", () => {
    expect(path([0, 0, 0])([[["1"]]])).toBe("1");
  });

  test("array with keys missing", () => {
    expect(path([0, 1, 0])([[["1"]]])).toBe(undefined);
  });
});
