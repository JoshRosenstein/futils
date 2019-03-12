import mergeDeepRight from './mergeDeepRight'

describe('mergeDeepRight', () => {
  it('1', () => {
    const a = mergeDeepRight({alpha: '1'})({beta: '2'})
    const eA = {
      alpha: '1',
      beta: '2',
    }

    expect(a).toEqual(eA)
  })

  it('2', () => {
    const a = mergeDeepRight(
      {alpha: '1'},
      {
        gamma: {beta: '2'},
      },
    )
    const eA = {alpha: '1', gamma: {beta: '2'}}

    expect(a).toEqual(eA)
  })

  it('3', () => {
    const a = mergeDeepRight({gamma: {alpha: '1'}})({
      gamma: {beta: '2'},
    })
    const eA = {
      gamma: {
        alpha: '1',
        beta: '2',
      },
    }

    expect(a).toEqual(eA)
  })

  it('4', () => {
    const a = mergeDeepRight({alpha: {alpha: '1'}})({
      beta: {beta: '2'},
    })
    const eA = {
      alpha: {alpha: '1'},
      beta: {beta: '2'},
    }

    expect(a).toEqual(eA)
  })

  it('5', () => {
    const a = mergeDeepRight({alpha: {alpha: '1'}})({
      alpha: {alpha: '2'},
    })
    const eA = {alpha: {alpha: '2'}}

    expect(a).toEqual(eA)
  })

  it('Array1', () => {
    const a = mergeDeepRight(['a'])(['b'])
    const eA = ['a', 'b']

    expect(a).toEqual(eA)
  })

  it('Array2', () => {
    const a = mergeDeepRight(['a'])(['a'])
    const eA = ['a', 'a']

    expect(a).toEqual(eA)
  })

  it('Array3', () => {
    const a = mergeDeepRight({alpha: ['a']})({alpha: ['a']})
    const eA = {
      alpha: ['a', 'a'],
    }

    expect(a).toEqual(eA)
  })

  it('Array4', () => {
    const a = mergeDeepRight([{prop1: 1}])([{prop1: 2}])
    const eA = [{prop1: 1}, {prop1: 2}]
    expect(a).toEqual(eA)
  })
})
