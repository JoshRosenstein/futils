// from https://raw.githubusercontent.com/remeda/remeda/master/src/dropArr.ts
import { purry } from './purry';
import { _reduceLazy, LazyResult } from './_internal/_reduceLazy';

/**
 * Removes first `n` elements from the `array`.
 * @param array the target array
 * @param n the number of elements to skip
 * @signature
 *    R.dropArr(array, n)
 * @example
 *    R.dropArr([1, 2, 3, 4, 5], 2) // => [1, 2, 3]
 * @data_first
 * @pipeable
 * @category Array
 */
export function dropArr<T>(array: T[], n: number): T[];

/**
 * Removes last `n` elements from the `array`.
 * @param array the target array
 * @param n the number of elements to skip
 * @signature
 *    R.dropArr(n)(array)
 * @example
 *    R.dropArr(2)([1, 2, 3, 4, 5]) // => [1, 2, 3]
 * @data_last
 * @pipeable
 * @category Array
 */
export function dropArr<T>(n: number): (array: T[]) => T[];

export function dropArr() {
  return purry(_dropArr, arguments, dropArrlazy);
}

function _dropArr<T>(array: T[], n: number) {
  return _reduceLazy(array, dropArrlazy(n));
}

function dropArrlazy<T>(n: number) {
  let left = n;
  return (value: T): LazyResult<T> => {
    if (left > 0) {
      left--;
      return {
        done: false,
        hasNext: false,
      };
    }
    return {
      done: false,
      hasNext: true,
      next: value,
    };
  };
}
dropArr.lazy = dropArrlazy;

export default dropArr;
