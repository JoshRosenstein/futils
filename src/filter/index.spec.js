import filter from "./index";

const isOdd = value => value % 2 !== 0;

describe("filter", () => {
  test("Array", () => {
    expect(filter(isOdd)([1, 2, 3, 4])).toEqual([1, 3]);
  });

  test("Object", () => {
    expect(
      filter(isOdd)({
        aaa: 1,
        bbb: 2,
        ccc: 3,
        ddd: 4
      })
    ).toEqual({
      aaa: 1,
      ccc: 3
    });
  });
});
