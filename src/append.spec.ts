import { append } from './append';

describe('append', () => {
  it('Works', () => {
    const e = append('a')(['b']);
    const e2 = append('c')('ab');
    const e3 = append('px')(1);

    expect(e).toEqual(['b', 'a']);
    expect(e2).toEqual('abc');
    expect(e3).toEqual('1px');
  });
});
