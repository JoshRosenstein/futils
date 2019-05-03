// from https://github.com/remeda/remeda/blob/master/src/mapObj.ts

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
export function mapObj<
  T extends {[x: string]: any},
  S extends {[x: string]: any} = {[x: string]: any}
>(object: T, fn: (value: T[keyof T], key: keyof T) => any): S

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
export function mapObj<
  T extends {[x: string]: any},
  S extends {[x: string]: any} = {[x: string]: any}
>(fn: (value: T[keyof T], key: keyof T) => any): (object: T) => S

export function mapObj(arg1: any, arg2?: any): any {
  if (arguments.length === 1) {
    return (data: any) => _mapObj(data, arg1)
  }
  return _mapObj(arg1, arg2)
}

function _mapObj(obj: any, fn: (value: any, key: string) => any) {
  return Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...fn(obj[key], key),
    }),
    {} as any,
  )
}

export default mapObj
