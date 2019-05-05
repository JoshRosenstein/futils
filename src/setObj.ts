// https://raw.githubusercontent.com/remeda/remeda/master/src/setObj.ts
import { purry } from './purry';

/**
 * setObjs the `value` at `prop` of `object`.
 * @param obj the target method
 * @param prop the property name
 * @param value the value to setObj
 * @signature
 *    F.setObj(obj, prop, value)
 * @example
 *    F.setObj({ a: 1 }, 'a', 2) // => { a: 2 }
 * @data_first
 * @category Object
 */
export function setObj<T, K extends keyof T>(obj: T, prop: K, value: T[K]): T;

/**
 * setObjs the `value` at `prop` of `object`.
 * @param prop the property name
 * @param value the value to setObj
 * @signature
 *    F.setObj(prop, value)(obj)
 * @example
 *    F.pipe({ a: 1 }, F.setObj('a', 2)) // => { a: 2 }
 * @data_last
 * @category Object
 */
export function setObj<T, K extends keyof T>(
  prop: K,
  value: T[K],
): (obj: T) => T;

export function setObj() {
  return purry(setObj_, arguments);
}

export function setObj_<T, K extends keyof T>(obj: T, prop: K, value: T[K]): T;

export function setObj_(obj: any, prop: string, value: any) {
  return {
    ...obj,
    [prop]: value,
  };
}

export default setObj;
