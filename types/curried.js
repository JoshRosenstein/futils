// @flow
/* eslint-disable no-unused-vars, no-redeclare, flowtype/generic-spacing */

export type UnaryFn<A, R> = (a: A) => R
export type UnaryPromiseFn<A, R> = UnaryFn<A, Promise<R>>
export type BinaryFn<A, B, R> = ((a: A, b: B) => R) & ((a: A) => (b: B) => R)
export type UnarySameTypeFn<T> = UnaryFn<T, T>
export type BinarySameTypeFn<T> = BinaryFn<T, T, T>
export type NestedObject<T> = {[k: string]: T | NestedObject<T>}
export type UnaryPredicateFn<T> = (x: T) => boolean
export type MapUnaryPredicateFn = <V>(V) => V => boolean
export type BinaryPredicateFn<T> = (x: T, y: T) => boolean
export type BinaryPredicateFn2<T, S> = (x: T, y: S) => boolean

export interface ObjPredicate {
  (value: any, key: string): boolean;
}

export type __CurriedFunction1<A, R, AA: A> = (...r: [AA]) => R
export type CurriedFunction1<A, R> = __CurriedFunction1<A, R, *>

export type __CurriedFunction2<A, B, R, AA: A, BB: B> = ((
  ...r: [AA]
) => CurriedFunction1<BB, R>) &
  ((...r: [AA, BB]) => R)
export type CurriedFunction2<A, B, R> = __CurriedFunction2<A, B, R, *, *>

export type __CurriedFunction3<A, B, C, R, AA: A, BB: B, CC: C> = ((
  ...r: [AA]
) => CurriedFunction2<BB, CC, R>) &
  ((...r: [AA, BB]) => CurriedFunction1<CC, R>) &
  ((...r: [AA, BB, CC]) => R)

export type CurriedFunction3<A, B, C, R> = __CurriedFunction3<
  A,
  B,
  C,
  R,
  *,
  *,
  *,
>

export type __CurriedFunction4<A, B, C, D, R, AA: A, BB: B, CC: C, DD: D> = ((
  ...r: [AA]
) => CurriedFunction3<BB, CC, DD, R>) &
  ((...r: [AA, BB]) => CurriedFunction2<CC, DD, R>) &
  ((...r: [AA, BB, CC]) => CurriedFunction1<DD, R>) &
  ((...r: [AA, BB, CC, DD]) => R)
export type CurriedFunction4<A, B, C, D, R> = __CurriedFunction4<
  A,
  B,
  C,
  D,
  R,
  *,
  *,
  *,
  *,
>

export type __CurriedFunction5<
  A,
  B,
  C,
  D,
  E,
  R,
  AA: A,
  BB: B,
  CC: C,
  DD: D,
  EE: E,
> = ((...r: [AA]) => CurriedFunction4<BB, CC, DD, EE, R>) &
  ((...r: [AA, BB]) => CurriedFunction3<CC, DD, EE, R>) &
  ((...r: [AA, BB, CC]) => CurriedFunction2<DD, EE, R>) &
  ((...r: [AA, BB, CC, DD]) => CurriedFunction1<EE, R>) &
  ((...r: [AA, BB, CC, DD, EE]) => R)
export type CurriedFunction5<A, B, C, D, E, R> = __CurriedFunction5<
  A,
  B,
  C,
  D,
  E,
  R,
  *,
  *,
  *,
  *,
  *,
>

export type __CurriedFunction6<
  A,
  B,
  C,
  D,
  E,
  F,
  R,
  AA: A,
  BB: B,
  CC: C,
  DD: D,
  EE: E,
  FF: F,
> = ((...r: [AA]) => CurriedFunction5<BB, CC, DD, EE, FF, R>) &
  ((...r: [AA, BB]) => CurriedFunction4<CC, DD, EE, FF, R>) &
  ((...r: [AA, BB, CC]) => CurriedFunction3<DD, EE, FF, R>) &
  ((...r: [AA, BB, CC, DD]) => CurriedFunction2<EE, FF, R>) &
  ((...r: [AA, BB, CC, DD, EE]) => CurriedFunction1<FF, R>) &
  ((...r: [AA, BB, CC, DD, EE, FF]) => R)
export type CurriedFunction6<A, B, C, D, E, F, R> = __CurriedFunction6<
  A,
  B,
  C,
  D,
  E,
  F,
  R,
  *,
  *,
  *,
  *,
  *,
  *,
