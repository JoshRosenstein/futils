import toPairs from "./index";

describe("toPairs", () => {
  it("Object", () => {
    const a = toPairs({
      aaa: "a",
      bbb: "b",
      ccc: "c"
    });
    const eA = [["aaa", "a"], ["bbb", "b"], ["ccc", "c"]];

    expect(a).toEqual(eA);
  });
  it("Array", () => {
    const a = toPairs(["a", "b", "c"]);
    const eA = [[0, "a"], [1, "b"], [2, "c"]];

    expect(a).toEqual(eA);
  });
});
