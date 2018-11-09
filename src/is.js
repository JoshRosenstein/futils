import curry2_ from './curry2_'
import type_ from './type_'
import isNil_ from './isNil_'

export const is_ = (sig, value) => {
  if (typeof sig === 'string') {
    return type_(value) === sig
  }
  return (!isNil_(value) && value.constructor === sig) || value instanceof sig
}

const is = curry2_(is_)

export default is
