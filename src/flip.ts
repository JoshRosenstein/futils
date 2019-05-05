import {
  Curried2,
  Curried3,
  Curried4,
  Curried5,
  Curried6,
} from './_types/$curried';
import { curryN_ } from './curryN';

export const flip_: Flip = (fn) =>
  curryN_(fn.length, (x, y, ...args) => fn(y, x, ...args));
export const flip = flip_;

export default flip;

export type Flip = {
  <T1, T2, R>(fn: (v1: T1, v2: T2) => R): flip_2arity_1<T1, T2, R>;
  <T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3) => R): flip_3arity_1<
    T1,
    T2,
    T3,
    R
  >;
  <T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => R): flip_4arity_1<
    T1,
    T2,
    T3,
    T4,
    R
  >;
  <T1, T2, T3, T4, T5, R>(
    fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R,
  ): flip_5arity_1<T1, T2, T3, T4, T5, R>;
  <T1, T2, T3, T4, T5, T6, R>(
    fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R,
  ): flip_6arity_1<T1, T2, T3, T4, T5, T6, R>;
  <T1, T2, R>(fn: (v1: T1, v2: T2, ...args: any[]) => R): flip_variadic_1<
    T1,
    T2,
    R
  >;
};
type flip_2arity_1<T1, T2, R> = Curried2<T2, T1, R>;
type flip_3arity_1<T1, T2, T3, R> = Curried3<T2, T1, T3, R>;
type flip_4arity_1<T1, T2, T3, T4, R> = Curried4<T2, T1, T3, T4, R>;
type flip_5arity_1<T1, T2, T3, T4, T5, R> = Curried5<T2, T1, T3, T4, T5, R>;
type flip_6arity_1<T1, T2, T3, T4, T5, T6, R> = Curried6<
  T2,
  T1,
  T3,
  T4,
  T5,
  T6,
  R
>;
type flip_variadic_1<T1, T2, R> = (v2: T2, v1: T1, ...args: any[]) => R;
