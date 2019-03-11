// https://github.com/remeda/remeda/blob/master/src/mergeAll.ts

import {Assign} from './_types/ts/Assign'
// type Simplify<T> = Pick<T, keyof T>
/**
 * Merges a list of objects into a single object.
 * @param array the array of objects
 * @signature
 *    F.mergeAllObj(objects)
 * @example
 *    F.mergeAllObjObj([{ a: 1, b: 1 }, { b: 2, c: 3 }, { d: 10 }]) // => { a: 1, b: 2, c: 3, d: 10 }
 * @category Array
 */
export function mergeAllObj<A>(array: [A]): A
export function mergeAllObj<A, B>(array: [A, B]): Assign<A, B>
export function mergeAllObj<A, B, C>(array: [A, B, C]): Assign<A, Assign<B, C>>
export function mergeAllObj<A, B, C, D>(
  array: [A, B, C, D],
): Assign<A, Assign<B, Assign<C, D>>>
export function mergeAllObj<A, B, C, D, E>(
  array: [A, B, C, D, E],
): A & B & C & D & E

export function mergeAllObj(items: any[]) {
  return items.reduce((acc, x) => ({...acc, ...x}), {})
}
