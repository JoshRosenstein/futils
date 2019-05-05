import { filterArr } from './filterArr';
import { flow } from './flow';
import { mapArr } from './mapArr';
import { takeLazy } from './takeLazy';

describe('data_first', () => {
  it('map', () => {
    const result = mapArr([1, 2, 3], (x) => x * 2);
    expect(result).toEqual([2, 4, 6]);
  });
  it('map.indexed', () => {
    const result = mapArr.indexed([0, 0, 0], (x, i) => i);
    expect(result).toEqual([0, 1, 2]);
  });
});

describe('data_last', () => {
  it('map', () => {
    const result = flow(
      [1, 2, 3],
      mapArr((x) => x * 2),
    );
    expect(result).toEqual([2, 4, 6]);
  });
  it('map.indexed', () => {
    const result = flow(
      [0, 0, 0],
      mapArr.indexed((x, i) => i),
    );
    expect(result).toEqual([0, 1, 2]);
  });
});

describe('flow', () => {
  it('with take', () => {
    const count = jest.fn();
    const result = flow(
      [1, 2, 3],
      mapArr((x) => {
        count();
        return x * 10;
      }),
      takeLazy(2),
    );
    expect(count).toHaveBeenCalledTimes(2);
    expect(result).toEqual([10, 20]);
  });

  it('indexed', () => {
    const count = jest.fn();
    const result = flow(
      [0, 0, 0],
      mapArr.indexed((x, i) => {
        count();
        return i;
      }),
      takeLazy(2),
    );
    expect(count).toHaveBeenCalledTimes(2);
    expect(result).toEqual([0, 1]);
  });

  it('indexed: check index and items', () => {
    const indexes1: number[] = [];
    const indexes2: number[] = [];
    const anyItems1: number[][] = [];
    const anyItems2: number[][] = [];
    const result = flow(
      [1, 2, 3, 4, 5],
      mapArr.indexed((x, i, items) => {
        anyItems1.push([...items]);
        indexes1.push(i);
        return x;
      }),
      filterArr((x) => x % 2 === 1),
      mapArr.indexed((x, i, items) => {
        anyItems2.push([...items]);
        indexes2.push(i);
        return x;
      }),
    );
    expect(result).toEqual([1, 3, 5]);
    expect(indexes1).toEqual([0, 1, 2, 3, 4]);
    expect(indexes2).toEqual([0, 1, 2]);
    expect(anyItems1).toEqual([
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 2, 3, 4],
      [1, 2, 3, 4, 5],
    ]);
    expect(anyItems2).toEqual([[1], [1, 3], [1, 3, 5]]);
  });
});
