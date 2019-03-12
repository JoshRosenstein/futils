import {curry3_} from './_internal/curry3_'

export const doWhile_ = (cond, fn, val) =>
  cond(val) ? doWhile_(cond, fn, fn(val)) : val

export const doWhile = curry3_(doWhile_)

export default doWhile
