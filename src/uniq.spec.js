
import uniq from "./uniq"
describe("uniq", () => {

  test("Works", () => {
    const list = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    expect(uniq([1, 2, 3, 1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3])
  })



})
