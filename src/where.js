import curry2_ from './_internal/curry2_'
import {reduce_} from './reduce'
import {path_} from './path'
import {toArray_} from './toArray'

export const where_ = (matcher, keyedEnumerable) =>
  reduce_(
    (latest, value, key) =>
      latest && value(path_(toArray_(key), keyedEnumerable)),
    true,
    matcher,
  )
export const where = curry2_(where_)
export default where
