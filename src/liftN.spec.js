import liftN from './liftN'


const array = [1, 2, 3, 4]

const check = (n, product) => {
  let i = n
  let g = liftN(n, (...args) => args)
  while (i > 0) {
    expect(typeof g).toEqual('function')
    g = g(array)
    i-=1
  }
  expect(Array.isArray(g)).toBeTruthy()
  expect(g).toEqual(product)
}

describe('liftN', () => {
  const addN = (...args)=>args.reduce((a, b) => a + b, 0)
  const addN3 = liftN(3, addN)

  it('Works', () => {
    expect(
      addN(1, 10)
    ).toEqual(11)

    expect(
      addN3([1, 10], [2], [3])
    ).toEqual([6, 15])
  })

  test('returns the cartesian product for arity = 1', () => {
    const product = [[1], [2], [3], [4]]
    check(1, product)
  })

  test('returns the cartesian product for arity = 2', () => {
    const product =     [ [ 1, 1 ],
      [ 1, 2 ],
      [ 1, 3 ],
      [ 1, 4 ],
      [ 2, 1 ],
      [ 2, 2 ],
      [ 2, 3 ],
      [ 2, 4 ],
      [ 3, 1 ],
      [ 3, 2 ],
      [ 3, 3 ],
      [ 3, 4 ],
      [ 4, 1 ],
      [ 4, 2 ],
      [ 4, 3 ],
      [ 4, 4 ] ]


    check(2, product)
  })

  test('returns the cartesian product for arity = 3', () => {
    const product = [ [ 1, 1, 1 ],
      [ 1, 1, 2 ],
      [ 1, 1, 3 ],
      [ 1, 1, 4 ],
      [ 1, 2, 1 ],
      [ 1, 2, 2 ],
      [ 1, 2, 3 ],
      [ 1, 2, 4 ],
      [ 1, 3, 1 ],
      [ 1, 3, 2 ],
      [ 1, 3, 3 ],
      [ 1, 3, 4 ],
      [ 1, 4, 1 ],
      [ 1, 4, 2 ],
      [ 1, 4, 3 ],
      [ 1, 4, 4 ],
      [ 2, 1, 1 ],
      [ 2, 1, 2 ],
      [ 2, 1, 3 ],
      [ 2, 1, 4 ],
      [ 2, 2, 1 ],
      [ 2, 2, 2 ],
      [ 2, 2, 3 ],
      [ 2, 2, 4 ],
      [ 2, 3, 1 ],
      [ 2, 3, 2 ],
      [ 2, 3, 3 ],
      [ 2, 3, 4 ],
      [ 2, 4, 1 ],
      [ 2, 4, 2 ],
      [ 2, 4, 3 ],
      [ 2, 4, 4 ],
      [ 3, 1, 1 ],
      [ 3, 1, 2 ],
      [ 3, 1, 3 ],
      [ 3, 1, 4 ],
      [ 3, 2, 1 ],
      [ 3, 2, 2 ],
      [ 3, 2, 3 ],
      [ 3, 2, 4 ],
      [ 3, 3, 1 ],
      [ 3, 3, 2 ],
      [ 3, 3, 3 ],
      [ 3, 3, 4 ],
      [ 3, 4, 1 ],
      [ 3, 4, 2 ],
      [ 3, 4, 3 ],
      [ 3, 4, 4 ],
      [ 4, 1, 1 ],
      [ 4, 1, 2 ],
      [ 4, 1, 3 ],
      [ 4, 1, 4 ],
      [ 4, 2, 1 ],
      [ 4, 2, 2 ],
      [ 4, 2, 3 ],
      [ 4, 2, 4 ],
      [ 4, 3, 1 ],
      [ 4, 3, 2 ],
      [ 4, 3, 3 ],
      [ 4, 3, 4 ],
      [ 4, 4, 1 ],
      [ 4, 4, 2 ],
      [ 4, 4, 3 ],
      [ 4, 4, 4 ] ]
    
    check(3, product)
  })


})
