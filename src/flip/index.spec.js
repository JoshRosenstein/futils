import flip from "./index"
import prop from "../prop"

describe("flip", () => {
  it("Object (Empty)", () => {
    const a = flip(prop)({ aaa: "1" })("aaa")
    const eA = "1"

    expect(a).toEqual(eA)
  })
})
