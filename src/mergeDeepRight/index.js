import { mergeRight_ } from "../mergeRight"
import { mergeWith_ } from "../mergeWith"
import isObject from "../isObject"
import isArray from "../isArray"
import { curry2 } from "../curry"

export const mergeDeepRight_ = (left, right) => {
  if (isArray(left) && isArray(right)) {
    return mergeRight_(left, right)
  }

  if (isObject(left) && isObject(right)) {
    return mergeWith_(mergeDeepRight_, left, right)
  }

  return right
}

export default curry2(mergeDeepRight_)
