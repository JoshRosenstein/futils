// https://raw.githubusercontent.com/remeda/remeda/master/src/set.ts
import {purry} from './purry'

/**
 * Sets the `value` at `prop` of `object`.
 * @param obj the target method
 * @param prop the property name
 * @param value the value to set
 * @signature
 *    F.set(obj, prop, value)
 * @example
 *    F.set({ a: 1 }, 'a', 2) // => { a: 2 }
 * @data_first
 * @category Object
 */
export function set<T, K extends keyof T>(obj: T, prop: K, value: T[K]): T

/**
 * Sets the `value` at `prop` of `object`.
 * @param prop the property name
 * @param value the value to set
 * @signature
 *    F.set(prop, value)(obj)
 * @example
 *    F.pipe({ a: 1 }, F.set('a', 2)) // => { a: 2 }
 * @data_last
 * @category Object
 */
export function set<T, K extends keyof T>(prop: K, value: T[K]): (obj: T) => T

export function set() {
  return purry(set_, arguments)
}

export function set_<T, K extends keyof T>(obj: T, prop: K, value: T[K]): T

export function set_(obj: any, prop: string, value: any) {
  return {
    ...obj,
    [prop]: value,
  }
}
