import {whereEq} from './whereEq'

describe('whereEq', () => {
  it('returns true if the test object satisfies the spec', () => {
    const spec = {x: 1, y: 2}
    const test1 = {x: 0, y: 200}
    const test2 = {x: 0, y: 10}
    const test3 = {x: 1, y: 101}
    const test4 = {x: 1, y: 2}
    expect(whereEq(spec, test1)).toEqual(false)
    expect(whereEq(spec, test2)).toEqual(false)
    expect(whereEq(spec, test3)).toEqual(false)
    expect(whereEq(spec, test4)).toEqual(true)
  })

  it('does not need the spec and the test object to have the same interface (the test object will have a superset of the specs properties)', () => {
    const spec = {x: 100}
    const test1 = {x: 20, y: 100, z: 100}
    const test2 = {w: 1, x: 100, y: 100, z: 100}

    expect(whereEq(spec, test1)).toEqual(false)
    expect(whereEq(spec, test2)).toEqual(true)
  })

  it('matches specs that have undefined properties', () => {
    const spec = {x: undefined}
    const test1 = {}
    const test2 = {x: null}
    const test3 = {x: undefined}
    const test4 = {x: 1}
    expect(whereEq(spec, test1)).toEqual(true)
    expect(whereEq(spec, test2)).toEqual(false)
    expect(whereEq(spec, test3)).toEqual(true)
    expect(whereEq(spec, test4)).toEqual(false)
  })

  it('is true for an empty spec', () => {
    expect(whereEq({}, {a: 1})).toEqual(true)
  })

  it('reports true when the object equals the spec', () => {
    expect(whereEq({a: 1}, {a: 1})).toEqual(true)
  })
})
