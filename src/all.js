import {reduceWhile_} from './reduceWhile'
import curry2_ from './_internal/curry2_'

export const all_ = (fn, functor) =>
  reduceWhile_(
    acc => acc === true,
    (acc, value, key) => fn(value, key),
    true,
    functor,
  )

export const all = curry2_(all_)

export default all
