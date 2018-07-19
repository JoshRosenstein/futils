import props from './props'

describe('props', () => {
  test('getMany with Object', () => {
    expect(props(['x', 'y'], { x: 1, y: 2 })).toEqual([1, 2])
  })

  test('Array', () => {
    expect(props('0,1', [1, 2])).toEqual([1, 2])
  })

  test('Array', () => {
    expect(props([1, 2], [1, 2, 3])).toEqual([2, 3])
  })

  test('Splits Comma Seperated Strings', () => {
    expect(props('x,y', { x: 1, y: 2 })).toEqual([1, 2])
  })
})
