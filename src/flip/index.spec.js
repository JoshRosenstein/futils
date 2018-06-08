import flip from "./index";
import key from "../key";

describe("flip", () => {
  it("Object (Empty)", () => {
    const a = flip(key)({ aaa: "1" })("aaa");
    const eA = "1";

    expect(a).toEqual(eA);
  });
});
