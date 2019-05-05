/*eslint no-unused-vars: 0*/
import { either } from './either';

describe('either', () => {
  it('Types', () => {
    // FlowExpectedError
    const t = either(() => true, () => 1); //Error FuncB does not result in boolean
    //$FlowExpectedError
    const tt = either(() => true, () => false); //Error FuncB does not result in boolean
    expect(true).toBeTruthy();
  });

  it('combines two boolean-returning functions into one', () => {
    const even = function(x) {
      return x % 2 === 0;
    };
    const gt10 = function(x) {
      return x > 10;
    };
    const f = either(even, gt10);

    expect(f(8)).toBeTruthy();
    expect(f(13)).toBeTruthy();
    expect(f(7)).toBeFalsy();
  });

  it('accepts functions that take multiple parameters', () => {
    const between = function(a, b, c) {
      return a < b && b < c;
    };
    const total20 = function(a, b, c) {
      return a + b + c === 20;
    };

    const f = either(between, total20);

    expect(f(4, 5, 8)).toBeTruthy();
    expect(f(12, 2, 6)).toBeTruthy();
    expect(f(7, 5, 1)).toBeFalsy();
  });
});
