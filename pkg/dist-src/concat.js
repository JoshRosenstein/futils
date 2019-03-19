import { purry } from './purry';
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
export function concat_(a, b) {
    return a.concat(b);
}
