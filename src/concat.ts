import { purry } from './purry';

export function concat_<T, K>(a: T[], b: K[]): (T | K)[];
export function concat_(a: string, b: string): string;
export function concat_(a: any, b: any) {
  return a.concat(b);
}

/**
 * Combines two arrays or two strings.
 * @param a the first array or string
 * @param b the second array or string
 * @signature
 *    F.concat(a, b);
 * @example
 *    F.concat([1, 2, 3], ['a']) // [1, 2, 3, 'a']
 * @data_first
 * @category Array
 */
export function concat<T, K>(a: T[], b: K[]): (T | K)[];
export function concat(a: string, b: string): string;
/**
 * Combines two arrays.
 * @param b the second array
 * @signature
 *    F.concat(b)(a);
 * @example
 *    F.concat(['a'])([1, 2, 3]) // [1, 2, 3, 'a']
 * @data_last
 * @category Array
 */
export function concat() {
  return purry(concat_, arguments);
}

export default concat;
