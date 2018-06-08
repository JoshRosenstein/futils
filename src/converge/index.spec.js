import converge from "./index";

describe.skip("converge", () => {
  var mult = function(a, b) {
    return a * b;
  };

  var f1 = converge(mult, [
    function(a) {
      return a;
    },
    function(a) {
      return a;
    }
  ]);
  var f2 = converge(mult, [
    function(a) {
      return a;
    },
    function(a, b) {
      return b;
    }
  ]);
  var f3 = converge(mult, [
    function(a) {
      return a;
    },
    function(a, b, c) {
      return c;
    }
  ]);

  it("converges", () => {
    expect(f1.length).toEqual(0);
    expect(f2.length).toEqual(2);
    expect(f3.length).toEqual(3);
    expect(f2(6)(7)).toEqual(42);
  });
});
