import lensIndex from './lensIndex'
import view from './view'
import set from './set'
import over from './over'

import compose from './compose'
import keys from './keys'

const testList = [{a: 1}, {b: 2}, {c: 3}]

describe('lensIndex', () => {
  describe('view', () => {
    test('focuses list element at the specified index', () => {
      expect(view(lensIndex(0), testList)).toEqual({a: 1})
    })

    test('returns undefined if the specified index does not exis', () => {
      expect(view(lensIndex(10), testList)).toEqual(undefined)
    })
  })

  describe('set', () => {
    test('sets the list value at the specified index', () => {
      expect(set(lensIndex(0), 0, testList)).toEqual([0, {b: 2}, {c: 3}])
    })
  })

  describe('over', () => {
    test('applies function to the value at the specified list index', () => {
      expect(over(lensIndex(2), keys, testList)).toEqual([
        {a: 1},
        {b: 2},
        ['c'],
      ])
    })
  })

  describe('composability', () => {
    test('can be composed', () => {
      const nestedList = [0, [10, 11, 12], 1, 2]
      const composedLens = compose(
        lensIndex(1),
        lensIndex(0),
      )

      expect(view(composedLens, nestedList)).toEqual(10)
    })
  })

  describe('well behaved lens', () => {
    test('set s (get s) === s', () => {
      expect(set(lensIndex(0), view(lensIndex(0), testList), testList)).toEqual(
        testList,
      )
    })

    test('get (set s v) === v', () => {
      expect(
        view(lensIndex(0), set(lensIndex(0), 0, testList), testList),
      ).toEqual(0)
    })

    test('get (set(set s v1) v2) === v2', () => {
      expect(
        view(
          lensIndex(0),
          set(lensIndex(0), 11, set(lensIndex(0), 10, testList)),
        ),
      ).toEqual(11)
    })
  })
})
