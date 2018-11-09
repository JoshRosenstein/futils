import curry2_ from './curry2_'
import isFunction from './isFunction'

export const either_ = (funcA, funcB) => (...args) =>
  isFunction(funcA) ? funcA(...args) || funcB(...args) : funcA || funcB

export const either = curry2_(either_)

export default either
