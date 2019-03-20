import {curry2_} from './_internal/curry2_'
import {reduceWhile_} from './reduceWhile'
import {Property} from './_types/$types'

export type Any_ = <T>(
  predicateFn: (value: T, key?: Property) => boolean,
  functor: any,
) => boolean

export type Any = Any_ &
  (<T>(
    predicateFn: (value: T, key?: Property) => boolean,
  ) => (functor: any) => boolean)

export const any_: Any_ = (handlerFn, functor) =>
  reduceWhile_(
    acc => acc === false,
    (_, value, key) => handlerFn(value, key),
    false,
    functor,
  )

export const any: Any = curry2_(any_)

export default any
