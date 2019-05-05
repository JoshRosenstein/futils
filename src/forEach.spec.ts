import { forEach } from './forEach';

describe('forEach', () => {
  it('performs the passed in function on each element of the list', () => {
    const list = [
      { x: 1, y: 2 },
      { x: 100, y: 200 },
      { x: 300, y: 400 },
      { x: 234, y: 345 },
    ];
    const sideEffect = {};
    forEach((value, key) => (sideEffect[value.x] = value.y), list);

    expect(sideEffect).toEqual({ 1: 2, 100: 200, 300: 400, 234: 345 });
  });

  it('Curries', () => {
    const list = [
      { x: 1, y: 2 },
      { x: 100, y: 200 },
      { x: 300, y: 400 },
      { x: 234, y: 345 },
    ];
    const sideEffect = {};
    forEach((value, key) => (sideEffect[value.x] = value.y))(list);

    expect(sideEffect).toEqual({ 1: 2, 100: 200, 300: 400, 234: 345 });
  });

  test('Array', () => {
    const sideEffect = {};
    const functor = ['a', 'b', 'c'];

    const mockFn = jest.fn(([value, key]) => [value, key]);

    const sample = (value, key) => mockFn([value, key]);
    forEach(sample, functor);

    expect(mockFn).toBeCalledWith(['a', 0]);
    expect(mockFn).toBeCalledWith(['b', 1]);
    expect(mockFn).toBeCalledWith(['c', 2]);
  });

  test('Object', () => {
    const sideEffect = {};
    const functor = {
      aaa: '1',
      bbb: '2',
      ccc: '3',
    };

    const mockFn = jest.fn(([value, key]) => [value, key]);

    const sample = (value, key) => mockFn([value, key]);
    forEach(sample, functor);

    expect(mockFn).toBeCalledWith(['1', 'aaa']);
    expect(mockFn).toBeCalledWith(['2', 'bbb']);
    expect(mockFn).toBeCalledWith(['3', 'ccc']);
  });
});
