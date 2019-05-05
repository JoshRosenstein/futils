import { isArray } from './isArray';

describe('isArray', () => {
  it('Works', () => {
    expect(isArray([])).toBeTruthy();
    expect(isArray([1, 2])).toBeTruthy();
    expect(isArray({})).toBeFalsy();
  });
});
