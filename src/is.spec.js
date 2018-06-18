import is from "./is";

describe("is", () => {
  it("isNull", () => {
    const a = is("null")(null);
    expect(a).toBeTruthy();
  });

  it("isUndefined", () => {
    const a = is("undefined")(undefined);
    expect(a).toBeTruthy();
  });

  it("isString", () => {
    const a = is("String")("String");
    expect(a).toBeTruthy();
  });

  it("isNotString", () => {
    const a = is("String")(null);
    const b = is("String")(undefined);
    const c = is("String")(1);
    expect(a).toBeFalsy();
    expect(b).toBeFalsy();
    expect(c).toBeFalsy();
  });

  it("isArray", () => {
    const a = is("Array")([]);
    expect(a).toBeTruthy();
  });

  it("isObject", () => {
    const a = is("Object")({});
    expect(a).toBeTruthy();
  });

  it("isNumber", () => {
    const a = is("Number")(1);
    expect(a).toBeTruthy();
  });
});
