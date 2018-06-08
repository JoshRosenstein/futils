import empty from "./index";

describe("empty", () => {
  it("Array (filled)", () => {
    const a = empty(["a"]);
    const eA = [];

    expect(a).toEqual(eA);
  });

  it("Object (filled)", () => {
    const a = empty({ aaa: "aaa" });
    const eA = {};

    expect(a).toEqual(eA);
  });

  it("Set (filled)", () => {
    const a = empty(new Set([1, 2, 3]));
    const eA = new Set();

    expect(a).toEqual(eA);
  });

  it("Map (filled)", () => {
    const a = empty(new Map([["a", "b"]]));
    const eA = new Map();

    expect(a).toEqual(eA);
  });

  it("String (filled)", () => {
    const a = empty("a");
    const eA = "";

    expect(a).toEqual(eA);
  });

  it("Array empty", () => {
    const a = empty([]);
    const eA = [];

    expect(a).toEqual(eA);
  });

  it("Object empty", () => {
    const a = empty({});
    const eA = {};

    expect(a).toEqual(eA);
  });

  it("Set empty", () => {
    const a = empty(new Set());
    const eA = new Set();

    expect(a).toEqual(eA);
  });

  it("Map empty", () => {
    const a = empty(new Map());
    const eA = new Map();

    expect(a).toEqual(eA);
  });

  it("String empty", () => {
    const a = empty("");
    const eA = "";

    expect(a).toEqual(eA);
  });
});
