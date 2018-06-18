import where from "./where";

describe("Where", () => {
  const equals = a => b => a === b;
  test("Deep Map vs Deep Object partial true", () => {
    expect(
      where(
        new Map([[["attributes", "name"], equals("Kurtis Rainbolt-Greene")]])
      )({
        attributes: {
          name: "Kurtis Rainbolt-Greene",
          age: 30
        }
      })
    ).toBe(true);
  });

  test("Object vs Object partial true", () => {
    expect(
      where({ name: equals("Kurtis Rainbolt-Greene") })({
        name: "Kurtis Rainbolt-Greene",
        age: 30
      })
    ).toBe(true);
  });

  test("Object vs Map partial true", () => {
    expect(
      where({ name: equals("Kurtis Rainbolt-Greene") })(
        new Map([["name", "Kurtis Rainbolt-Greene"], ["age", 30]])
      )
    ).toBe(true);
  });

  test("Array vs Array partial true", () => {
    expect(
      where([equals("Kurtis Rainbolt-Greene")])(["Kurtis Rainbolt-Greene", 30])
    ).toBe(true);
  });

  test("Deep Map vs Deep Object all false", () => {
    expect(
      where(
        new Map([[["attributes", "name"], equals("Zurtis Rainbolt-Greene")]])
      )({
        attributes: {
          name: "Kurtis Rainbolt-Greene",
          age: 30
        }
      })
    ).toBe(false);
  });

  test("Object vs Object all false", () => {
    expect(
      where({ name: equals("Zurtis Rainbolt-Greene") })({
        name: "Kurtis Rainbolt-Greene",
        age: 30
      })
    ).toBe(false);
  });

  test("Object vs Map all false", () => {
    expect(
      where({ name: equals("Zurtis Rainbolt-Greene") })(
        new Map([["name", "Kurtis Rainbolt-Greene"], ["age", 30]])
      )
    ).toBe(false);
  });

  test("Array vs Array all false", () => {
    expect(
      where([equals("Zurtis Rainbolt-Greene")])(["Kurtis Rainbolt-Greene", 30])
    ).toBe(false);
  });

  test("Deep Map vs Deep Object partial false", () => {
    expect(
      where(
        new Map([
          [["attributes", "name"], equals("Kurtis Rainbolt-Greene")],
          [["attributes", "age"], equals(31)]
        ])
      )({
        attributes: {
          name: "Kurtis Rainbolt-Greene",
          age: 30
        }
      })
    ).toBe(false);
  });

  test("Object vs Object partial false", () => {
    expect(
      where({
        name: equals("Kurtis Rainbolt-Greene"),
        age: equals(31)
      })({
        name: "Kurtis Rainbolt-Greene",
        age: 30
      })
    ).toBe(false);
  });

  test("Object vs Map partial false", () => {
    expect(
      where({
        name: equals("Kurtis Rainbolt-Greene"),
        age: equals(31)
      })(new Map([["name", "Kurtis Rainbolt-Greene"], ["age", 30]]))
    ).toBe(false);
  });

  test("Array vs Array partial false", () => {
    expect(
      where([equals("Kurtis Rainbolt-Greene"), equals(31)])([
        "Kurtis Rainbolt-Greene",
        30
      ])
    ).toBe(false);
  });
});
