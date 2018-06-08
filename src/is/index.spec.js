import isType from "./index";

describe("isType", () => {
  it("isNull", () => {
    const a = isType("null")(null);
    expect(a).toBeTruthy();
  });

  it("isUndefined", () => {
    const a = isType("undefined")(undefined);
    expect(a).toBeTruthy();
  });

  it("isString", () => {
    const a = isType("String")("String");
    expect(a).toBeTruthy();
  });

  it("isNotString", () => {
    const a = isType("String")(null);
    const b = isType("String")(undefined);
    const c = isType("String")(1);
    expect(a).toBeFalsy();
    expect(b).toBeFalsy();
    expect(c).toBeFalsy();
  });

  it("isArray", () => {
    const a = isType("Array")([]);
    expect(a).toBeTruthy();
  });

  it("isObject", () => {
    const a = isType("Object")({});
    expect(a).toBeTruthy();
  });

  it("isNumber", () => {
    const a = isType("Number")(1);
    expect(a).toBeTruthy();
  });
});
