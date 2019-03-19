import {purry} from './purry'
import {_reduceLazy, LazyResult} from './_internal/_reduceLazy'

/**
 * Returns a new array containing only one copy of each element in the original list.
 * Elements are compared by reference using Set.
 * Note: In `pipe`, use `uniqLazy()` form instead of `uniqLazy`. Otherwise, the inferred type is lost.
 * @param array
 * @signature
 *    R.uniqLazy(array)
 * @example
 *    R.uniqLazy([1, 2, 2, 5, 1, 6, 7]) // => [1, 2, 5, 6, 7]
 *    R.pipe(
 *      [1, 2, 2, 5, 1, 6, 7], // only 4 iterations
 *      R.uniqLazy(),
 *      R.take(3)
 *    ) // => [1, 2, 5]
 * @pipeable
 * @category Array
 */

export function uniqLazy<T>(array: T[]): T[]
export function uniqLazy<T>(): (array: T[]) => T[]

export function uniqLazy() {
  return purry(_uniqLazy, arguments, uniqLazy.lazy)
}

function _uniqLazy<T>(array: T[]) {
  return _reduceLazy(array, uniqLazy.lazy())
}

function lazy() {
  const set = new Set<any>()
  return (value: any): LazyResult<any> => {
    if (set.has(value)) {
      return {
        done: false,
        hasNext: false,
      }
    }
    set.add(value)
    return {
      done: false,
      hasNext: true,
      next: value,
    }
  }
}

uniqLazy.lazy = lazy

export default uniqLazy
