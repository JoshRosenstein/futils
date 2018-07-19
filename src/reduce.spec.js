import reduce from './reduce'

describe('reduce', () => {
  const reducer = (acc, value, key) => `${acc}/${value}:${key}`,
    initial = '.'

  test('Array', () => {
    const a = reduce(reducer, initial)(['a', 'b', 'c'])
    const eA = './a:0/b:1/c:2'

    expect(a).toEqual(eA)
  })

  test('Object', () => {
    const a = reduce(reducer, initial)({
      aaa: 'a',
      bbb: 'b',
      ccc: 'c'
    })

    const eA = './a:aaa/b:bbb/c:ccc'

    expect(a).toEqual(eA)
  })

  test('Set', () => {
    const a = reduce(reducer, initial)(new Set(['a', 'b', 'c']))
    const eA = './a:undefined/b:undefined/c:undefined'
    expect(a).toEqual(eA)
  })

  test('Map', () => {
    const a = reduce(reducer, initial)(
      new Map([['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']])
    )
    const eA = './a:aaa/b:bbb/c:ccc'
    expect(a).toEqual(eA)
  })

  test('String', () => {
    const a = reduce(reducer, initial)('abc')
    const eA = './a:0/b:1/c:2'
    expect(a).toEqual(eA)
  })
})
