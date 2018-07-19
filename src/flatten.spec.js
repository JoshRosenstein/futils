import flatten from './flatten'

describe('flatten', () => {

  it('Works', () => {

    expect(flatten([['a', 'b'], ['c', 'd']]) ).toEqual(['a', 'b', 'c', 'd'])
  })


})
