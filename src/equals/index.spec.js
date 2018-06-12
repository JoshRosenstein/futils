import equals from "./index";

describe("equals", () => {
  var a = []
  var b = a

  it("tests for deep equality of its operands", () => {
    expect(equals(100, 100)).toBeTruthy()
    expect(equals([1], [1])).toBeTruthy()
    expect(equals(100, "100")).toBeFalsy()
  })

  it("considers equal Boolean primitives equal", () => {
    expect(equals(true, true)).toBeTruthy()
    expect(equals(false, false)).toBeTruthy()
    expect(equals(true, false)).toBeFalsy()
    expect(equals(false, true)).toBeFalsy()
  })

  it("considers equivalent Boolean objects equal", () => {
    expect(equals(new Boolean(true), new Boolean(true))).toBeTruthy()
    expect(equals(new Boolean(false), new Boolean(false))).toBeTruthy()
    expect(equals(new Boolean(true), new Boolean(false))).toBeFalsy()
    expect(equals(new Boolean(false), new Boolean(true))).toBeFalsy()
  })

  it("considers equal number primitives equal", () => {
    expect(equals(0, 0)).toBeTruthy()
    expect(equals(0, 1)).toBeFalsy()
  })

  it("considers equivalent Number objects equal", () => {
    expect(equals(new Number(0), new Number(0))).toBeTruthy()
    expect(equals(new Number(1), new Number(0))).toBeFalsy()
  })

  it("considers equal string primitives equal", () => {
    expect(equals("", "")).toBeTruthy()
    expect(equals("", "foo")).toBeFalsy()
  })

  it("considers equivalent String objects equal", () => {
    expect(equals(new String(""), new String(""))).toBeTruthy()
    expect(equals(new String(""), new String("x"))).toBeFalsy()
  })

  it("handles objects", () => {
    expect(equals({}, {})).toBeTruthy()
    expect(equals({ a: 1, b: 2 }, { a: 1, b: 2 })).toBeTruthy()
    expect(equals({ a: 2, b: 3 }, { b: 3, a: 2 })).toBeTruthy()
    expect(equals({ a: 2, b: 3 }, { a: 3, b: 3 })).toBeFalsy()
    expect(equals({ a: 2, b: 3, c: 1 }, { a: 2, b: 3 })).toBeFalsy()
  })

  it("handles regex", () => {
    expect(equals(/\s/, /\s/)).toBeTruthy()
    expect(equals(/\s/, /\d/)).toBeFalsy()
  })

  it("handles lists", () => {
    var listA = [1, 2, 3]
    var listB = [1, 3, 2]

    expect(equals([], {})).toBeFalsy()
    expect(equals(listA, listB)).toBeFalsy()
  })

  it("handles dates", () => {
    expect(equals(new Date(0), new Date(0))).toBeTruthy()
    expect(equals(new Date(1), new Date(1))).toBeTruthy()
    expect(equals(new Date(0), new Date(1))).toBeFalsy()
  })

  it.skip("compares Map objects by value", () => {
    expect(equals(new Map([]), new Map([]))).toBeTruthy()
    expect(equals(new Map([]), new Map([[1, "a"]]))).toBeFalsy()
    expect(equals(new Map([[1, "a"]]), new Map([[1, "b"]]))).toBeFalsy()
    expect(equals(new Map([[1, "a"]]), new Map([[1, "a"]]))).toBeTruthy()
  })
})
