import { LazyResult } from './_internal/_reduceLazy';
import { Pred, PredIndexedOptional, PredIndexed } from './_types/remeda';
/**
 * mapArr each element of an array using a defined callback function.
 * @param array The array to mapArr.
 * @param fn The function mapArrpeF.
 * @returns The new mapArrped array.
 * @signature
 *    F.mapArr(array, fn)
 *    F.mapArr.indexed(array, fn)
 * @example
 *    F.mapArr([1, 2, 3], x => x * 2) // => [2, 4, 6]
 *    F.mapArr.indexed([0, 0, 0], (x, i) => i) // => [0, 1, 2]
 * @data_first
 * @indexed
 * @pipeable
 * @category Array
 */
declare function mapArr<T, K>(array: T[], fn: Pred<T, K>): K[];
declare namespace mapArr {
    var lazy: <T, K>(fn: PredIndexedOptional<T, K>) => (value: T, index?: number | undefined, array?: T[] | undefined) => LazyResult<K>;
    var lazyIndexed: (<T, K>(fn: PredIndexedOptional<T, K>) => (value: T, index?: number | undefined, array?: T[] | undefined) => LazyResult<K>) & {
        indexed: true;
    };
    var indexed: typeof mapArrindexed;
}
/**
 * mapArr each value of an object using a defined callback function.
 * @param fn the function mapArrper
 * @signature
 *    F.mapArr(fn)(array)
 *    F.mapArr.indexed(fn)(array)
 * @example
 *    F.pipe([0, 1, 2], F.mapArr(x => x * 2)) // => [2, 4, 6]
 *    F.pipe([0, 0, 0], F.mapArr.indexed((x, i) => i)) // => [0, 1, 2]
 * @data_last
 * @indexed
 * @pipeable
 * @category Array
 */
declare function mapArr<T, K>(fn: Pred<T, K>): (array: T[]) => K[];
declare namespace mapArr {
    var lazy: <T, K>(fn: PredIndexedOptional<T, K>) => (value: T, index?: number | undefined, array?: T[] | undefined) => LazyResult<K>;
    var lazyIndexed: (<T, K>(fn: PredIndexedOptional<T, K>) => (value: T, index?: number | undefined, array?: T[] | undefined) => LazyResult<K>) & {
        indexed: true;
    };
    var indexed: typeof mapArrindexed;
}
declare function mapArrindexed<T, K>(array: T[], fn: PredIndexed<T, K>): K[];
declare function mapArrindexed<T, K>(fn: PredIndexed<T, K>): (array: T[]) => K[];
export { mapArr };
