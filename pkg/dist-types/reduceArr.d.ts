/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param array the array to reduce
 * @param fn the callback function
 * @param initialValue the initial value to use as an accumulator value in the callback function
 * @signature
 *    F.reduce(items, fn, initialValue)
 *    F.reduce.indexed(items, fn, initialValue)
 * @example
 *    F.reduceArr([1, 2, 3, 4, 5], (acc, x) => acc + x, 100) // => 115
 *    F.reduceArr.indexed([1, 2, 3, 4, 5], (acc, x, i, array) => acc + x, 100) // => 115
 * @data_first
 * @indexed
 * @category Array
 */
export declare function reduceArr<T, K>(items: T[], fn: (acc: K, item: T) => K, initialValue: K): K;
export declare namespace reduceArr {
    var indexed: typeof indexed;
}
/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param fn the callback function
 * @param initialValue the initial value to use as an accumulator value in the callback function
 * @signature
 *    F.reduce(fn, initialValue)(array)
 * @example
 *    F.flow([1, 2, 3, 4, 5], F.reduce((acc, x) => acc + x, 100)) // => 115
 *    F.flow([1, 2, 3, 4, 5], F.reduce.indexed((acc, x, i, array) => acc + x, 100)) // => 115
 * @data_last
 * @indexed
 * @category Array
 */
export declare function reduceArr<T, K>(fn: (acc: K, item: T) => K, initialValue: K): (items: T[]) => K;
export declare namespace reduceArr {
    var indexed: typeof indexed;
}
export declare const reduceArr_: (indexed: boolean) => <T, K>(items: T[], fn: (acc: K, item: T, index?: number | undefined, items?: T[] | undefined) => K, initialValue: K) => K;
declare function indexed<T, K>(array: T[], fn: (acc: K, item: T, index: number, items: T[]) => K, initialValue: K): Record<string, T>;
declare function indexed<T, K>(fn: (acc: K, item: T, index: number, items: T[]) => K, initialValue: K): (array: T[]) => Record<string, T>;
export default reduceArr;
