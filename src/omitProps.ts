import {purry} from './purry'
import {Omit} from './_types/ts/Omit'

/**
 * Returns a partial copy of an object omitting the keys specified.
 * @param object the object
 * @param names the property names
 * @signature
 *    F.omit(obj, names);
 * @example
 *    F.omitProps({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd']) // => { b: 2, c: 3 }
 * @data_first
 * @category Object
 */
export function omitProps<T extends {}, K extends keyof T>(
  object: T,
  names: K[],
): Omit<T, K>

/**
 * Returns a partial copy of an object omitting the keys specified.
 * @param object the object
 * @param names the property names
 * @signature
 *    F.omit(names)(obj);
 * @example
 *    F.pipe({ a: 1, b: 2, c: 3, d: 4 }, F.omit(['a', 'd'])) // => { b: 2, c: 3 }
 * @data_last
 * @category Object
 */
export function omitProps<T extends {}, K extends keyof T>(
  names: K[],
): (object: T) => Omit<T, K>

export function omitProps() {
  return purry(_omitProps, arguments)
}

function _omitProps<T extends {}, K extends keyof T>(
  object: T,
  names: K[],
): Omit<T, K> {
  const set = new Set(names as string[])
  return Object.entries(object).reduce(
    (acc, [name, value]) => {
      if (!set.has(name)) {
        acc[name] = value
      }
      return acc
    },
    {} as any,
  ) as Omit<T, K>
}

export default omitProps
