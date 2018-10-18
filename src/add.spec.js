import add from './add'

describe('add', () => {
  it('adds two numbers', () => expect(add(1, 2)).toEqual(3))

  it('is curried', () => expect(add(1)(2)).toEqual(3))

  it('adds two numbers', () => expect(add('1')('2')).toEqual(3))
})
