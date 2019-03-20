import subtract from './subtract'

describe('add', () => {
  it('adds two numbers', () => expect(subtract(2, 1)).toEqual(1))

  it('is curried', () => expect(subtract(2)(1)).toEqual(1))

  it('adds two numbers', () => expect(subtract('2')('1')).toEqual(1))
})
