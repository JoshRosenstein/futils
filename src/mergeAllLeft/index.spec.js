import mergeAllLeft from "./index";

describe("mergeAllLeft", () => {
  it("Array", () => {
    const a = mergeAllLeft([["0"], ["1"], ["2"]]);
    const eA = ["2", "1", "0"];

    expect(a).toEqual(eA);
  });

  it("Object", () => {
    const a = mergeAllLeft([{ aaa: "aaa" }, { bbb: "bbb" }, { ccc: "ccc" }]);
    const eA = {
      aaa: "aaa",
      bbb: "bbb",
      ccc: "ccc"
    };

    expect(a).toEqual(eA);
  });

  it("Object2", () => {
    const a = mergeAllLeft([{ aaa: "aaa" }, { aaa: "bbb" }, { ccc: "ccc" }]);
    const eA = {
      aaa: "aaa",
      ccc: "ccc"
    };

    expect(a).toEqual(eA);
  });
});
