import { LazyResult } from './_internal/_reduceLazy';
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
export declare function dropArr<T>(array: T[], n: number): T[];
export declare namespace dropArr {
    var lazy: typeof lazy;
}
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
export declare function dropArr<T>(n: number): (array: T[]) => T[];
export declare namespace dropArr {
    var lazy: typeof lazy;
}
declare function lazy<T>(n: number): (value: T) => LazyResult<T>;
export default dropArr;
