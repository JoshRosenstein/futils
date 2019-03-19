import { Omit } from './_types/Omit';
/**
 * Returns a partial copy of an object omitting the keys specified.
 * @param object the object
 * @param names the property names
 * @signature
 *    F.omitProp(obj, names);
 * @example
 *    F.omitProp({ a: 1, b: 2, c: 3, d: 4 }, 'a') // => { b: 2, c: 3, d: 4  }
 * @data_first
 * @category Object
 */
export declare function omitProp<T extends {}, K extends keyof T>(object: T, key: K): Omit<T, K>;
/**
 * Returns a partial copy of an object omitting the keys specified.
 * @param object the object
 * @param key the property
 * @signature
 *    F.omit(names)(obj);
 * @example
 *    F.pipe({ a: 1, b: 2, c: 3, d: 4 }, F.omit('a')) // => { b: 2, c: 3, d: 4 }
 * @data_last
 * @category Object
 */
export declare function omitProp<T extends {}, K extends keyof T>(name: K): (object: T) => Omit<T, K>;
export default omitProp;
