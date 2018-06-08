import toArray from "./index";

describe("toArray", () => {
  test("String", () => {
    const a = toArray("1");
    expect(a).toEqual(["1"]);
  });

  test("Array", () => {
    const a = toArray([1]);

    expect(a).toEqual([1]);
  });

  test("Number", () => {
    const a = toArray(1);

    expect(a).toEqual([1]);
  });
});
