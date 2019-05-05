import { _reduceLazy, LazyResult } from './_internal/_reduceLazy';
import { Pred, PredIndexedOptional, PredIndexed } from './_types/remeda';
import { _toLazyIndexed } from './_internal/_toLazyIndexed';
import { purry } from './purry';

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
export function filterArr<T>(array: T[], fn: Pred<T, boolean>): T[];

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
export function filterArr<T>(fn: Pred<T, boolean>): (array: T[]) => T[];

export function filterArr() {
  return purry(_filterArr(false), arguments, filterArr.lazy);
}

const _filterArr = (indexed: boolean) => <T>(
  array: T[],
  fn: PredIndexedOptional<T, boolean>,
) => {
  return _reduceLazy(
    array,
    indexed ? filterArrlazyIndexed(fn) : filterArrLazy(fn),
    indexed,
  );
};

const _lazy = (indexed: boolean) => <T>(
  fn: PredIndexedOptional<T, boolean>,
) => {
  return (value: T, index?: number, array?: T[]): LazyResult<T> => {
    const valid = indexed ? fn(value, index, array) : fn(value);
    if (!!valid) {
      return {
        done: false,
        hasNext: true,
        next: value,
      };
    }
    return {
      done: false,
      hasNext: false,
    };
  };
};

const filterArrLazy = _lazy(false);
const filterArrlazyIndexed = _toLazyIndexed(_lazy(true));

function filterArrindexed<T, K>(array: T[], fn: PredIndexed<T, boolean>): K[];
function filterArrindexed<T, K>(
  fn: PredIndexed<T, boolean>,
): (array: T[]) => K[];
function filterArrindexed() {
  return purry(_filterArr(true), arguments, filterArrlazyIndexed);
}

filterArr.lazy = filterArrLazy;
filterArr.indexed = filterArrindexed;
filterArr.lazyIndexed = filterArrlazyIndexed;

export default filterArr;
