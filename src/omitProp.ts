import { purry } from './purry';
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
export function omitProp<T extends {}, K extends keyof T>(
  object: T,
  key: K,
): Omit<T, K>;

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
export function omitProp<T extends {}, K extends keyof T>(
  name: K,
): (object: T) => Omit<T, K>;

export function omitProp() {
  return purry(_omitProp, arguments);
}

function _omitProp<T extends {}, K extends keyof T>(
  object: T,
  key: K,
): Omit<T, K> {
  return Object.entries(object).reduce(
    (acc, [name, value]) => {
      if (name !== key) {
        acc[name] = value;
      }
      return acc;
    },
    {} as any,
  ) as Omit<T, K>;
}

export default omitProp;
