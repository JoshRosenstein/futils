import tail from "./tail";
import dropFirst from "./dropFirst";

describe("Slice", () => {
  describe("dropFirst", () => {
    test("Array", () => {
      const a = dropFirst(2)(["a", "b", "c"]);
      const res = ["c"];
      expect(a).toEqual(res);
    });

    test("Array2", () => {
      const a = dropFirst(1)(["a", "b", "c"]);
      const res = ["b", "c"];
      expect(a).toEqual(res);
    });

    test("String", () => {
      const a = dropFirst(2)("abc");
      const res = "c";
      expect(a).toEqual(res);
    });

    test("String", () => {
      const a = dropFirst(1)("abc");
      const res = "bc";
      expect(a).toEqual(res);
    });
  });
  test("Array", () => {
    const a = tail(["a", "b", "c"]);
    const res = ["b", "c"];
    expect(a).toEqual(res);
  });

  test("String", () => {
    const a = tail("abc");
    const res = "bc";
    expect(a).toEqual(res);
  });
});