>

export type Curry = (<A, R>((...r: [A]) => R) => CurriedFunction1<A, R>) &
  (<A, B, R>((...r: [A, B]) => R) => CurriedFunction2<A, B, R>) &
  (<A, B, C, R>((...r: [A, B, C]) => R) => CurriedFunction3<A, B, C, R>) &
  (<A, B, C, D, R>(
    (...r: [A, B, C, D]) => R,
  ) => CurriedFunction4<A, B, C, D, R>) &
  (<A, B, C, D, E, R>(
    (...r: [A, B, C, D, E]) => R,
  ) => CurriedFunction5<A, B, C, D, E, R>) &
  (<A, B, C, D, E, F, R>(
    (...r: [A, B, C, D, E, F]) => R,
  ) => CurriedFunction6<A, B, C, D, E, F, R>)

export type Partial = (<A, R>((...r: [A]) => R, args: [A]) => () => R) &
  (<A, B, R>((...r: [A, B]) => R, args: [A]) => B => R) &
  (<A, B, R>((...r: [A, B]) => R, args: [A, B]) => () => R) &
  (<A, B, C, R>((...r: [A, B, C]) => R, args: [A]) => (B, C) => R) &
  (<A, B, C, R>((...r: [A, B, C]) => R, args: [A, B]) => C => R) &
  (<A, B, C, R>((...r: [A, B, C]) => R, args: [A, B, C]) => () => R) &
  (<A, B, C, D, R>((...r: [A, B, C, D]) => R, args: [A]) => (B, C, D) => R) &
  (<A, B, C, D, R>((...r: [A, B, C, D]) => R, args: [A, B]) => (C, D) => R) &
  (<A, B, C, D, R>((...r: [A, B, C, D]) => R, args: [A, B, C]) => D => R) &
  (<A, B, C, D, R>((...r: [A, B, C, D]) => R, args: [A, B, C, D]) => () => R) &
  (<A, B, C, D, E, R>(
    (...r: [A, B, C, D, E]) => R,
    args: [A],
  ) => (B, C, D, E) => R) &
  (<A, B, C, D, E, R>(
    (...r: [A, B, C, D, E]) => R,
    args: [A, B],
  ) => (C, D, E) => R) &
  (<A, B, C, D, E, R>(
    (...r: [A, B, C, D, E]) => R,
    args: [A, B, C],
  ) => (D, E) => R) &
  (<A, B, C, D, E, R>(
    (...r: [A, B, C, D, E]) => R,
    args: [A, B, C, D],
  ) => E => R) &
  (<A, B, C, D, E, R>(
    (...r: [A, B, C, D, E]) => R,
    args: [A, B, C, D, E],
  ) => () => R) &
  (<A, B, C, D, E, F, R>(
    (...r: [A, B, C, D, E, F]) => R,
    args: [A],
  ) => (B, C, D, E, F) => R) &
  (<A, B, C, D, E, F, R>(
    (...r: [A, B, C, D, E, F]) => R,
    args: [A, B],
  ) => (C, D, E, F) => R) &
  (<A, B, C, D, E, F, R>(
    (...r: [A, B, C, D, E, F]) => R,
    args: [A, B, C],
  ) => (D, E, F) => R) &
  (<A, B, C, D, E, F, R>(
    (...r: [A, B, C, D, E, F]) => R,
    args: [A, B, C, D],
  ) => (E, F) => R) &
  (<A, B, C, D, E, F, R>(
    (...r: [A, B, C, D, E, F]) => R,
    args: [A, B, C, D, E],
  ) => F => R) &
  (<A, B, C, D, E, F, R>(
    (...r: [A, B, C, D, E, F]) => R,
    args: [A, B, C, D, E, F],
  ) => () => R) &
  (<A, B, C, D, E, F, G, R>(
    (...r: [A, B, C, D, E, F, G]) => R,
    args: [A],
  ) => (B, C, D, E, F, G) => R) &
  (<A, B, C, D, E, F, G, R>(
    (...r: [A, B, C, D, E, F, G]) => R,
    args: [A, B],
  ) => (C, D, E, F, G) => R) &
  (<A, B, C, D, E, F, G, R>(
    (...r: [A, B, C, D, E, F, G]) => R,
    args: [A, B, C],
  ) => (D, E, F, G) => R) &
  (<A, B, C, D, E, F, G, R>(
    (...r: [A, B, C, D, E, F, G]) => R,
    args: [A, B, C, D],
  ) => (E, F, G) => R) &
  (<A, B, C, D, E, F, G, R>(
    (...r: [A, B, C, D, E, F, G]) => R,
    args: [A, B, C, D, E],
  ) => (F, G) => R) &
  (<A, B, C, D, E, F, G, R>(
    (...r: [A, B, C, D, E, F, G]) => R,
    args: [A, B, C, D, E, F],
  ) => G => R) &
  (<A, B, C, D, E, F, G, R>(
    (...r: [A, B, C, D, E, F, G]) => R,
    args: [A, B, C, D, E, F, G],
  ) => () => R) &
  (<A, B, C, D, E, F, G, H, R>(
    (...r: [A, B, C, D, E, F, G, H]) => R,
    args: [A],
  ) => (B, C, D, E, F, G, H) => R) &
  (<A, B, C, D, E, F, G, H, R>(
    (...r: [A, B, C, D, E, F, G, H]) => R,
    args: [A, B],
  ) => (C, D, E, F, G, H) => R) &
  (<A, B, C, D, E, F, G, H, R>(
    (...r: [A, B, C, D, E, F, G, H]) => R,
    args: [A, B, C],
  ) => (D, E, F, G, H) => R) &
  (<A, B, C, D, E, F, G, H, R>(
    (...r: [A, B, C, D, E, F, G, H]) => R,
    args: [A, B, C, D],
  ) => (E, F, G, H) => R) &
  (<A, B, C, D, E, F, G, H, R>(
    (...r: [A, B, C, D, E, F, G, H]) => R,
    args: [A, B, C, D, E],
  ) => (F, G, H) => R) &
  (<A, B, C, D, E, F, G, H, R>(
    (...r: [A, B, C, D, E, F, G, H]) => R,
    args: [A, B, C, D, E, F],
  ) => (G, H) => R) &
  (<A, B, C, D, E, F, G, H, R>(
    (...r: [A, B, C, D, E, F, G, H]) => R,
    args: [A, B, C, D, E, F, G],
  ) => H => R) &
  (<A, B, C, D, E, F, G, H, R>(
    (...r: [A, B, C, D, E, F, G, H]) => R,
    args: [A, B, C, D, E, F, G, H],
  ) => () => R) &
  (<A, B, C, D, E, F, G, H, I, R>(
    (...r: [A, B, C, D, E, F, G, H, I]) => R,
    args: [A],
  ) => (B, C, D, E, F, G, H, I) => R) &
  (<A, B, C, D, E, F, G, H, I, R>(
    (...r: [A, B, C, D, E, F, G, H, I]) => R,
    args: [A, B],
  ) => (C, D, E, F, G, H, I) => R) &
  (<A, B, C, D, E, F, G, H, I, R>(
    (...r: [A, B, C, D, E, F, G, H, I]) => R,
    args: [A, B, C],
  ) => (D, E, F, G, H, I) => R) &
  (<A, B, C, D, E, F, G, H, I, R>(
    (...r: [A, B, C, D, E, F, G, H, I]) => R,
    args: [A, B, C, D],
  ) => (E, F, G, H, I) => R) &
  (<A, B, C, D, E, F, G, H, I, R>(
    (...r: [A, B, C, D, E, F, G, H, I]) => R,
    args: [A, B, C, D, E],
  ) => (F, G, H, I) => R) &
  (<A, B, C, D, E, F, G, H, I, R>(
    (...r: [A, B, C, D, E, F, G, H, I]) => R,
    args: [A, B, C, D, E, F],
  ) => (G, H, I) => R) &
  (<A, B, C, D, E, F, G, H, I, R>(
    (...r: [A, B, C, D, E, F, G, H, I]) => R,
    args: [A, B, C, D, E, F, G],
  ) => (H, I) => R) &
  (<A, B, C, D, E, F, G, H, I, R>(
    (...r: [A, B, C, D, E, F, G, H, I]) => R,
    args: [A, B, C, D, E, F, G, H],
  ) => I => R) &
  (<A, B, C, D, E, F, G, H, I, R>(
    (...r: [A, B, C, D, E, F, G, H, I]) => R,
    args: [A, B, C, D, E, F, G, H, I],
  ) => () => R)

