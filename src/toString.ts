import {type_} from './type'
import {isFunction} from 'typed-is/lib/isFunction'
import {isNil} from 'typed-is/lib/isNil'
import {isString} from 'typed-is/lib/isString'

export const toString_ = (value: any): string => {
  if (isNil(value)) return type_(value)
  if (isString(value)) return value

  return isFunction(value.toString)
    ? value.toString()
    : Object.prototype.toString.apply(value)
}

export const toString = toString_

export default toString
