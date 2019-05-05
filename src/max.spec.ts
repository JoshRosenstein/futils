import max from './max';

describe('max', () => {
  it('Works with Numbers', () => {
    expect(max(1, 3)).toEqual(3);
  });

  it('Works with Numbered Arrays', () => {
    expect(max([1], [3])).toEqual(3);
    expect(max([3, 4, 5], [6, 7])).toEqual(7);
  });

  it('Works with string Arrays', () => {
    const a = max(['a'], ['b']);
    const eA = 'a';
    expect(max(['a'], ['b'])).toEqual('b');
    expect(max(['c', 'e', 'd'], ['f'])).toEqual('f');
  });

  it('Works with string Arrays', () => {
    const a = max(['a'], ['b']);
    const eA = 'b';
    expect(a).toEqual(eA);
  });

  it('Works with mixed', () => {
    expect(max(['a'], 'b')).toEqual('b');
    expect(max(1, [4, 3, 6, -8])).toEqual(6);
  });
});
