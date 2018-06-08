import reduceWithValueKey from "./index"

describe("reduceWithValueKey", () => {
  const reducer = acc => value => key => `${acc}/${value}:${key}`,
    initial = "."

  test("Array", () => {
    const a = reduceWithValueKey(reducer, initial)(["a", "b", "c"])
    const eA = "./a:0/b:1/c:2"

    expect(a).toEqual(eA)
  })

  test("Object", () => {
    const a = reduceWithValueKey(reducer, initial)({
      aaa: "a",
      bbb: "b",
      ccc: "c"
    })

    const eA = "./a:aaa/b:bbb/c:ccc"

    expect(a).toEqual(eA)
  })

  test("Set", () => {
    const a = reduceWithValueKey(reducer, initial)(new Set(["a", "b", "c"]))
    const eA = "./a:undefined/b:undefined/c:undefined"
    expect(a).toEqual(eA)
  })

  test("Map", () => {
    const a = reduceWithValueKey(reducer, initial)(
      new Map([["aaa", "a"], ["bbb", "b"], ["ccc", "c"]])
    )
    const eA = "./a:aaa/b:bbb/c:ccc"
    expect(a).toEqual(eA)
  })

  test("String", () => {
    const a = reduceWithValueKey(reducer, initial)("abc")
    const eA = "./a:0/b:1/c:2"
    expect(a).toEqual(eA)
  })
})
