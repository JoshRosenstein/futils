import flow from './flow'

describe('flow', () => {
  it('flows', () => {
    expect(
      flow(
        4,
        x => x * 10,
        x => x + 10,
        x => x - 8,
      ),
    ).toEqual(42)
    expect(
      flow(
        4,
        (x, y = 10) => x * y,
        x => x + 2,
      ),
    ).toEqual(42)
  })
})
