import { flip } from './flip';
import { prop } from './prop';

describe('flip', () => {
  it('Works', () => {
    const a = flip(prop)({ aaa: '1' })('aaa');
    const eA = '1';

    expect(a).toEqual(eA);
  });

  test('returns array of reversed args', () => {
    function toArr(a, b, c) {
      return [a, b, c];
    }

    expect(flip(toArr)(1, 2, 3)).toEqual([2, 1, 3]);
  });
});
