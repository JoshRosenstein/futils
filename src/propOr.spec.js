import propOr from './propOr'

describe('propOr', () => {

  const anon = {age: 99}

  const nm = propOr('Unknown', 'name')

  it('returns a function that fetches the appropriate property', () => {

    expect(typeof nm).toEqual('function')
  })

  it('returns the default value when the property does not exist', () => {

    expect(nm(anon)).toEqual('Unknown')
  })

  it('returns the default value when the object is nil', () => {

    expect(nm(null)).toEqual('Unknown')
    expect(nm(undefined)).toEqual('Unknown')
  })

  it('uses the default when supplied an object with a nil value', () => {
    expect(propOr('foo', 'x', {x: null})).toEqual('foo')
    expect(propOr('foo', 'x', {x: undefined})).toEqual('foo')
  })
})
