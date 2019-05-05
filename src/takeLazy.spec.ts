import { takeLazy } from './takeLazy';

describe('data_first', () => {
  it('take', () => {
    expect(takeLazy([1, 2, 3, 4, 3, 2, 1], 3)).toEqual([1, 2, 3]);
  });
});

describe('data_last', () => {
  it('take', () => {
    expect(takeLazy(3)([1, 2, 3, 4, 3, 2, 1])).toEqual([1, 2, 3]);
  });
});
