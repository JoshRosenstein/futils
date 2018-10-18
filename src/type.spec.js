import type from './type'

describe('type', () => {
  it('Works', () => {
    expect(type('a')).toEqual('String')
    expect(type(1)).toEqual('Number')
    expect(type({})).toEqual('Object')
    expect(type([])).toEqual('Array')
    expect(type(true)).toEqual('Boolean')
    expect(type(false)).toEqual('Boolean')
    expect(type(null)).toEqual('null')
    expect(type(undefined)).toEqual('undefined')
    expect(type(undefined)).toEqual('undefined')
    expect(type(new Map([['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']]))).toEqual(
      'Map',
    )
    expect(type(new Set(['a', 'b', 'c']))).toEqual('Set')
  })
})
