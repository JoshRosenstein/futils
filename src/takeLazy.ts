// from https://github.com/remeda/remeda/blob/master/src/take.test.ts

import {purry} from './purry'
import {_reduceLazy, LazyResult} from './_internal/_reduceLazy'

/**
 * Returns the first `n` elements of `array`.
 * @param array the array
 * @param n the number of elements to takeLazy
 * @signature
 *    F.takeLazy(array, n)
 * @example
 *    F.takeLazy([1, 2, 3, 4, 3, 2, 1], 3) // => [1, 2, 3]
 * @data_first
 * @pipeable
 * @category Array
 */
export function takeLazy<T>(array: T[], n: number): T[]

/**
 * Returns the first `n` elements of `array`.
 * @param n the number of elements to takeLazy
 * @signature
 *    F.takeLazy(n)(array)
 * @example
 *    F.pipe([1, 2, 3, 4, 3, 2, 1], F.takeLazy(n)) // => [1, 2, 3]
 * @data_last
 * @pipeable
 * @category Array
 */
export function takeLazy<T>(n: number): (array: T[]) => T[]

export function takeLazy() {
  return purry(_takeLazy, arguments, takeLazy.lazy)
}

function _takeLazy<T>(array: T[], n: number) {
  return _reduceLazy(array, takeLazy.lazy(n))
}

export namespace takeLazy {
  export function lazy<T>(n: number) {
    return (value: T): LazyResult<T> => {
      if (n === 0) {
        return {
          done: true,
          hasNext: false,
        }
      }
      n--
      if (n === 0) {
        return {
          done: true,
          hasNext: true,
          next: value,
        }
      }
      return {
        done: false,
        hasNext: true,
        next: value,
      }
    }
  }
}

export default takeLazy
