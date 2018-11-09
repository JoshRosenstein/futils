import {IterableValues} from './vendorTypes/ts-extra-types'

type $ElementType<
  T extends {[P in K & any]: any},
  K extends keyof T | number
> = T[K]

type ReturnPropArray<O, K, A> =
  //O extends Array<infer A>?
  K extends keyof O
    ? O[K] 
    : K extends string ? A | undefined : K extends number ? undefined : any

type ReturnPropIterable<O> = O extends IterableValues<infer E>
  ? E | undefined
  : undefined

export type Prop_ = {
  <O extends Array<any>, K extends keyof O>(prop: K, obj: O): O[K] | undefined
  <O, K extends keyof O>(prop: K, obj: O): O[K]
  <O extends IterableValues<any>, K extends PropertyKey>(
    prop: K,
    obj: O,
  ): ReturnPropIterable<O>
  <O, K extends PropertyKey>(prop: K, obj: O): undefined
}

type ReturnProp<O, K> = O extends Array<infer A>
  ? ReturnPropArray<O, K, A>
  : K extends keyof O
    ? O[K]
    : O extends IterableValues<infer E> ? E | undefined : undefined

export type Prop = {
  <O extends Array<any>, K extends keyof O>(prop: K, obj: O): O[K] | undefined
  <O, K extends keyof O>(prop: K, obj: O): O[K]
  <O extends IterableValues<any>, K extends PropertyKey>(
    prop: K,
    obj: O,
  ): ReturnPropIterable<O>
  <O, K extends PropertyKey>(prop: K, obj: O): undefined

  <P extends string>(p: P): <T, O = Record<P, T> | Array<T>>(
    obj: O,
  ) => ReturnProp<O, P>

  <P extends number>(p: P): <T, O = Array<T>>(obj: O) => ReturnProp<O, P>
}
