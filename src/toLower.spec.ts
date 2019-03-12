import toLower from './toLower'

describe('toLower', () => {
  it('works', () => {
    expect(toLower('ABC')).toEqual('abc')
  })
})
