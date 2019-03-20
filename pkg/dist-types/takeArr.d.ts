export declare type InferType<V> = V extends void ? any : V;
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
export declare function takeArr<T>(array: T[], n: number): T[];
export declare namespace takeArr {
    var lazy: typeof takeArr;
}
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
export declare function takeArr(n: number): <T>(array: T[]) => T[];
export declare namespace takeArr {
    var lazy: typeof takeArr;
}
export default takeArr;
