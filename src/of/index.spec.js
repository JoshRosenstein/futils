import of from "./index";

describe("of", () => {
  it("Object", () => {
    const a = of("aaa")("bbb")({});
    const eA = { aaa: "bbb" };

    expect(a).toEqual(eA);
  });

  it("Array", () => {
    const a = of(null)("bbb")([]);
    const eA = ["bbb"];

    expect(a).toEqual(eA);
  });

  it("Map", () => {
    const a = of("aaa")("bbb")(new Map());
    const eA = new Map([["aaa", "bbb"]]);

    expect(a).toEqual(eA);
  });

  it("Set", () => {
    const a = of("aaa")("bbb")(new Map());
    const eA = new Map([["aaa", "bbb"]]);

    expect(a).toEqual(eA);
  });

  it("String", () => {
    const a = of(null)("a")("");
    const eA = "a";

    expect(a).toEqual(eA);
  });
});
