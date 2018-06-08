import mergeAllRight from "./index";

describe("mergeAllRight", () => {
  it("Array", () => {
    const a = mergeAllRight([["0"], ["1"], ["2"]]);
    const eA = ["0", "1", "2"];

    expect(a).toEqual(eA);
  });

  it("Object", () => {
    const a = mergeAllRight([{ aaa: "aaa" }, { bbb: "bbb" }, { ccc: "ccc" }]);
    const eA = {
      aaa: "aaa",
      bbb: "bbb",
      ccc: "ccc"
    };

    expect(a).toEqual(eA);
  });

  it("Object2", () => {
    const a = mergeAllRight([{ aaa: "aaa" }, { aaa: "bbb" }, { ccc: "ccc" }]);
    const eA = { aaa: "bbb", ccc: "ccc" };

    expect(a).toEqual(eA);
  });
});
