import curry3_ from './_internal/curry3_'
import {reduce_} from './reduce'

export const reduceValues_ = (fn, initial, functor) =>
  reduce_((acc, value) => fn(acc, value), initial, functor)

export const reduceValues = curry3_(reduceValues_)

export default reduceValues
