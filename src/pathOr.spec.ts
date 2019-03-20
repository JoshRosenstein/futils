import pathOr from './pathOr'

describe('pathOr', () => {
  test('object with keys present', () => {
    expect(
      pathOr('fallback', ['aaa', 'bbb', 'ccc'])({aaa: {bbb: {ccc: '1'}}}),
    ).toBe('1')
  })

  test('object with keys missing', () => {
    expect(
      pathOr('fallback', ['aaa', 'ddd', 'ccc'])({aaa: {bbb: {ccc: '1'}}}),
    ).toBe('fallback')
  })

  test('map with keys present', () => {
    expect(
      pathOr('fallback', ['aaa', 'bbb', 'ccc'])(
        new Map([['aaa', new Map([['bbb', new Map([['ccc', 'ccc']])]])]]),
      ),
    ).toBe('ccc')
  })

  test('map with keys missing', () => {
    expect(
      pathOr('fallback', ['aaa', 'ddd', 'ccc'])(
        new Map([['aaa', new Map([['bbb', new Map([['ccc', 'ccc']])]])]]),
      ),
    ).toBe('fallback')
  })

  test('array with keys present', () => {
    expect(pathOr('fallback', [0, 0, 0])([[['1']]])).toBe('1')
  })

  test('array with keys missing', () => {
    expect(pathOr('fallback', [0, 1, 0])([[['1']]])).toBe('fallback')
  })
})
