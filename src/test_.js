import type_ from './type_'
import cloneRegExp_ from './cloneRegExp_'

export default  (pattern, str) => {
  if (type_(pattern)!== 'RegExp') {
    throw new TypeError(
      "‘test’ requires a value of type RegExp as its first argument; received " + type_(pattern)
    )
  }
  return cloneRegExp_(pattern).test(str)
}
