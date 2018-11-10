import {curry2_} from './_internal/curry2_'
import {type_} from './type'
import cloneRegExp_ from './_internal/cloneRegExp_'

export const test_ = (pattern, str) => {
  if (type_(pattern) !== 'RegExp') {
    throw new TypeError(
      `‘test’ requires a value of type RegExp as its first argument; received ${type_(
        pattern,
      )}`,
    )
  }
  return cloneRegExp_(pattern).test(str)
}
export const test = curry2_(test_)
export default test