export type Pipe = (<A, B, C, D, E, F, G>(
  ab: UnaryFn<A, B>,
  bc: UnaryFn<B, C>,
  cd: UnaryFn<C, D>,
  de: UnaryFn<D, E>,
  ef: UnaryFn<E, F>,
  fg: UnaryFn<F, G>,
) => UnaryFn<A, G>) &
  (<A, B, C, D, E, F>(
    ab: UnaryFn<A, B>,
    bc: UnaryFn<B, C>,
    cd: UnaryFn<C, D>,
    de: UnaryFn<D, E>,
    ef: UnaryFn<E, F>,
  ) => UnaryFn<A, F>) &
  (<A, B, C, D, E>(
    ab: UnaryFn<A, B>,
    bc: UnaryFn<B, C>,
    cd: UnaryFn<C, D>,
    de: UnaryFn<D, E>,
  ) => UnaryFn<A, E>) &
  (<A, B, C, D>(
    ab: UnaryFn<A, B>,
    bc: UnaryFn<B, C>,
    cd: UnaryFn<C, D>,
  ) => UnaryFn<A, D>) &
  (<A, B, C>(ab: UnaryFn<A, B>, bc: UnaryFn<B, C>) => UnaryFn<A, C>) &
  (<A, B>(ab: UnaryFn<A, B>) => UnaryFn<A, B>)

