import objOf from "./index"

describe("objOf", () => {
  test("creates an object containing a single key:value pair", () => {
    expect(objOf("foo", 42)).toEqual({ foo: 42 })
  })

  test("creates an object with Numeric Key", () => {
    expect(objOf(5)("value")).toEqual({ "5": "value" })
  })

  test("creates an nested object with Array Keys ", () => {
    expect(objOf(["key", "subkey"])("value")).toEqual({
      key: { subkey: "value" }
    })
  })

  test("creates an nested object With object as Value ", () => {
    expect(objOf(["key", "subkey"])({ a: "value" })).toEqual({
      key: { subkey: { a: "value" } }
    })
  })
})
