import mergeWith from "./index";

describe("mergeWith", () => {
  it("Array", () => {
    const fn = left => right => right + left;
    const left = { beta: "a" };
    const right = { beta: "b" };

    const a = mergeWith(fn)(left)(right);
    const eA = { beta: "ba" };

    expect(a).toEqual(eA);
  });

  it("Array", () => {
    const fn = left => right => right + left;
    const left = {
      alpha: "0",
      beta: "1"
    };
    const right = {
      beta: "2",
      zeta: "3"
    };

    const a = mergeWith(fn)(left)(right);
    const eA = {
      alpha: "0",
      beta: "21",
      zeta: "3"
    };

    expect(a).toEqual(eA);
  });
});
