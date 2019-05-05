import mapValuesWithValueKey from './mapValuesWithValueKey';

describe('mapValuesWithValueKey', () => {
  it('Array', () => {
    expect(
      mapValuesWithValueKey((value, index) => `${value}:${index}`)([
        'a',
        'b',
        'c',
      ]),
    ).toEqual(['a:0', 'b:1', 'c:2']);
  });

  it('Object', () => {
    expect(
      mapValuesWithValueKey((value, index) => `${value}:${index}`)({
        aaa: 'a',
        bbb: 'b',
        ccc: 'c',
      }),
    ).toEqual({
      aaa: 'a:aaa',
      bbb: 'b:bbb',
      ccc: 'c:ccc',
    });
  });

  it('String', () => {
    expect(
      mapValuesWithValueKey((value, index) => `${value}:${index}`)('abc'),
    ).toEqual('a:0b:1c:2');
  });
});
