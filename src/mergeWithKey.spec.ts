import mergeWithKey from './mergeWithKey'

describe('mergeWithKey', () => {
  it('Array', () => {
    const fn = (left, right, key) => key + right + left
    const left = {beta: 'a'}
    const right = {beta: 'b'}

    const a = mergeWithKey(fn)(left)(right)
    const eA = {beta: 'betaba'}

    expect(a).toEqual(eA)
  })

  it('Two', () => {
    const fn = (left, right, key) => key + right + left
    const left = {alpha: 'a'}
    const right = {beta: 'b'}

    const a = mergeWithKey(fn)(left)(right)
    const eA = {
      alpha: 'a',
      beta: 'b',
    }

    expect(a).toEqual(eA)
  })
})
