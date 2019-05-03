import toArray from './toArray'
import { assertTrue, Equals } from 'typescript-test-utils'

describe('toArray', () => {
  test('String', () => {
    const a = toArray('1')
    expect(a).toEqual(['1'])
  })

  test('Array', () => {
    const a = toArray([1])

    expect(a).toEqual([1])
  })

  test('Number', () => {
    const a = toArray(1)

    expect(a).toEqual([1])
  })

  test('Number', () => {
    const a = toArray(1)

    expect(a).toEqual([1])
  })


})
describe('Types', () => {
  test('String', () => {
    type e=string[]
    const a = toArray('1')
    const b = toArray(['1'])
    assertTrue<Equals<typeof a, e>>()
    assertTrue<Equals<typeof b, e>>()
  })
  test('tuple', () => {
    type e='1'[]
    const a = toArray('1' as '1')
    const b = toArray(['1' as '1'])
    assertTrue<Equals<typeof a, e>>()
    assertTrue<Equals<typeof b, e>>()
  })

  const Cast = <T = any>(arg: any): T => arg;

  test('Mixed', () => {
    type u =  number | string | Record<string, any> | undefined | null
    type e= u[]
    const a = toArray<u>(Cast<u>(1))
    const b = toArray([Cast<u>(1)])
    assertTrue<Equals<typeof a, e>>()
    assertTrue<Equals<typeof b, e>>()
  })
})
