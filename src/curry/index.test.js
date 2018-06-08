import curry from "./index";
import compose from "../compose";
describe("Curry", () => {
  it("should curry", () => {
    expect(curry((x, y, z) => x + y + z)(1, 2, 3)).toEqual(6);
    expect(curry((x, y, z) => x + y + z)(1)(2, 3)).toEqual(6);
    expect(curry((x, y, z) => x + y + z)(1, 2)(3)).toEqual(6);
    expect(curry((x, y, z) => x + y + z)(1)(2)(3)).toEqual(6);
  });

  it("should be able to compose an arbitrary numberOps of functions and execute them as expected from generated function", () => {
    let min = curry(Math.min),
      max = curry(Math.max),
      pow = curry(Math.pow),
      composed = compose(min(8), max(5), pow(2)),
      randomNum = curry((start, end) =>
        Math.round(Math.random() * end + start)
      ),
      random = randomNum(0),
      expectedFor = num => min(8, max(5, pow(num, 2)));
    [8, 5, 3, 2, 1, 0, random(89), random(55), random(34)].forEach(function(
      num
    ) {
      expect(composed(num)).toEqual(expectedFor(num));
    });
  });
});
