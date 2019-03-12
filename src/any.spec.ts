import any from './any'
import is from './is'
import either from './either'
import both from './both'

describe('any', () => {
  const isBool = is('Boolean')
  const isTruthy = either(x => Boolean(x), x => x === 0)
  const isTrueBool = both(isBool, isTruthy)

  test('Object', () => {
    expect(any(isTrueBool, {prop1: true, prop2: false})).toBeTruthy()
    expect(any(isTrueBool, {prop1: false, prop2: false})).toBeFalsy()
    expect(any(isTrueBool, {prop1: 'true', prop2: false})).toBeFalsy()
  })

  test('Array', () => {
    expect(any(isTrueBool, [true, false])).toBeTruthy()
    expect(any(isTrueBool, [false, false])).toBeFalsy()
    expect(any(isTrueBool, ['true', false])).toBeFalsy()
  })

  test('checks if any of array items conforms to cb', () => {
    const anyGt5 = any(i => i > 5)
    expect(anyGt5([1, 2, 3, 4, 5, 6])).toBeTruthy()
    expect(anyGt5([1, 2, 3, 4])).toBeFalsy()
  })
  it('testObj', () => {
    const isBiggerThanZero = x => x > 0

    expect(any(isBiggerThanZero, {a: 0})).toBe(false)
    expect(any(isBiggerThanZero, {a: 0, b: 0, c: 1})).toBe(true)
    expect(any(isBiggerThanZero, {a: 1, b: 0, c: 0})).toBe(true)
    expect(any(isBiggerThanZero, {a: 0, b: 1, c: 0})).toBe(true)
    expect(any(isBiggerThanZero, {a: 0, b: 0, c: 0})).toBe(false)
    expect(any(isBiggerThanZero)({a: 0, b: 0, c: 0})).toBe(false)
    expect(any(isBiggerThanZero)({a: 0, b: 1, c: 0})).toBe(true)
    expect(any(isBiggerThanZero, null)).toBe(false)
    expect(any(isBiggerThanZero, undefined)).toBe(false)
    expect(any(isBiggerThanZero, {})).toBe(false)
  })
  it('testArray', () => {
    expect(any(x => x > 3, [1, 2, 3])).toBe(false)
    expect(any(x => x > 3, [1, 2, 3, 4])).toBe(true)
    expect(any(x => true, [])).toBe(false)
  })
})
