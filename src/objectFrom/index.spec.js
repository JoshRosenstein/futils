import objectFrom from "./index";

test("works", () => {
  expect(objectFrom(["key", "subkey"])("value")).toEqual({
    key: { subkey: "value" }
  });
});
