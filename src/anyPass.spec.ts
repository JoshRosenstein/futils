import anyPass from './anyPass';

describe('anyPass', () => {
  const odd = function(n: number) {
    return n % 2 !== 0;
  };
  const gt20 = function(n: number) {
    return n > 20;
  };
  const lt5 = function(n: number) {
    return n < 5;
  };

  it('reports whether any predicates are satisfied by a given value', () => {
    const ok = anyPass<number>([odd, gt20, lt5]);

    expect(ok(7)).toBeTruthy();
    expect(ok(9)).toBeTruthy();
    expect(ok(3)).toBeTruthy();
    expect(ok(22)).toBeTruthy();
    expect(ok(10)).toBeFalsy();
    expect(ok(18)).toBeFalsy();
  });

  it('returns false for an empty predicate list', () => {
    expect(anyPass([])(3)).toBeFalsy();
  });

  it('should return false', () => {
    const f1 = jest.fn(() => false);
    const f2 = jest.fn(() => false);
    const f3 = jest.fn(() => false);

    expect(anyPass<number>([f1, f2, f3], 1, 2, 3)).toBe(false);
    expect(f1).toBeCalledWith(1, 2, 3);
    expect(f2).toBeCalledWith(1, 2, 3);
    expect(f3).toBeCalledWith(1, 2, 3);
  });
  it('should return true', () => {
    const f1 = jest.fn(() => false);
    const f2 = jest.fn(() => true);
    const f3 = jest.fn(() => false);

    expect(anyPass<number>([f1, f2, f3], 1, 2, 3)).toBe(true);
    expect(f1).toBeCalledWith(1, 2, 3);
    expect(f2).toBeCalledWith(1, 2, 3);
    expect(f3).not.toBeCalled();
  });
});
