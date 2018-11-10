import curry2_ from './_internal/curry2_'
import {reduceWhile_} from './reduceWhile'
import toArray from './toArray'

export const anyPass_ = (fns, ...args) =>
  reduceWhile_(
    acc => acc === false,
    (acc, fn) => fn(...args),
    false,
    toArray(fns),
  )
export const anyPass = curry2_(anyPass_)

export default anyPass
