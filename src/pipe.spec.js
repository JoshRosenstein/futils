import pipe from './pipe'

describe('pipe', () => {
  it('pipes', () => {
    expect(
      pipe(
        x => x * 10,
        x => x + 10,
        x => x - 8,
      )(4),
    ).toEqual(42)
    expect(
      pipe(
        (x, y) => x * y,
        x => x + 2,
      )(4, 10),
    ).toEqual(42)
  })
})
