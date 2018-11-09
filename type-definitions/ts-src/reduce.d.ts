import {IterableValues, IterableKeys} from './vendorTypes/ts-extra-types'

type GetV<O> = O extends string
  ? string
  : O extends Array<infer V>
    ? V
    : O extends {[key: string]: infer V}
      ? V
      : O extends IterableValues<infer E> ? E : unknown

type GetK<O> = O extends string
  ? number
  : O extends Array<any>
    ? number
    : O extends IterableKeys<infer V>
      ? V
      : O extends {[key: string]: any} ? string : unknown

type ReducerFunc1<TResult> = (acc: TResult, value: any, key: any) => TResult
type ReducerFunc2<F, TResult> = (
  acc: TResult,
  value: GetV<F>,
  key: GetK<F>,
) => TResult

export type Reduce_T0 = {
  <TResult>(
    reducer: ReducerFunc1<TResult>,
    initial: TResult,
    functor: any,
  ): TResult
  <F, TResult>(
    reducer: ReducerFunc2<F, TResult>,
    initial: TResult,
    functor: F,
  ): TResult
}

type ReducerFunc2_<T, U, K> = (acc: U, value: T, key?: K) => U

type reduce_000_ = {
  <T, U>(
    fn: ReducerFunc2_<T, U, number>,
    initial: U,
    target: Array<T>,
    right?: boolean,
  ): U
  <T extends string, U>(
    fn: ReducerFunc2_<T, U, number>,
    initial: U,
    target: T,
    right?: boolean,
  ): U
  <T, U>(
    fn: ReducerFunc2_<T, U, T>,
    initial: U,
    set: Set<T>,
    right?: boolean,
  ): U
  <T, U, K>(
    fn: ReducerFunc2_<T, U, K>,
    initial: U,
    map: Map<K, T>,
    right?: boolean,
  ): U
  <T, U, K extends string>(
    fn: ReducerFunc2_<T, U, K>,
    initial: U,
    object: Record<K, T>,
    right?: boolean,
  ): U

  <T, U, K extends string>(
    fn: ReducerFunc2_<T, U, K | number>,
    initial: U,
    target: T | T[] | Set<T> | Map<K, T> | Record<K, T>,
    right?: boolean,
  ): U
}

export type Reduce_ = {
  <TResult>(
    reducer: ReducerFunc1<TResult>,
    initial: TResult,
    functor: any,
    right?: boolean,
  ): TResult
  <F, TResult>(
    reducer: ReducerFunc2<F, TResult>,
    initial: TResult,
    functor: F,
    right?: boolean,
  ): TResult
}

export type Reduce = Reduce_T0 & {
  <TResult>(reducer: ReducerFunc1<TResult>): (
    initial: TResult,
  ) => (functor: any) => TResult
  <TResult>(reducer: ReducerFunc1<TResult>): (
    initial: TResult,
    functor: any,
  ) => TResult
  <TResult>(reducer: ReducerFunc1<TResult>, initial: TResult): (
    functor: any,
  ) => TResult

  <F, TResult>(reducer: ReducerFunc2<F, TResult>): (
    initial: TResult,
  ) => (functor: F) => TResult
  <F, TResult>(reducer: ReducerFunc2<F, TResult>): (
    initial: TResult,
    functor: F,
  ) => TResult
  <F, TResult>(reducer: ReducerFunc2<F, TResult>, initial: TResult): (
    functor: F,
  ) => TResult
}
