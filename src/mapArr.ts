// from https://github.com/remeda/remeda/blob/master/src/mapArr.ts
import { _reduceLazy, LazyResult } from './_internal/_reduceLazy';
import { Pred, PredIndexed, PredIndexedOptional } from './_types/remeda';
import { _toLazyIndexed } from './_internal/_toLazyIndexed';
import { purry } from './purry';

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
function mapArr<T, K>(array: T[], fn: Pred<T, K>): K[];

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
function mapArr<T, K>(fn: Pred<T, K>): (array: T[]) => K[];

function mapArr() {
  return purry(_mapArr(false), arguments, mapArr.lazy);
}

const _mapArr = (indexed: boolean) => <T, K>(
  array: T[],
  fn: PredIndexedOptional<T, K>,
) => _reduceLazy(array, indexed ? MaplazyIndexed(fn) : Maplazy(fn), indexed);

const _lazy = (indexed: boolean) => <T, K>(fn: PredIndexedOptional<T, K>) => (
  value: T,
  index?: number,
  array?: T[],
): LazyResult<K> => ({
  done: false,
  hasNext: true,
  next: indexed ? fn(value, index, array) : fn(value),
});

const Maplazy = _lazy(false);
const MaplazyIndexed = _toLazyIndexed(_lazy(true));

function mapArrindexed<T, K>(array: T[], fn: PredIndexed<T, K>): K[];
function mapArrindexed<T, K>(fn: PredIndexed<T, K>): (array: T[]) => K[];
function mapArrindexed() {
  return purry(_mapArr(true), arguments, MaplazyIndexed);
}

mapArr.lazy = Maplazy;
mapArr.lazyIndexed = MaplazyIndexed;
mapArr.indexed = mapArrindexed;

export { mapArr };
