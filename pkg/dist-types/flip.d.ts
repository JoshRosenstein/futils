export declare const flip_: Flip;
export declare const flip: Flip;
export default flip;
import { Curried2, Curried3, Curried4, Curried5, Curried6 } from './_types/$curried';
export declare type Flip = {
    <T1, T2, R>(fn: (v1: T1, v2: T2) => R): flip_2arity_1<T1, T2, R>;
    <T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3) => R): flip_3arity_1<T1, T2, T3, R>;
    <T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => R): flip_4arity_1<T1, T2, T3, T4, R>;
    <T1, T2, T3, T4, T5, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R): flip_5arity_1<T1, T2, T3, T4, T5, R>;
    <T1, T2, T3, T4, T5, T6, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): flip_6arity_1<T1, T2, T3, T4, T5, T6, R>;
    <T1, T2, R>(fn: (v1: T1, v2: T2, ...args: any[]) => R): flip_variadic_1<T1, T2, R>;
};
declare type flip_2arity_1<T1, T2, R> = Curried2<T2, T1, R>;
declare type flip_3arity_1<T1, T2, T3, R> = Curried3<T2, T1, T3, R>;
declare type flip_4arity_1<T1, T2, T3, T4, R> = Curried4<T2, T1, T3, T4, R>;
declare type flip_5arity_1<T1, T2, T3, T4, T5, R> = Curried5<T2, T1, T3, T4, T5, R>;
declare type flip_6arity_1<T1, T2, T3, T4, T5, T6, R> = Curried6<T2, T1, T3, T4, T5, T6, R>;
declare type flip_variadic_1<T1, T2, R> = (v2: T2, v1: T1, ...args: any[]) => R;
