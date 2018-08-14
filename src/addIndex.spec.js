import addIndex from './addIndex'
import mapValues  from './mapValues'
import reduceValues from './reduceValues'
import length from './length'
import type from './type'

describe('addIndex', () => {
  describe('unary functions like `map`', () => {
    const times2 = function(x) {return x * 2}
    const addIndexParam = (x, idx)=> x + idx

    const mapIndexed = addIndex(mapValues)

    it('works just like a normal map', () => {
      expect(mapIndexed(times2, [1, 2, 3, 4])).toEqual( [2, 4, 6, 8])
    })

    it('passes the index as a second parameter to the callback', () => {
      expect(mapIndexed(addIndexParam, [8, 6, 7, 5, 3, 0, 9])).toEqual( [8, 7, 9, 8, 7, 5, 15]) // [8 + 0, 6 + 1...]
    })


  })

  describe('binary functions like `reduce`', () => {
    const reduceIndexed = addIndex(reduceValues)
    const timesIndexed = function(tot, num, idx) {return tot + (num * idx)}
    const objectify = function(acc, elem, idx) { acc[elem] = idx; return acc}

    it('passes the index as a third parameter to the predicate', () => {
      expect(reduceIndexed(timesIndexed, 0, [1, 2, 3, 4, 5])).toEqual( 40)
      expect(reduceIndexed(objectify, {}, ['a', 'b', 'c', 'd', 'e'])).toEqual( {a: 0, b: 1, c: 2, d: 3, e: 4})
    })

    it('passes the entire list as a fourth parameter to the predicate', () => {
      const list = [1, 2, 3]
      reduceIndexed((acc, x, idx, ls) => {
        expect(ls).toEqual( list)
        return acc
      }, 0, list)
    })

  })

  // test('add index with filter', () => {
  //   const array = [1, 5, 3, 7]
  //   expect(addIndex(filter, (v, i) => (v + i) % 2 === 1, array)).toEqual([1, 3])
  //   expect(addIndex(filter)((v, i) => (v + i) % 2 === 1, array)).toEqual([1, 3])
  // })
  //
  // test('add index doesn\'t mutate an array', () => {
  //   const array = [1, 2, 3, 4]
  //   expect(addIndex(map, (v, i) => v + i, array)).toEqual([1, 3, 5, 7])
  //   expect(addIndex(map)((v, i) => v + i, array)).toEqual([1, 3, 5, 7])
  //   expect(array).toEqual([1, 2, 3, 4])
  // })
})
