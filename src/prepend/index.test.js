import prepend from "./index";

describe("attach", () => {
  it("Object (Empty)", () => {
    const a = prepend("a")(["b"]);
    const eA = ["a", "b"];

    expect(a).toEqual(eA);
  });

  it("Object (Empty)", () => {
    const a = prepend("a")("bc");
    const eA = "abc";

    expect(a).toEqual(eA);
  });
});
