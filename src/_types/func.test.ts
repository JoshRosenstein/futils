import { assertTrue, Equals } from "typescript-test-utils";
import { ArgsType, Func } from "./func";

it("ArgsType", () => {
  type TestFunction = (a: string, b: number, c: null) => void;

  assertTrue<Equals<ArgsType<TestFunction>[0], string>>();
  assertTrue<Equals<ArgsType<TestFunction>[1], number>>();
  assertTrue<Equals<ArgsType<TestFunction>[2], null>>();
});

it("Func", () => {
  assertTrue<
    Equals<
      Func<[number, boolean], string>,
      (...args: [number, boolean]) => string
    >
  >();
});
