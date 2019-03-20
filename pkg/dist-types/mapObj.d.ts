/**
 * Maps keys of `object` and keeps the same values.
 * @param object the object to map
 * @param fn the mapping function
 * @signature
 *    R.mapObj(object, fn)
 * @example
 *    R.mapObj({a: 1, b: 2}, (key, value) => key + value) // => { a1: 1, b2: 2 }
 * @data_first
 * @category Object
 */
export declare function mapObj<T, S extends {
    [x: string]: any;
} = {
    [x: string]: any;
}>(object: T, fn: (value: T[keyof T], key: keyof T) => any): S;
/**
 * Maps keys of `object` and keeps the same values.
 * @param fn the mapping function
 * @signature
 *    R.mapObj(fn)(object)
 * @example
 *    R.pipe({a: 1, b: 2}, R.mapObj((key, value) => key + value)) // => { a1: 1, b2: 2 }
 * @data_last
 * @category Object
 */
export declare function mapObj<T, S extends {
    [x: string]: any;
} = {
    [x: string]: any;
}>(fn: (value: T[keyof T], key: keyof T) => any): (object: T) => S;
export default mapObj;
