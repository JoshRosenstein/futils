import hammer from './hammer'

describe('hammer', () => {
  it('works', () => {
    const payload = {
      id: 1,
      attributes: {
        name: 'Kurtis Rainbolt-Greene',
        age: 26,
      },
    }
    expect(hammer('attributes', payload)).toEqual({
      id: 1,
      name: 'Kurtis Rainbolt-Greene',
      age: 26,
    })
  })
})
