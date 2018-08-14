import lensProp from './lensProp'
import view from './view'
import set from './set'
import over from './over'
import compose from './compose'


const testObj = {
  a: 1,
  b: 2,
  c: 3
}

describe('lensProp', () => {
  describe('view', () => {
    it('focuses object the specified object property', () => {
      expect(view(lensProp('a'), testObj)).toEqual(1)
    })
    it('returns undefined if the specified property does not exist', () => {
      expect(view(lensProp('X'), testObj)).toEqual( undefined)
    })
  })
  describe('set', () => {
    it('sets the value of the object property specified', () => {
      expect(set(lensProp('a'), 0, testObj)).toEqual({a:0, b:2, c:3})
    })
    it('adds the property to the object if it doesn\'t exist', () => {
      expect(set(lensProp('d'), 4, testObj)).toEqual({a:1, b:2, c:3, d:4})
    })
  })
  describe('over', () => {
    it('applies function to the value of the specified object property', () => {
      expect(over(lensProp('a'), x=>x+1, testObj)).toEqual({a:2, b:2, c:3})
    })
    it('applies function to undefined and adds the property if it doesn\'t exist', () => {
      expect(over(lensProp('X'), x=>x, testObj)).toEqual({a:1, b:2, c:3, X:undefined})
    })
  })
  describe('composability', () => {
    it('can be composed', () => {
      const nestedObj = {a: {b: 1}, c:2}
      const composedLens = compose(lensProp('a'), lensProp('b'))

      expect(view(composedLens, nestedObj)).toEqual( 1)
    })
  })
  describe('well behaved lens', () => {
    it('set s (get s) === s', () => {
      expect(set(lensProp('a'), view(lensProp('a'), testObj), testObj)).toEqual( testObj)
    })
    it('get (set s v) === v', () => {
      expect(view(lensProp('a'), set(lensProp('a'), 0, testObj))).toEqual( 0)
    })
    it('get (set(set s v1) v2) === v2', () => {
      expect(view(lensProp('a'), set(lensProp('a'), 11, set(lensProp('a'), 10, testObj)))).toEqual(11)
    })
  })
})
