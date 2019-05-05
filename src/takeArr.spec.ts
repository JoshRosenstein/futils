import { takeArr } from './takeArr';

describe('data_first', () => {
  it('take', () => {
    expect(takeArr([1, 2, 3, 4, 3, 2, 1], 3)).toEqual([1, 2, 3]);
  });
});

describe('data_last', () => {
  it('take', () => {
    const e = takeArr(3)([1, 2, 3, 4, 3, 2, 1]);
    expect(e).toEqual([1, 2, 3]);
  });
});
