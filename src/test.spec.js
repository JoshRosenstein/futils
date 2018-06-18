import test from "./test";

describe("test", () => {


  it("works", () => {

    expect(test(/^x/, 'xyz')).toBeTruthy()
    expect(test(/^y/, 'xyz')).toBeFalsy()

  })


})
