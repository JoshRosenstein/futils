import inc from './inc'

describe('inc', () => {
  test('Works', () => {

    expect(inc(1)).toEqual(2)
    expect(inc('1')).toEqual('2')

  })

})
