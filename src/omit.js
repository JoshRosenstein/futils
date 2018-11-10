import {curry2_} from './curry2_'
import {reduce_} from './reduce'
import {omitKey_} from './omitKey'
import {splitWhenNoSpace_} from './splitWhenNoSpace_'

export const omit_ = (keys, obj) =>
  reduce_((acc, key) => omitKey_(key, acc), obj, splitWhenNoSpace_(keys, ','))
export const omit = curry2_(omit_)
export default omit
