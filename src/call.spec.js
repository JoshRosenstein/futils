import call from './call'

describe('call', () => {

  it('Works', ()=> {

    const fn = (a,b)=>a+b

    expect(call(fn, 1, 2)).toBe(3)
    expect(call(fn)(1, 2)).toBe(3)

  })


  test('calls function with all passed args', () => {
    const func1 = (a) => a * 2
    const func2 = (a, b, c) => a + b + c

    expect(call(func1, 2)).toBe(4)
    expect(call(func1)(2)).toBe(4)

    expect(call(func2, 1, 2, 3)).toBe(6)
    expect(call(func2)(1, 2, 3)).toBe(6)
  })

  it('returns the result of calling its first argument with the remaining arguments', ()=> {
    expect(call(Math.max, 1, 2, 3, -99, 42, 6, 7)).toBe(42)
  })

  it('accepts one or more arguments', ()=> {

    const fn = (...args)=>args.length
    expect(call(fn)()).toBe(0)
    expect(call(fn, 'x')).toBe(1)
    expect(call(fn, 'x', 'y')).toBe(2)


  })

  it('Applicator', ()=> {

    const fn = x=>x+1
    expect(call(fn)(1)).toBe(2)
    expect(call(fn)(2)).toBe(3)


  })

})
