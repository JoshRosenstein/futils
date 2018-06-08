import key from "./index";

describe("key", () => {
  it("Object found key", () => {
    const a = key("aaa")({ aaa: "1" });
    const eA = "1";

    expect(a).toEqual(eA);
  });

  it("Object found key", () => {
    const a = key("aaa")({ aaa: "1" });
    const eA = "1";

    expect(a).toEqual(eA);
  });

  it("Object missing key", () => {
    const a = key("bbb")({ aaa: "1" });
    const eA = undefined;

    expect(a).toEqual(eA);
  });

  it("undefined missing key", () => {
    const a = key("bbb")(undefined);
    const eA = undefined;

    expect(a).toEqual(eA);
  });

  it("Array missing key", () => {
    const a = key(0)(["aaa"]);
    const eA = "aaa";

    expect(a).toEqual(eA);
  });

  it("String found key", () => {
    const a = key(0)("abc");
    const eA = "a";

    expect(a).toEqual(eA);
  });

  it("Map found key", () => {
    const a = key("aaa")(new Map([["aaa", "aaa"]]));
    const eA = "aaa";

    expect(a).toEqual(eA);
  });
});
