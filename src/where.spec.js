import where from "./where";

describe("Where", () => {
  const equals = a => b => a === b;
  test("Deep Map vs Deep Object partial true", () => {
    expect(
      where(
        new Map([[["attributes", "name"], equals("Jack Black")]])
      )({
        attributes: {
          name: "Jack Black",
          age: 30
        }
      })
    ).toBe(true);
  });

  test("Object vs Object partial true", () => {
    expect(
      where({ name: equals("Jack Black") })({
        name: "Jack Black",
        age: 30
      })
    ).toBe(true);
  });

  test("Object vs Map partial true", () => {
    expect(
      where({ name: equals("Jack Black") })(
        new Map([["name", "Jack Black"], ["age", 30]])
      )
    ).toBe(true);
  });

  test("Array vs Array partial true", () => {
    expect(
      where([equals("Jack Black")])(["Jack Black", 30])
    ).toBe(true);
  });

  test("Deep Map vs Deep Object all false", () => {
    expect(
      where(
        new Map([[["attributes", "name"], equals("Jac Black")]])
      )({
        attributes: {
          name: "Jack Black",
          age: 30
        }
      })
    ).toBe(false);
  });

  test("Object vs Object all false", () => {
    expect(
      where({ name: equals("Jac Black") })({
        name: "Jack Black",
        age: 30
      })
    ).toBe(false);
  });

  test("Object vs Map all false", () => {
    expect(
      where({ name: equals("Jac Black") })(
        new Map([["name", "Jack Black"], ["age", 30]])
      )
    ).toBe(false);
  });

  test("Array vs Array all false", () => {
    expect(
      where([equals("Jac Black")])(["Jack Black", 30])
    ).toBe(false);
  });

  test("Deep Map vs Deep Object partial false", () => {
    expect(
      where(
        new Map([
          [["attributes", "name"], equals("Jack Black")],
          [["attributes", "age"], equals(31)]
        ])
      )({
        attributes: {
          name: "Jack Black",
          age: 30
        }
      })
    ).toBe(false);
  });

  test("Object vs Object partial false", () => {
    expect(
      where({
        name: equals("Jack Black"),
        age: equals(31)
      })({
        name: "Jack Black",
        age: 30
      })
    ).toBe(false);
  });

  test("Object vs Map partial false", () => {
    expect(
      where({
        name: equals("Jack Black"),
        age: equals(31)
      })(new Map([["name", "Jack Black"], ["age", 30]]))
    ).toBe(false);
  });

  test("Array vs Array partial false", () => {
    expect(
      where([equals("Jack Black"), equals(31)])([
        "Jack Black",
        30
      ])
    ).toBe(false);
  });
});
