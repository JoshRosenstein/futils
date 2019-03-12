import {pickObj} from './pickObj'
import {flow} from './flow'

describe('data first', () => {
  test('it should pickObj props', () => {
    const result = pickObj({a: 1, b: 2, c: 3, d: 4}, ['a', 'd'])
    expect(result).toEqual({a: 1, d: 4})
  })
  test('allow undefined or null', () => {
    expect(pickObj(undefined as any, ['foo'])).toEqual({})
    expect(pickObj(null as any, ['foo'])).toEqual({})
  })
})

describe('data last', () => {
  test('it should pickObj props', () => {
    const result = flow(
      {a: 1, b: 2, c: 3, d: 4},
      pickObj(['a', 'd']),
    )
    expect(result).toEqual({a: 1, d: 4})
  })
})
