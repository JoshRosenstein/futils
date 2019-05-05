import attach from './attach';

describe('attach', () => {
  it('Object (Empty)', () => {
    const a = attach('hello')('world')({});
    const eA = { hello: 'world' };

    expect(a).toEqual(eA);
  });

  it('Object (Filled)', () => {
    const a = attach('hello')('world')({ test: 'case' });
    const eA = {
      hello: 'world',
      test: 'case',
    };

    expect(a).toEqual(eA);
  });

  it('Array (First)', () => {
    const a = attach(0)('a')([]);
    const eA = ['a'];

    expect(a).toEqual(eA);
  });

  it('Array (Too big index)', () => {
    const a = attach(1)('a')([]);
    const eA = ['a'];

    expect(a).toEqual(eA);
  });

  it('Array (Last)', () => {
    const a = attach(1)('a')(['b']);
    const eA = ['b', 'a'];

    expect(a).toEqual(eA);
  });
});
