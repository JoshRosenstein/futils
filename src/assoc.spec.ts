import { assoc } from './assoc';

describe('assoc', () => {
  it('sets a property on an obj to a value', () =>
    expect(assoc('foo', 'bar', {})).toEqual({ foo: 'bar' }));

  it('is curried', () => {
    expect(assoc('foo')('bar', {})).toEqual({ foo: 'bar' });
    expect(assoc('foo', 'bar')({})).toEqual({ foo: 'bar' });
  });

  it('Arrays', () => {
    const array = [1, 2, 3];
    expect(assoc(2, 1, array)).toEqual([1, 2, 1]);
  });
});
