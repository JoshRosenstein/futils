import nth from "./index";
var list = ["foo", "bar", "baz", "quux"];

describe("nth", () => {
  test("Array", () => {
    expect(nth(0, list)).toEqual("foo");
    expect(nth(1, list)).toEqual("bar");
    expect(nth(2, list)).toEqual("baz");
    expect(nth(3, list)).toEqual("quux");
    expect(nth(4, list)).toEqual(undefined);
  });

  test("String", () => {
    expect(nth(0, "abc")).toEqual("a");
    expect(nth(1, "abc")).toEqual("b");
    expect(nth(2, "abc")).toEqual("c");
    expect(nth(3, "abc")).toEqual("");
    expect(nth(4, "abc")).toEqual("");
  });
});
