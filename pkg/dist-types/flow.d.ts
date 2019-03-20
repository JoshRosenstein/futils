/**
 * Perform left-to-right function composition.
 * @param value The initial value.
 * @param operations the list of operations to apply.
 * @signature F.flow(data, op1, op2, op3)
 * @example
 *    F.flow(
 *      [1, 2, 3, 4],
 *      F.map(x => x * 2),
 *      arr => [arr[0] + arr[1], arr[2] + arr[3]],
 *    ) // => [6, 14]
 *
 *
 * @data_first
 * @category Function
 */
export declare function flow<A, B>(value: A, op1: (input: A) => B): B;
export declare function flow<A, B, C>(value: A, op1: (input: A) => B, op2: (input: B) => C): C;
export declare function flow<A, B, C, D>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D): D;
export declare function flow<A, B, C, D, E>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E): E;
export declare function flow<A, B, C, D, E, F>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F): F;
export declare function flow<A, B, C, D, E, F, G>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G): G;
export declare function flow<A, B, C, D, E, F, G, H>(value: A, op1: (input: A) => B, op2: (input: B) => C, op3: (input: C) => D, op4: (input: D) => E, op5: (input: E) => F, op6: (input: F) => G, op7: (input: G) => H): H;
export default flow;
