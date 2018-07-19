import argsToList from './argsToList'

describe('argumentsToList', () => {
  it('converts variadic arguments into list', () => {
    expect(argsToList(1, 3, 4, 3)).toEqual([1, 3, 4, 3])
    		expect(argsToList()).toEqual([])
  })
})
