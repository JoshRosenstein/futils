import concat from "./index";

describe("concat", () => {


  it("works", () => {
    expect(concat('ABC', 'DEF')).toEqual('ABCDEF')
  expect(concat([4, 5, 6], [1, 2, 3])).toEqual([4, 5, 6, 1, 2, 3])
  })


})
