import toOrdinal from './toOrdinal'

describe('toOrdinal', () => {
  it('should return the number with an ordinal word if passed a second truthy argument', () => {
    expect(toOrdinal(1)).toEqual('first')
    expect(toOrdinal(2)).toEqual('second')
    expect(toOrdinal(3)).toEqual('third')
    expect(toOrdinal(10)).toEqual('tenth')
    expect(toOrdinal(17)).toEqual('seventeenth')
    expect(toOrdinal(30)).toEqual('thirtieth')
    expect(toOrdinal(123)).toEqual('one hundred twenty-third')
  })
})
