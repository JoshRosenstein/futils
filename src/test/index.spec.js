import test from "./index";

describe("test", () => {


  it("works", () => {

    expect(test(/^x/, 'xyz')).toBeTruthy()
    expect(test(/^y/, 'xyz')).toBeFalsy()

  })


})
