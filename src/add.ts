import {purry} from './purry'

/**
 * Adds two values.
 *
 * @param a
 * @param b
 * @signature
 *    F.add(a,b)
 * @example
 *    F.add(2, 3);//=>  5
 *
 * @pipeable
 * @data_first
 * @category Math
 *
 */

export function add(a: number, b: number): number

/**
 * Adds two values.
 *
 * @param a
 * @param b
 * @signature
 *    F.add(a,b)
 * @example
 *    F.add(7)(10); //=> 17
 *
 * @pipeable
 * @data_last
 * @category Math
 *
 */

export function add(a: number): (b: number) => number

export function add() {
  return purry(add_, arguments)
}

export function add_(a, b) {
  return Number(a) + Number(b)
}

export default add
