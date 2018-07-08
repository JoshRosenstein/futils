import omitKey from "./omitKey";

describe("omitKey", () => {

const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

  it("copies an object omitting the single properties", () => {
    const a = omitKey('a', obj)
    const eA = { b: 2, c: 3, d: 4, e: 5, f: 6}

    expect(a).toEqual(eA)
  })

})
