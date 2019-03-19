import { Assign } from './_types/Assign';
/**
 * Merges a list of objects into a single object.
 * @param array the array of objects
 * @signature
 *    F.mergeAllObj(objects)
 * @example
 *    F.mergeAllObjObj([{ a: 1, b: 1 }, { b: 2, c: 3 }, { d: 10 }]) // => { a: 1, b: 2, c: 3, d: 10 }
 * @category Array
 */
export declare function mergeAllObj<A>(array: [A]): A;
export declare function mergeAllObj<A, B>(array: [A, B]): Assign<A, B>;
export declare function mergeAllObj<A, B, C>(array: [A, B, C]): Assign<A, Assign<B, C>>;
export declare function mergeAllObj<A, B, C, D>(array: [A, B, C, D]): Assign<A, Assign<B, Assign<C, D>>>;
export declare function mergeAllObj<A, B, C, D, E>(array: [A, B, C, D, E]): A & B & C & D & E;
