import replaceWhen from './replaceWhen'

describe('replaceWhen', () => {
  const isEven = value => value % 2 === 0

  test('Works', () => {
    expect(replaceWhen(isEven)(null)([1, 2, 3])).toEqual([1, null, 3])
  })
})
