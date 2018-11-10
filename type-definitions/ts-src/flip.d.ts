import {
  CurriedFunction2,
  CurriedFunction3,
  CurriedFunction4,
  CurriedFunction5,
  CurriedFunction6,
} from './$curriedFunctions'

export type Flip = {
  <T1, T2, R>(fn: (v1: T1, v2: T2) => R): flip_2arity_1<T1, T2, R>
  <T1, T2, T3, R>(fn: (v1: T1, v2: T2, v3: T3) => R): flip_3arity_1<
    T1,
    T2,
    T3,
    R
  >
  <T1, T2, T3, T4, R>(fn: (v1: T1, v2: T2, v3: T3, v4: T4) => R): flip_4arity_1<
    T1,
    T2,
    T3,
    T4,
    R
  >
  <T1, T2, T3, T4, T5, R>(
    fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R,
  ): flip_5arity_1<T1, T2, T3, T4, T5, R>
  <T1, T2, T3, T4, T5, T6, R>(
    fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R,
  ): flip_6arity_1<T1, T2, T3, T4, T5, T6, R>
  <$SEL extends '1', $KIND extends 'variadic'>(): <T1, T2, R>(
    fn: (v1: T1, v2: T2, ...args: any[]) => R,
  ) => flip_variadic_1<T1, T2, R>
  <$SEL extends '1', $KIND extends '6arity'>(): <T1, T2, T3, T4, T5, T6, R>(
    fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R,
  ) => flip_6arity_1<T1, T2, T3, T4, T5, T6, R>
  <$SEL extends '1', $KIND extends '5arity'>(): <T1, T2, T3, T4, T5, R>(
    fn: (v1: T1, v2: T2, v3: T3, v4: T4, v5: T5) => R,
  ) => flip_5arity_1<T1, T2, T3, T4, T5, R>
  <$SEL extends '1', $KIND extends '4arity'>(): <T1, T2, T3, T4, R>(
    fn: (v1: T1, v2: T2, v3: T3, v4: T4) => R,
  ) => flip_4arity_1<T1, T2, T3, T4, R>
  <$SEL extends '1', $KIND extends '3arity'>(): <T1, T2, T3, R>(
    fn: (v1: T1, v2: T2, v3: T3) => R,
  ) => flip_3arity_1<T1, T2, T3, R>
  <$SEL extends '1', $KIND extends '2arity'>(): <T1, T2, R>(
    fn: (v1: T1, v2: T2) => R,
  ) => flip_2arity_1<T1, T2, R>
  <T1, T2, R>(fn: (v1: T1, v2: T2, ...args: any[]) => R): flip_variadic_1<
    T1,
    T2,
    R
  >
}
type flip_2arity_1<T1, T2, R> = CurriedFunction2<T2, T1, R>
type flip_3arity_1<T1, T2, T3, R> = CurriedFunction3<T2, T1, T3, R>
type flip_4arity_1<T1, T2, T3, T4, R> = CurriedFunction4<T2, T1, T3, T4, R>
type flip_5arity_1<T1, T2, T3, T4, T5, R> = CurriedFunction5<
  T2,
  T1,
  T3,
  T4,
  T5,
  R
>
type flip_6arity_1<T1, T2, T3, T4, T5, T6, R> = CurriedFunction6<
  T2,
  T1,
  T3,
  T4,
  T5,
  T6,
  R
>
type flip_variadic_1<T1, T2, R> = (v2: T2, v1: T1, ...args: any[]) => R