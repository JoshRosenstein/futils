/**
 * Creates an object composed of the pickObjed `object` properties.
 * @param object the target object
 * @param names the properties names
 * @signature F.pickObj(object, [prop1, prop2])
 * @example
 *    F.pickObj({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd']) // => { a: 1, d: 4 }
 * @data_first
 * @category Object
 */
export declare function pickObj<T extends {}, K extends keyof T>(object: T, names: K[]): Pick<T, K>;
/**
 * Creates an object composed of the pickObjed `object` properties.
 * @param names the properties names
 * @signature F.pickObj([prop1, prop2])(object)
 * @example
 *    F.pipe({ a: 1, b: 2, c: 3, d: 4 }, F.pickObj(['a', 'd'])) // => { a: 1, d: 4 }
 * @data_last
 * @category Object
 */
export declare function pickObj<T extends {}, K extends keyof T>(names: K[]): (object: T) => Pick<T, K>;
export declare function pickObj_(object: any, names: string[]): any;
export default pickObj;
