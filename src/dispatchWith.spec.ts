import dispatchWith from './dispatchWith'
import complement from './complement'
import equals from './equals'
import F from './F'
import identity from './identity'

const notFalse = complement(equals(false))

describe('dispatchWith', () => {
  it('should return first not false result', () => {
    expect(dispatchWith(notFalse, [identity, F])(3)).toBe(3)
  })

  it('should be variadic', () => {
    expect(dispatchWith(notFalse, [(a, b) => a + b, F])(3, 2)).toBe(5)
  })

  it('should be curried', () => {
    expect(dispatchWith(notFalse)([(a, b) => a + b, F])(3, 2)).toBe(5)
  })

  it('should return undefined', () => {
    expect(dispatchWith(notFalse, [F, identity, F])(false)).toBe(undefined)
  })
})
