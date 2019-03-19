import { LazyResult } from './_internal/_reduceLazy';
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
export declare function takeLazy<T>(array: T[], n: number): T[];
export declare namespace takeLazy {
    var lazy: typeof lazy;
}
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
export declare function takeLazy<T>(n: number): (array: T[]) => T[];
export declare namespace takeLazy {
    var lazy: typeof lazy;
}
declare function lazy<T>(n: number): (value: T) => LazyResult<T>;
export default takeLazy;
