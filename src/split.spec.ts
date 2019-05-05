import split from './split';

describe('split ', () => {
  it('Works', () => {
    const a = split(',', 'a,b,c');
    const eA = ['a', 'b', 'c'];

    expect(a).toEqual(eA);
  });
});
