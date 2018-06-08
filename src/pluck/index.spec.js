import pluck from "./index";
describe('pluck', () => {
test("pluck", () => {
  expect(
    pluck(["attributes", "name"])([
      {
        id: "1",
        attributes: {
          name: "Robinson",
          age: 29,
          height: "5'10\""
        }
      },
      {
        id: "2",
        attributes: {
          name: "David",
          age: 29,
          height: "5'8\""
        }
      }
    ])
  ).toEqual(["Robinson", "David"]);

  expect(
    pluck("id")([
      {
        id: "1",
        attributes: {
          name: "Robinson",
          age: 29,
          height: "5'10\""
        }
      },
      {
        id: "2",
        attributes: {
          name: "David",
          age: 29,
          height: "5'8\""
        }
      }
    ])
  ).toEqual(["1", "2"]);
});
});
