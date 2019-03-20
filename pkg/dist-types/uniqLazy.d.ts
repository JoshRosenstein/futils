import { LazyResult } from './_internal/_reduceLazy';
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
export declare function uniqLazy<T>(array: T[]): T[];
export declare namespace uniqLazy {
    var lazy: typeof lazy;
}
export declare function uniqLazy<T>(): (array: T[]) => T[];
export declare namespace uniqLazy {
    var lazy: typeof lazy;
}
declare function lazy(): (value: any) => LazyResult<any>;
export default uniqLazy;
