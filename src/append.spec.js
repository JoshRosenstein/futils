import append from './append'

describe('append', () => {
  it('Works', () => {
 
    expect(append('a')(['b'])).toEqual(['b', 'a'])
    expect(append('c')('ab')).toEqual('abc')

  })

})
