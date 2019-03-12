import cleanWhitespace from './cleanWhitespace'

describe('compact', () => {
  it('Works', () => {
    const a = cleanWhitespace('a ')
    const eA = 'a'
    expect(a).toEqual(eA)
  })
})
