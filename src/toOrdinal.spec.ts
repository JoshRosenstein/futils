import toOrdinal from './toOrdinal'

describe('toOrdinal', () => {
  it('should return the number with an ordinal word if passed a second truthy argument', () => {
    expect(toOrdinal(1, true)).toEqual('first')
    expect(toOrdinal(2, true)).toEqual('second')
    expect(toOrdinal(3, true)).toEqual('third')
    expect(toOrdinal(10, true)).toEqual('tenth')
    expect(toOrdinal(17, true)).toEqual('seventeenth')
    expect(toOrdinal(30, true)).toEqual('thirtieth')
    expect(toOrdinal(123, true)).toEqual('one hundred twenty-third')
  })
})
