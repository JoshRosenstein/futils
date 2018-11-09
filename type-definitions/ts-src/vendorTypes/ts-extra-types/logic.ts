import {Head, Tail} from "./tuple";

export type If<C extends boolean, T, F> =
    C extends true ? T :
    C extends false ? F :
    never;

export type Not<C extends boolean> = If<C, false, true>;
export type And<A extends boolean, B extends boolean> = If<A, B, false>;
export type Or<A extends boolean, B extends boolean> = If<A, true, B>;

export type Switch<L extends Array<[true | false, any]>> = {
    0: Head<L> extends [true, infer THEN] ? THEN : Switch<Tail<L>>,
}[L extends [] ? never : 0];