import reduceRight from './reduceRight';

describe('reduceRight', () => {
  const avg = function(a, b) {
    return (a + b) / 2;
  };

  it('folds lists in the right order', () => {
    expect(reduceRight((a, b) => a + b, '', ['a', 'b', 'c', 'd'])).toEqual(
      'abcd',
    );
  });

  it('folds lists in the right order', () => {
    expect(reduceRight((a, b) => a - b, 0, [1, 2, 3, 4])).toEqual(-2);
  });

  it('Uses All', () => {
    const reducer = (acc, v, k) => (k < 2 ? acc : acc - v);

    expect(reduceRight(reducer, 0, [1, 2, 3, 4])).toEqual(-2);
  });
});
