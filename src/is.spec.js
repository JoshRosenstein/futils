import is from './is'
import isObject from './isObject'
import isFunction from './isFunction'
import isObjLike from './isObjLike'


describe('is', () => {
  test('isObjLike', () => {

    expect(isObjLike({})).toBeTruthy()
    expect(isObjLike([])).toBeTruthy()
    expect(isObjLike((a) => ({'result':a}))).toBeFalsy()
    expect(isObjLike(null)).toBeFalsy()
    expect(isObjLike(undefined)).toBeFalsy()

  })

  it('isNull', () => {
    const a = is('null')(null)
    expect(a).toBeTruthy()
  })

  it('isUndefined', () => {
    const a = is('undefined')(undefined)
    expect(a).toBeTruthy()
  })

  it('isString', () => {
    const a = is('String')('String')
    expect(a).toBeTruthy()
  })

  it('isNotString', () => {
    const a = is('String')(null)
    const b = is('String')(undefined)
    const c = is('String')(1)
    expect(a).toBeFalsy()
    expect(b).toBeFalsy()
    expect(c).toBeFalsy()
  })

  it('isArray', () => {
    const a = is('Array')([])
    expect(a).toBeTruthy()
  })

  it('isObject', () => {
    const a = isObject({})
    expect(a).toBeTruthy()
  })

  it('isNumber', () => {
    const a = is('Number')(1)
    expect(a).toBeTruthy()
  })

  it('isFunction', () => {
    expect(isFunction(()=>1)).toBeTruthy()
  })

})
