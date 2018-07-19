import isDefined from './isDefined'

describe('isDefined', () => {
  it('array', () => {
    const a=isDefined([])
    expect(a).toBeTruthy()
  })

  it('object', () => {
    const a=isDefined({})
    expect(a).toBeTruthy()
  })

  it('string', () => {
    const a=isDefined('')
    expect(a).toBeTruthy()
  })

  it('zero', () => {
    const a=isDefined(0)
    expect(a).toBeTruthy()
  })

  it('true', () => {
    const a=isDefined(true)
    expect(a).toBeTruthy()
  })

  it('false', () => {
    const a=isDefined(false)
    expect(a).toBeTruthy()
  })

  it('null', () => {
    const a=isDefined(null)
    expect(a).toBeFalsy()
  })
  it('undefined', () => {
    const a=isDefined(undefined)
    expect(a).toBeFalsy()
  })

})
