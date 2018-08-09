import curryN from './curryN'

describe('curryN', () => {
  function sum(x, y, z, missed) {
    return x + y + z + (missed || 0)
  }

  const curry3Sum = curryN(3, sum)

  it('should return curried function with specified arity', () => {
    const f = jest.fn(() => 3)
    let g = curryN(3, f)

    expect(f).not.toBeCalled()
    g = g(1)
    expect(f).not.toBeCalled()
    g = g(2)
    expect(f).not.toBeCalled()
    g = g(3)
    expect(g).toBe(3)
    expect(f).toBeCalledWith(1, 2, 3)
  })
     
  test('curry3Sum(1, 2, 3) to equal 6', () => {
    expect(curry3Sum(1, 2, 3)).toBe(6)
  })

  test('curry3Sum(1)(2, 3) to equal 6', () => {
    expect(curry3Sum(1)(2, 3)).toBe(6)
  })

  test('curry3Sum(1, 2)(3) to equal 6', () => {
    expect(curry3Sum(1, 2)(3)).toBe(6)
  })

  test('curry3Sum(1)(2)(3) to equal 6', () => {
    expect(curry3Sum(1)(2)(3)).toBe(6)
  })

})
