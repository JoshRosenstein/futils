import curry2_ from './curry2_'
import isFunction from './isFunction'

export const both_ = (f, g) =>
  isFunction(f) ? (...args) => f(...args) && g(...args) : f && b

export const both = curry2_(both_)

export default both_
