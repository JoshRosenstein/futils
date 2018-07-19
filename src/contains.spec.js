import contains from './contains'

describe('contains', () => {
  it('Works', () => {
    expect(contains(3, [1, 2, 3])).toBeTruthy()
    expect(contains(4, [1, 2, 3])).toBeFalsy()
    expect(contains({ name: 'Fred' }, [{ name: 'Fred' }])).toBeTruthy()
    expect(contains('a', 'va')).toBeTruthy()
    expect(contains([42], [[42]])).toBeTruthy()
  })
})
