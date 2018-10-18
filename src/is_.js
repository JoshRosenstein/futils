// @flow
import type_ from './type_'
import isNil_ from './isNil_'

export default (sig: string, value: mixed): boolean => {
  if (typeof sig === 'string') {
    return type_(value) === sig
  }

  return (!isNil_(value) && value.constructor === sig) || value instanceof sig
}
