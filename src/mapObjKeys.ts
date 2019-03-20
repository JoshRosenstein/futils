// from https://github.com/remeda/remeda/blob/master/src/mapObjKeys.ts

/**
 * Maps keys of `object` and keeps the same values.
 * @param object the object to map
 * @param fn the mapping function
 * @signature
 *    R.mapObjKeys(object, fn)
 * @example
 *    R.mapObjKeys({a: 1, b: 2}, (key, value) => key + value) // => { a1: 1, b2: 2 }
 * @data_first
 * @category Object
 */
export function mapObjKeys<
  T,
  S extends {[x: string]: any} = {[x: string]: any}
>(object: T, fn: (key: keyof T, value: T[keyof T]) => any): S

/**
 * Maps keys of `object` and keeps the same values.
 * @param fn the mapping function
 * @signature
 *    R.mapObjKeys(fn)(object)
 * @example
 *    R.pipe({a: 1, b: 2}, R.mapObjKeys((key, value) => key + value)) // => { a1: 1, b2: 2 }
 * @data_last
 * @category Object
 */
export function mapObjKeys<
  T,
  S extends {[x: string]: any} = {[x: string]: any}
>(fn: (key: keyof T, value: T[keyof T]) => any): (object: T) => S

export function mapObjKeys(arg1: any, arg2?: any): any {
  if (arguments.length === 1) {
    return (data: any) => _mapObjKeys(data, arg1)
  }
  return _mapObjKeys(arg1, arg2)
}

function _mapObjKeys(obj: any, fn: (key: string, value: any) => any) {
  return Object.keys(obj).reduce(
    (acc, key) => {
      const v = obj[key]
      acc[fn(key, v)] = v
      return acc
    },
    {} as any,
  )
}

export default mapObjKeys
