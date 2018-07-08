import applicators from "./zipApply";
import objOf from './objOf'
describe("applicators", () => {
  it("Object", () => {
    const a = applicators({
  x: x=>x+1,
  y: x=>x-1
})({
  x: -1,
  y: 1
})
    const eA = {
  x: 0,
  y: 0
}

    expect(a).toEqual(eA);
  });

  it("Object Nested", () => {
    const a = applicators({
  x: x=>x+1,
  y: x=>x-1
})({
  x: -1,
  y: 1
})
    const eA = {
  x: 0,
  y: 0
}

    expect(a).toEqual(eA);
  })

  it("Array", () => {
    const a = applicators([
  objOf(["point", "x"]),
  objOf(["point", "y"]),
  objOf(["point", "z"]),
])([
  40.453,
  2.2,
  423.0,
])
    const eA = [
  {point: {x: 40.453}},
  {point: {y: 2.2}},
  {point: {z: 423.0}},
]

    expect(a).toEqual(eA);
  });

});
