import merge from './merge'

describe('merge', () => {
  it('Array', () => {
    const left = ['a', 'b']
    const right = ['c']

    const a = merge(left)(right)
    const eA = ['a', 'b', 'c']

    expect(a).toEqual(eA)
  })

  it('Object', () => {
    const left = {
      alpha: '2',
      beta: '1',
    }
    const right = {
      alpha: '1',
      beta: '2',
      zeta: '3',
    }

    const a = merge(left)(right)
    const eA = {
      alpha: '1',
      beta: '2',
      zeta: '3',
    }

    expect(a).toEqual(eA)
  })

  it('Map', () => {
    const left = new Map([['a', '1'], ['b', '0']])
    const right = new Map([['b', '2'], ['c', '3']])

    const a = merge(left)(right)
    const eA = new Map([['a', '1'], ['b', '2'], ['c', '3']])

    expect(a).toEqual(eA)
  })

  it('String', () => {
    const left = 'ab'
    const right = 'c'

    const a = merge(left)(right)
    const eA = 'abc'

    expect(a).toEqual(eA)
  })
})
