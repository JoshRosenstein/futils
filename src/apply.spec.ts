import { apply } from './apply';

describe('apply', () => {
  function expectNumberOfArgs(f, n, args) {
    let k = n;
    while (k > 0) {
      expect(typeof f).toBe('function');
      f = f(args[n - k--]);
    }
    expect(typeof f).not.toBe('function');
  }

  test('it accepts exact 2 arguments', () => {
    expectNumberOfArgs(apply, 2, [
      function() {
        return [].slice.call(arguments);
      },
      [1, 2, 3],
    ]);
  });

  test('applies array of arguments to cb', () => {
    const a = apply(function() {
      return Array.prototype.slice.call(arguments);
    });
    expect(a([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
