import reduceValues from './reduceValues';

describe('reduceValues', () => {
  it('Works', () => {
    const a = reduceValues(
      (accumulation, current) => `${accumulation}/${current}`,
    )('.')(['a', 'b', 'c']);
    const eA = './a/b/c';

    expect(a).toEqual(eA);
  });
});
