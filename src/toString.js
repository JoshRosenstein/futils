import {type_} from './type'
import {isFunction, isNil, isString} from 'typed-is'

export const toString_ = value => {
  if (isNil(value)) return type_(value)
  if (isString(value)) return value

  return isFunction(value.toString)
    ? value.toString()
    : Object.prototype.toString.apply(value)
}

export const toString = toString_

export default toString