export type PipeP = (<A, B, C, D, E, F, G>(
  ab: UnaryPromiseFn<A, B>,
  bc: UnaryPromiseFn<B, C>,
  cd: UnaryPromiseFn<C, D>,
  de: UnaryPromiseFn<D, E>,
  ef: UnaryPromiseFn<E, F>,
  fg: UnaryPromiseFn<F, G>,
) => UnaryPromiseFn<A, G>) &
  (<A, B, C, D, E, F>(
    ab: UnaryPromiseFn<A, B>,
    bc: UnaryPromiseFn<B, C>,
    cd: UnaryPromiseFn<C, D>,
    de: UnaryPromiseFn<D, E>,
    ef: UnaryPromiseFn<E, F>,
  ) => UnaryPromiseFn<A, F>) &
  (<A, B, C, D, E>(
    ab: UnaryPromiseFn<A, B>,
    bc: UnaryPromiseFn<B, C>,
    cd: UnaryPromiseFn<C, D>,
    de: UnaryPromiseFn<D, E>,
  ) => UnaryPromiseFn<A, E>) &
  (<A, B, C, D>(
    ab: UnaryPromiseFn<A, B>,
    bc: UnaryPromiseFn<B, C>,
    cd: UnaryPromiseFn<C, D>,
  ) => UnaryPromiseFn<A, D>) &
  (<A, B, C>(
    ab: UnaryPromiseFn<A, B>,
    bc: UnaryPromiseFn<B, C>,
  ) => UnaryPromiseFn<A, C>) &
  (<A, B>(ab: UnaryPromiseFn<A, B>) => UnaryPromiseFn<A, B>)

export type Compose = (<A, B, C, D, E, F, G>(
  fg: UnaryFn<F, G>,
  ef: UnaryFn<E, F>,
  de: UnaryFn<D, E>,
  cd: UnaryFn<C, D>,
  bc: UnaryFn<B, C>,
  ab: UnaryFn<A, B>,
) => UnaryFn<A, G>) &
  (<A, B, C, D, E, F>(
    ef: UnaryFn<E, F>,
    de: UnaryFn<D, E>,
    cd: UnaryFn<C, D>,
    bc: UnaryFn<B, C>,
    ab: UnaryFn<A, B>,
  ) => UnaryFn<A, F>) &
  (<A, B, C, D, E>(
    de: UnaryFn<D, E>,
    cd: UnaryFn<C, D>,
    bc: UnaryFn<B, C>,
    ab: UnaryFn<A, B>,
  ) => UnaryFn<A, E>) &
  (<A, B, C, D>(
    cd: UnaryFn<C, D>,
    bc: UnaryFn<B, C>,
    ab: UnaryFn<A, B>,
  ) => UnaryFn<A, D>) &
  (<A, B, C>(bc: UnaryFn<B, C>, ab: UnaryFn<A, B>) => UnaryFn<A, C>) &
  (<A, B>(ab: UnaryFn<A, B>) => UnaryFn<A, B>)
