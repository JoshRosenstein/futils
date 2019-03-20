import {curry2_} from './_internal/curry2_'
import {reduceWhile_} from './reduceWhile'
import {toArray} from './toArray'

type AnyPass_ = <T>(
  fns: Array<(...args: T[]) => boolean>,
  ...args: T[]
) => boolean
type AnyPass = (<T>(
  fns: Array<(...args: T[]) => boolean>,
) => (...args: T[]) => boolean) &
  AnyPass_

export const anyPass_: AnyPass_ = (fns, ...args) =>
  reduceWhile_(
    acc => acc === false,
    (_, fn) => fn(...args),
    false,
    toArray(fns),
  )

export const anyPass: AnyPass = curry2_(anyPass_)

export default anyPass
