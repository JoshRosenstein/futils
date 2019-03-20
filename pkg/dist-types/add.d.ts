/**
 * Adds two values.
 *
 * @param a
 * @param b
 * @signature
 *    F.add(a,b)
 * @example
 *    F.add(2, 3);//=>  5
 *
 * @pipeable
 * @data_first
 * @category Math
 *
 */
export declare function add(a: number, b: number): number;
/**
 * Adds two values.
 *
 * @param a
 * @param b
 * @signature
 *    F.add(a,b)
 * @example
 *    F.add(7)(10); //=> 17
 *
 * @pipeable
 * @data_last
 * @category Math
 *
 */
export declare function add(a: number): (b: number) => number;
export declare function add_(a: any, b: any): number;
export default add;
