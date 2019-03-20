import nth from './nth'

describe('nth', () => {
  const list = ['foo', 'bar', 'baz', 'quux']
  test('Array', () => {
    expect(nth(0, list)).toEqual('foo')
    expect(nth(1, list)).toEqual('bar')
    expect(nth(2, list)).toEqual('baz')
    expect(nth(3, list)).toEqual('quux')
    expect(nth(-1, list)).toEqual('quux')
    expect(nth(-99, list)).toEqual(undefined)
    expect(nth(4, list)).toEqual(undefined)
  })

  test('String', () => {
    expect(nth(0, 'abc')).toEqual('a')
    expect(nth(1, 'abc')).toEqual('b')
    expect(nth(2, 'abc')).toEqual('c')
    expect(nth(3, 'abc')).toEqual('')
    expect(nth(4, 'abc')).toEqual('')
    expect(nth(-1, 'abc')).toEqual('c')
  })
})
