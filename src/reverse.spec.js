import reverse from "./reverse";

describe("reverse ", () => {
  it("Array", () => {
    const a = reverse([1, 2, 3]);
    const eA = reverse([1, 2, 3]);

    expect(a).toEqual(eA);
  });

  it("Single Array", () => {
    const a = reverse([1]);
    const eA = [1];

    expect(a).toEqual(eA);
  });

  it("String", () => {
    const a = reverse("abc");
    const eA = "cba";

    expect(a).toEqual(eA);
  });
});
