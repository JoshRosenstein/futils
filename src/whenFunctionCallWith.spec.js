import whenFunctionCallWith from './whenFunctionCallWith'

describe('whenFunctionCallWith', () => {
  it('test', () => {
    const f = jest.fn(x => x)

    expect(whenFunctionCallWith(1, 2, 3)(f)).toBe(1)
    expect(f).toBeCalledWith(1, 2, 3)

    expect(whenFunctionCallWith([1, 2, 3])('test')).toBe('test')
  })
})
