import assocPath from './assocPath'

describe('assocPath', () => {
  it('sets a value on a path of a nested object', () =>
    expect(assocPath(['foo', 'bar'], 'baz', {})).toEqual({ foo: { bar: 'baz' } })
  )

  it('sets a value on a path of a nested object DOTNOTATION', () =>
    expect(assocPath('foo.bar', 'baz', {})).toEqual({ foo: { bar: 'baz' } })
  )

  it('is curried', () => {
    expect(assocPath(['foo', 'bar'])('baz', {})).toEqual({ foo: { bar: 'baz' } })
    expect(assocPath(['foo', 'bar'], 'baz')({})).toEqual({ foo: { bar: 'baz' } })
  })
})
