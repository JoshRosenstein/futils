import { purry } from './purry';
import { _reduceLazy, LazyResult } from './_internal/_reduceLazy';

export type InferType<V> = V extends void ? any : V;
//export type InferType<T> = T extends (infer U) ? (U extends [never] ? T : T) : T
// https://github.com/remeda/remeda/blob/master/src/take.ts
/**
 * Returns the first `n` elements of `array`.
 * @param array the array
 * @param n the number of elements to takeArr
 * @signature
 *    F.takeArr(array, n)
 * @example
 *    F.takeArr([1, 2, 3, 4, 3, 2, 1], 3) // => [1, 2, 3]
 * @data_first
 * @pipeable
 * @category Array
 */
export function takeArr<T>(array: T[], n: number): T[];

/**
 * Returns the first `n` elements of `array`.
 * @param n the number of elements to takeArr
 * @signature
 *    F.takeArr(n)(array)
 * @example
 *    F.pipe([1, 2, 3, 4, 3, 2, 1], F.takeArr(n)) // => [1, 2, 3]
 * @data_last
 * @pipeable
 * @category Array
 */

export function takeArr(n: number): <T>(array: T[]) => T[];

// export function takeArr<T0 = never>(
//   n: number,
// ): <T extends [T0] extends [never] ? any : T0>(array: T[]) => T[]

export function takeArr() {
  return purry(_takeArr, arguments, takeArrlazy);
}

function _takeArr<T>(array: T[], n: number) {
  return _reduceLazy(array, takeArrlazy(n));
}

function takeArrlazy<T>(n: number) {
  return (value: T): LazyResult<T> => {
    if (n === 0) {
      return {
        done: true,
        hasNext: false,
      };
    }
    n--;
    if (n === 0) {
      return {
        done: true,
        hasNext: true,
        next: value,
      };
    }
    return {
      done: false,
      hasNext: true,
      next: value,
    };
  };
}
takeArr.lazy = takeArr;

export default takeArr;
