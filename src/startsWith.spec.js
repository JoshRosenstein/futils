import startsWith from './startsWith'

describe('startsWith', () => {
  test('True Sentence', () => {
    const a = startsWith('I have')('I have no period')
    expect(a).toBeTruthy()
  })

  test('False Sentence', () => {
    const a = startsWith('period')('I have no period')
    expect(a).toBeFalsy()
  })

  test('Curried', () => {
    const a = startsWith('!', '!a')
    expect(a).toBeTruthy()
  })
})
