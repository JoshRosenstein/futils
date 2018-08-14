import omit from './omit'

describe('omit', () => {

  const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}

  it('copies an object omitting the listed properties', () => {
    const a = omit(['a', 'c', 'f'], obj)
    const eA = {b: 2, d: 4, e: 5}

    expect(a).toEqual(eA)
  })

  it('Fallback to omitKey', () => {
    const a = omit('a', obj)
    const eA = { b: 2, c: 3, d: 4, e: 5, f: 6}

    expect(a).toEqual(eA)
  })

  it('Can use comma seperation', () => {
    const a = omit( 'a,c,f', obj)
    const eA = {b: 2, d: 4, e: 5}

    expect(a).toEqual(eA)
  })

})
