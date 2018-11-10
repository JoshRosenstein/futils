import {curry2_} from './curry2_'
import isArray from './isArray'
import isString from './isString'

export const concat_ = (a, b) =>
  (isArray(a) && isArray(b)) || (isString(a) && isString(b))
    ? a.concat(b)
    : null

export const concat = curry2_(concat_)

export default concat
