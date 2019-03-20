import {flow} from './flow'
import {omitProp} from './omitProp'

describe('data first', () => {
  test('omit', () => {
    const result = omitProp({a: 1, b: 2, c: 3, d: 4}, 'a')
    expect(result).toEqual({b: 2, c: 3, d: 4})
  })
})

describe('data last', () => {
  test('omit', () => {
    const result = flow(
      {a: 1, b: 2, c: 3, d: 4},
      omitProp('d'),
    )
    expect(result).toEqual({a: 1, b: 2, c: 3})
  })
})
