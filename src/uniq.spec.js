import uniq from './uniq'

describe('uniq', () => {
  test('Works', () => {
    const list = [1, 2, 3, 1, 2, 3, 1, 2, 3]
    expect(uniq(list)).toEqual([1, 2, 3])
  })
})
