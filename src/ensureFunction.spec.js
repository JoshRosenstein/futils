import ensureFunction from './ensureFunction'

describe('flatten', () => {

  it('NonFunctions', () => {

    expect(ensureFunction(1)() ).toEqual(1)
    expect(ensureFunction([1])() ).toEqual([1])
    expect(ensureFunction(null)() ).toEqual(null)
    expect(ensureFunction(undefined)() ).toEqual(undefined)
  })

  it('Functions', () => {

    expect(ensureFunction(()=>1)() ).toEqual(1)
    expect(ensureFunction(()=>[1])() ).toEqual([1])
    expect(ensureFunction(()=>null)() ).toEqual(null)
    expect(ensureFunction(()=>undefined)() ).toEqual(undefined)
  })

})
