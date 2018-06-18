import toString from "./toString";

describe("toString", () => {
  it("Object", () => {
    const a = toString({
      aaa: "a",
      bbb: "b",
      ccc: "c"
    });
    const eA = [["aaa", "a"], ["bbb", "b"], ["ccc", "c"]];
    expect(a).toEqual("[object Object]");
  });

  it("Fn", () => {
    const a = toString(x => x);
    const eA = `function (x) {
      return x;
    }`;
    expect(a).toEqual(eA);
  });

  it("undefined", () => {
    const a = toString(undefined);
    const eA = "undefined";
    expect(a).toEqual(eA);
  });

  it("null", () => {
    const a = toString(null);
    const eA = "null";
    expect(a).toEqual(eA);
  });
  it("0", () => {
    const a = toString(0);
    const eA = "0";
    expect(a).toEqual(eA);
  });

  it("returns the string representation of a string primitive", () => {
    const a = toString("abc");
    const eA = 'abc';
    expect(a).toEqual(eA);
  });
});
