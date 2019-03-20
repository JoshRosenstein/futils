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
export declare function setObj<T, K extends keyof T>(obj: T, prop: K, value: T[K]): T;
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
export declare function setObj<T, K extends keyof T>(prop: K, value: T[K]): (obj: T) => T;
export declare function setObj_<T, K extends keyof T>(obj: T, prop: K, value: T[K]): T;
export default setObj;
