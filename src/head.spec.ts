import { head } from './head';

describe('Head', () => {
  test('Array', () => {
    const a = head(['a', 'b', 'c']);
    const res = ['a', 'b'];
    expect(a).toEqual(res);
  });

  test('String', () => {
    const a = head('abc');
    const res = 'ab';
    expect(a).toEqual(res);
  });
});
