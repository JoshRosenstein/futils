//@ flow
import toPairs from './toPairs'

describe('toPairs', () => {
  it('Object', () => {
    const a = toPairs({
      aaa: 'a',
      bbb: 'b',
      ccc: 'c',
    })
    const eA = [['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']]

    expect(a).toEqual(eA)
  })
  it('Array', () => {
    const a = toPairs(['a', 'b', 'c'])
    const eA = [[0, 'a'], [1, 'b'], [2, 'c']]

    expect(a).toEqual(eA)
  })

  it('Set', () => {
    const a = toPairs(new Set(['a', 'b', 'c']))
    const eA = [[undefined, 'a'], [undefined, 'b'], [undefined, 'c']]

    expect(a).toEqual(eA)
  })

  it('Map', () => {
    const a = toPairs(new Map([['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']]))
    const eA = [['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']]

    expect(a).toEqual(eA)
  })

  it('Error', () => {
    function testError() {
      // $FlowExpectError
      toPairs(true)
    }

    expect(testError).toThrowError()
  })
})
