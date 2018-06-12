import reduceRight from "./index";

describe("reduceRight", () => {
  var avg = function(a, b) {
    return (a + b) / 2
  }

  it("folds lists in the right order", function() {
    expect(
      reduceRight(
        function(a, b) {
          return a + b
        },
        "",
        ["a", "b", "c", "d"]
      )
    ).toEqual("abcd")
  })

  it("folds lists in the right order", function() {
    expect(
      reduceRight(
        function(a, b) {
          return a - b
        },
        0,
        [1, 2, 3, 4]
      )
    ).toEqual(-2)
  })
})
