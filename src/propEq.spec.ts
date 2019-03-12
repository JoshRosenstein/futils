import propEq from './propEq'

describe('propEq', () => {
  it('Object found key', () => {
    const a = propEq('aaa')('1')({aaa: '1'})
    expect(a).toBeTruthy()
  })

  it('Object found key Not Equal', () => {
    const a = propEq('aaa')(3)({aaa: '1'})
    expect(a).toBeFalsy()
  })
  it('Object missing key', () => {
    const a = propEq('bbb')(undefined)({aaa: '1'})

    expect(a).toBeTruthy()
  })

  it('undefined missing key', () => {
    const a = propEq('bbb')(1)(undefined)

    expect(a).toBeFalsy()
  })

  it('Array found key', () => {
    const a = propEq(0)('aaa')(['aaa'])
    expect(a).toBeTruthy()
  })

  it('Array found key Not Equal', () => {
    const a = propEq(0)('nope')(['aaa'])
    expect(a).toBeFalsy()
  })

  it('Array missing key', () => {
    const a = propEq(2)(undefined)(['aaa'])
    expect(a).toBeTruthy()
  })

  it('Array string key', () => {
    const a = propEq('0')('aaa')(['aaa'])
    expect(a).toBeTruthy()
  })

  it('String found key', () => {
    const a = propEq(0)('a')('abc')
    expect(a).toBeTruthy()
  })

  it('Map found key', () => {
    const a = propEq('aaa')('yoyo')(new Map([['aaa', 'yoyo']]))

    expect(a).toBeTruthy()
  })

  it('Map found key NotEqual', () => {
    const a = propEq('aaa')('nono')(new Map([['aaa', 'yoyo']]))

    expect(a).toBeFalsy()
  })
})
