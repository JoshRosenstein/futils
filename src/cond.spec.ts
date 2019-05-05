import { always } from './always';
import { cond } from './cond';
import { F } from './F';
import { identity } from './identity';
import { T } from './T';

describe('cond', () => {
  it('should call fn if predicate satisfies', () => {
    const fns = [
      [jest.fn(F), jest.fn(identity)],
      [jest.fn(T), jest.fn(identity)],
      [jest.fn(T), jest.fn(identity)],
    ];
    //@ts-ignore
    expect(cond(fns)('test')).toBe('test');
    expect(fns[0][0]).toBeCalledWith('test');
    expect(fns[0][1]).not.toBeCalled();
    expect(fns[1][0]).toBeCalledWith('test');
    expect(fns[1][1]).toBeCalledWith('test');
    expect(fns[2][0]).not.toBeCalled();
    expect(fns[2][1]).not.toBeCalled();
  });

  test('returns value from callback for matched condition', () => {
    const val = cond([
      [(i) => i === 3, () => 3],
      [(i) => i > 1, () => 2],
      [() => true, () => 1],
    ]);
    expect(val(1)).toBe(1);
    expect(val(2)).toBe(2);
    expect(val(3)).toBe(3);
  });

  test('returns undefined when no one condition is true', () => {
    const val = cond([[(i) => i === 3, () => 3]]);
    expect(val(4)).toBe(undefined);
  });

  test('returns undefined when no conditions passes', () => {
    const val = cond([]);
    expect(val()).toBe(undefined);
  });

  test('R', () => {
    const fn = cond([
      [(x: number) => x === 0, always('water freezes at 0°C')],
      [(x: number) => x === 100, always('water boils at 100°C')],
      [T, (temp) => `nothing special happens at ${temp}°C`],
    ]);

    expect(fn(0)).toBe('water freezes at 0°C');
    expect(fn(50)).toBe('nothing special happens at 50°C');
    expect(fn(100)).toBe('water boils at 100°C');
  });
});
