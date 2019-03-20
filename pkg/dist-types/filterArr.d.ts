import { LazyResult } from './_internal/_reduceLazy';
import { Pred, PredIndexedOptional, PredIndexed } from './_types/remeda';
/**
 * Filter the elements of an array that meet the condition specified in a callback function.
 * @param array The array to filter.
 * @param fn the callback function.
 * @signature
 *    F.filter(array, fn)
 *    F.filter.indexed(array, fn)
 * @example
 *    F.filterArr([1, 2, 3], x => x % 2 === 1) // => [1, 3]
 *    F.filterArr.indexed([1, 2, 3], (x, i, array) => x % 2 === 1) // => [1, 3]
 * @data_first
 * @indexed
 * @pipeable
 * @category Array
 */
export declare function filterArr<T>(array: T[], fn: Pred<T, boolean>): T[];
export declare namespace filterArr {
    var lazy: <T>(fn: PredIndexedOptional<T, boolean>) => (value: T, index?: number | undefined, array?: T[] | undefined) => LazyResult<T>;
    var indexed: typeof filterArrindexed;
    var lazyIndexed: (<T>(fn: PredIndexedOptional<T, boolean>) => (value: T, index?: number | undefined, array?: T[] | undefined) => LazyResult<T>) & {
        indexed: true;
    };
}
/**
 * Filter the elements of an array that meet the condition specified in a callback function.
 * @param fn the callback function.
 * @signature
 *    F.filter(fn)(array)
 *    F.filter.indexed(fn)(array)
 * @example
 *    F.pipe([1, 2, 3], F.filterArr(x => x % 2 === 1)) // => [1, 3]
 *    F.pipe([1, 2, 3], F.filterArr.indexed((x, i) => x % 2 === 1)) // => [1, 3]
 * @data_last
 * @indexed
 * @pipeable
 * @category Array
 */
export declare function filterArr<T>(fn: Pred<T, boolean>): (array: T[]) => T[];
export declare namespace filterArr {
    var lazy: <T>(fn: PredIndexedOptional<T, boolean>) => (value: T, index?: number | undefined, array?: T[] | undefined) => LazyResult<T>;
    var indexed: typeof filterArrindexed;
    var lazyIndexed: (<T>(fn: PredIndexedOptional<T, boolean>) => (value: T, index?: number | undefined, array?: T[] | undefined) => LazyResult<T>) & {
        indexed: true;
    };
}
declare function filterArrindexed<T, K>(array: T[], fn: PredIndexed<T, boolean>): K[];
declare function filterArrindexed<T, K>(fn: PredIndexed<T, boolean>): (array: T[]) => K[];
export default filterArr;
