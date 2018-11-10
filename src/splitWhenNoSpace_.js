import isString_ from './isString_'
import {toArray_} from './toArray'
import {split_} from './split'

export const splitWhenNoSpace_ = (keys, delim) =>
  isString_(keys)
    ? /\s/g.test(keys)
      ? [keys]
      : split_(delim, keys)
    : toArray_(keys)

export default splitWhenNoSpace_
