import {values_} from './values'
import {isNil, isInteger} from 'typed-is'

export const length_ = obj =>
  isNil(obj)
    ? undefined
    : typeof obj.length == 'number' && isInteger(obj.length) && obj.length >= 0
      ? obj.length
      : obj.size || values_(obj).length

export const length = length_
export default length_
