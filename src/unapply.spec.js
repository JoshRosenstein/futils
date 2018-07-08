
import unapply from "./unapply"
describe("unapply", () => {

  test("Works", () => {
    expect(unapply(JSON.stringify)(1, 2, 3)).toEqual('[1,2,3]')
  })

  test("returns a function which is always passed one argument", () => {
const fn = unapply(function() { return arguments.length; });

    expect(fn()).toEqual(1)
    expect(fn('x')).toEqual(1)
    expect(fn('x', 'y')).toEqual(1)
  })

  test("returns a function which is always passed one argument", () => {
    const fn = unapply(function(xs) { return '[' + xs + ']'; });
    expect(fn()).toEqual('[]')
    expect(fn(2, 4, 6)).toEqual('[2,4,6]')
  })
  test("returns a function with length 0", () => {
    const fn = unapply(x=>x);
    expect(fn.length).toEqual(0)
  })

})
