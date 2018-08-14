import update from './update'


describe('Update', () => {
  test('updates the value at the given index of the supplied array', () => {
    expect(update(2, 4, [0, 1, 2, 3])).toEqual([0, 1, 4, 3])
  })

  test('offsets negative indexes from the end of the array', () => {
    expect(update(-3, 4, [0, 1, 2, 3])).toEqual([0, 4, 2, 3])
  })

  test('returns the original array if the supplied index is out of bounds', () => {
    const list = [0, 1, 2, 3]

    expect(update(4, 4, list)).toEqual(list)
    expect(update(-5, 4, list)).toEqual(list)
  })


  it('does not mutate the original array', () => {
    const list = [0, 1, 2, 3]
    expect(update(2, 4, list)).toEqual( [0, 1, 4, 3])
    expect(list).toEqual( [0, 1, 2, 3])
  })

  it('curries the arguments', () => {
    expect(update(2)(4)([0, 1, 2, 3])).toEqual( [0, 1, 4, 3])
  })

  it('accepts an array-like object', () => {
    const args=(...a)=>a
    expect(update(2, 4, args(0, 1, 2, 3))).toEqual( [0, 1, 4, 3])
  })

})
