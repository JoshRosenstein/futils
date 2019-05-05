import { createCounter } from './_internal/_counter';
import { dropArr } from './dropArr';
import { flow } from './flow';
import { takeArr } from './takeArr';

const array = [1, 2, 3, 4, 5];
const expected = [3, 4, 5];

describe('data first', () => {
  test('should dropArr last', () => {
    expect(dropArr(array, 2)).toEqual(expected);
  });
});

describe('data last', () => {
  test('dropArr', () => {
    const result = flow(
      array,
      dropArr(2),
    );
    expect(result).toEqual(expected);
  });
  test('dropArr with take', () => {
    const counter = createCounter();
    const result = flow(
      array,
      counter.fn(),
      dropArr(2),
      takeArr(2),
    );
    expect(counter.count).toHaveBeenCalledTimes(4);
    expect(result).toEqual([3, 4]);
  });
});
