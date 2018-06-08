import mergeAllDeepLeft from "./index";

describe("mergeAllDeepLeft", () => {
  it("Array", () => {
    const a = mergeAllDeepLeft([{a:{a:1}},{a:{b:1}}]);
    const eA = {"a": {"a": 1,b:1}}

    expect(a).toEqual(eA);
  });

  it("Array", () => {
    const a = mergeAllDeepLeft([{a:{a:1}},{a:{a:2}}]);
    const eA = {"a": {"a": 1}}

    expect(a).toEqual(eA);
  });

});
