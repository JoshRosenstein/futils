// from https://github.com/remeda/remeda/blob/master/src/purry.ts
/**
 * Creates a function with `data-first` and `data-last` signatures.
 *
 * `purry` is a dynamic function and it's not type safe. It should be wrapped by a function that have proper typings.
 * Refer to the example below for correct usage.
 *
 * @param fn the function to purry.
 * @param args the arguments
 * @signature F.purry(fn, arguments);
 * @example-raw
 *    function _findIndex(array, fn) {
 *      for (let i = 0; i < array.length; i++) {
 *        if (fn(array[i])) {
 *          return i;
 *        }
 *      }
 *      return -1;
 *    }
 *
 *    // data-first
 *    function findIndex<T>(array: T[], fn: (item: T) => boolean): number;
 *
 *    // data-last
 *    function findIndex<T>(fn: (item: T) => boolean): (array: T[]) => number;
 *
 *    function findIndex() {
 *      return F.purry(_findIndex, arguments);
 *    }
 * @category Function
 */
export function purry(fn, args, lazy) {
    const diff = fn.length - args.length;
    const arrayArgs = Array.from(args);
    if (diff === 0) {
        return fn(...arrayArgs);
    }
    if (diff === 1) {
        const ret = (data) => fn(data, ...arrayArgs);
        if (lazy || fn.lazy) {
            ret.lazy = lazy || fn.lazy;
            ret.lazyArgs = args;
        }
        return ret;
    }
    throw new Error('Wrong number of arguments');
}
export default purry;
//# sourceMappingURL=purry.js.map