import lensPath from './lensPath'
import view from './view'
import set from './set'
import over from './over'
import toPairs from './toPairs'
import compose from './compose'
import identity from './identity'

const testObj = {
  a: [
    {
      b: 1,
    },
    {
      b: 2,
    },
  ],
  d: 3,
}

describe('lensPath', () => {
  describe('view', () => {
    it('focuses the specified object property', () => {
      expect(view(lensPath(['d']), testObj)).toEqual(3)
      expect(view(lensPath(['a', 1, 'b']), testObj)).toEqual(2)
      expect(view(lensPath([]), testObj)).toEqual(testObj)
    })
  })
  describe('set', () => {
    it('sets the value of the object property specified', () => {
      expect(set(lensPath(['d']), 0, testObj)).toEqual({
        a: [{b: 1}, {b: 2}],
        d: 0,
      })
      expect(set(lensPath(['a', 0, 'b']), 0, testObj)).toEqual({
        a: [{b: 0}, {b: 2}],
        d: 3,
      })
      expect(set(lensPath([]), 0, testObj)).toEqual(0)
    })
    it("adds the property to the object if it doesn't exist", () => {
      expect(set(lensPath(['X']), 0, testObj)).toEqual({
        a: [{b: 1}, {b: 2}],
        d: 3,
        X: 0,
      })
      expect(set(lensPath(['a', 0, 'X']), 0, testObj)).toEqual({
        a: [{b: 1, X: 0}, {b: 2}],
        d: 3,
      })
    })
  })
  describe('over', () => {
    it('applies function to the value of the specified object property', () => {
      expect(over(lensPath(['d']), x => x + 1, testObj)).toEqual({
        a: [{b: 1}, {b: 2}],
        d: 4,
      })
      expect(over(lensPath(['a', 1, 'b']), x => x + 1, testObj)).toEqual({
        a: [{b: 1}, {b: 3}],
        d: 3,
      })
      expect(over(lensPath([]), toPairs, testObj)).toEqual([
        ['a', [{b: 1}, {b: 2}]],
        ['d', 3],
      ])
    })
    it("applies function to undefined and adds the property if it doesn't exist", () => {
      expect(over(lensPath(['X']), x => x, testObj)).toEqual({
        a: [{b: 1}, {b: 2}],
        d: 3,
        X: undefined,
      })
      expect(over(lensPath(['a', 0, 'X']), identity, testObj)).toEqual({
        a: [{b: 1, X: undefined}, {b: 2}],
        d: 3,
      })
    })
  })
  describe('composability', () => {
    it('can be composed', () => {
      const composedLens = compose(
        lensPath(['a']),
        lensPath([1, 'b']),
      )
      expect(view(composedLens, testObj)).toEqual(2)
    })
  })
  describe('well behaved lens', () => {
    it('set s (get s) === s', () => {
      expect(
        set(lensPath(['d']), view(lensPath(['d']), testObj), testObj),
      ).toEqual(testObj)
      expect(
        set(
          lensPath(['a', 0, 'b']),
          view(lensPath(['a', 0, 'b']), testObj),
          testObj,
        ),
      ).toEqual(testObj)
    })
    it('get (set s v) === v', () => {
      expect(view(lensPath(['d']), set(lensPath(['d']), 0, testObj))).toEqual(0)
      expect(
        view(lensPath(['a', 0, 'b']), set(lensPath(['a', 0, 'b']), 0, testObj)),
      ).toEqual(0)
    })
    it('get (set(set s v1) v2) === v2', () => {
      const p = ['d']
      const q = ['a', 0, 'b']
      expect(
        view(lensPath(p), set(lensPath(p), 11, set(lensPath(p), 10, testObj))),
      ).toEqual(11)
      expect(
        view(lensPath(q), set(lensPath(q), 11, set(lensPath(q), 10, testObj))),
      ).toEqual(11)
    })
  })
})
