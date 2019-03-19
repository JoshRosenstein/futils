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
export declare function concat<T, K>(a: T[], b: K[]): Array<T | K>;
export declare function concat(a: string, b: string): string;
export default concat;
export declare function concat_<T, K>(a: T[], b: K[]): Array<T | K>;
export declare function concat_(a: string, b: string): string;
