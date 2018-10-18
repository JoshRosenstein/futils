// @flow
import all from './all'
import is from './is'
import either from './either'
import both from './both'

describe('all', () => {
  const isBool = is('Boolean')
  const isTruthy: any => boolean = either(x => Boolean(x), x => x === 0)
  const isTrueBool: any => boolean = both(isBool, isTruthy)

  test('Object', () => {
    expect(all(isTrueBool, {prop1: true, prop2: true})).toBeTruthy()
    expect(all(isTrueBool, {prop1: true, prop2: false})).toBeFalsy()
    expect(all(isTrueBool, {prop1: 'true', prop2: false})).toBeFalsy()
  })

  test('Array', () => {
    expect(all(isTrueBool, [true, false])).toBeFalsy()
    expect(all(isTrueBool, [true, true])).toBeTruthy()
    expect(all(isTrueBool, ['true', false])).toBeFalsy()
  })

  test('checks if all of array items conforms to cb', () => {
    const allGt5 = all(i => i > 5)
    expect(allGt5([1, 2, 3, 4, 5, 6])).toBeFalsy()
    expect(allGt5([6, 7, 8, 9])).toBeTruthy()
  })
  it('testObj', () => {
    const isBiggerThanZero = (x: number): boolean => x > 0

    expect(all(isBiggerThanZero, {a: 1, b: 1, c: 1})).toBe(true)
    expect(all(isBiggerThanZero, {a: 0, b: 1, c: 1})).toBe(false)
    expect(all(isBiggerThanZero, {a: 1, b: 1, c: 0})).toBe(false)
    expect(all(isBiggerThanZero, {a: 1, b: 0, c: 1})).toBe(false)
    expect(all(isBiggerThanZero, {a: 0, b: 0, c: 0})).toBe(false)
    expect(all(isBiggerThanZero)({a: 0, b: 0, c: 0})).toBe(false)
    expect(all(isBiggerThanZero)({a: 1, b: 0, c: 1})).toBe(false)
    expect(all(isBiggerThanZero)({a: 1, b: 1, c: 1})).toBe(true)
    expect(all(isBiggerThanZero, '1')).toBe(true)
    //expect(all(isBiggerThanZero, undefined)).toBe(true)
    expect(all(isBiggerThanZero, {})).toBe(true)
  })
  it('testArray', () => {
    expect(all(x => x > 1, [1, 2, 3])).toBe(false)
    expect(all(x => x < 5, [1, 2, 3, 4])).toBe(true)
    expect(all(() => true, [])).toBe(true)
  })
})
