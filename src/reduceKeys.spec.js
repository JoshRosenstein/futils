import reduceKeys from "./reduceKeys"

describe("reduceKeys", () => {
  const reducer = (acc, current) => `${acc}/${current}`,
    initial = "."

  test("Array", () => {
    const a = reduceKeys(reducer)(initial)(["a", "b", "c"])
    const eA = "./0/1/2"

    expect(a).toEqual(eA)
  })

  test("Object", () => {
    const a = reduceKeys(reducer)(initial)({
      aaa: "a",
      bbb: "b",
      ccc: "c"
    })
    const eA = "./aaa/bbb/ccc"

    expect(a).toEqual(eA)
  })

  test("String", () => {
    const a = reduceKeys(reducer)(initial)("abc")
    const eA = "./0/1/2"

    expect(a).toEqual(eA)
  })
})
