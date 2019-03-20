import juxt from './juxt'

describe('juxt', () => {
  it('Works', () => {
    const getRange = juxt([Math.min, Math.max])

    expect(getRange(3, 4, 9, -3)).toEqual([-3, 9])
  })
})
