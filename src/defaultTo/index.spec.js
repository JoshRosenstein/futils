import defaultTo from "./index";

describe("defaultTo", () => {
  it("returns the default value if input is null, undefined or NaN", () => {
    const defaultTo66 = defaultTo(66)

    expect(defaultTo66(null)).toEqual(66)
    expect(defaultTo66(undefined)).toEqual(66)
    expect(defaultTo66(NaN)).toEqual(66)
  })

  it("returns the input value even if it is considered falsy", () => {
    const defaultTo66 = defaultTo(66)

    expect(defaultTo66("")).toEqual("")
    expect(defaultTo66(0)).toEqual(0)
    expect(defaultTo66(false)).toEqual(false)
    expect(defaultTo66([])).toEqual([])
  })
})
