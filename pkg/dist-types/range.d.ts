/**
 * Returns a list of numbers from `start` (inclusive) to `end` (exclusive).
 * @param start the start number
 * @param end the end number
 * @signature range(start, end)
 * @example
 *    F.range(1, 5) // => [1, 2, 3, 4]
 * @data_first
 * @category Array
 */
export declare function range(start: number, end: number): number[];
/**
 * Returns a list of numbers from `start` (inclusive) to `end` (exclusive).
 * @param end the end number
 * @signature range(end)(start)
 * @example
 *    F.range(5)(1) // => [1, 2, 3, 4]
 * @data_first
 * @category Array
 */
export declare function range(end: number): (start: number) => number[];
export declare function range_(start: number, end: number): number[];
export default range;
