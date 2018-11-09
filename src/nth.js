import {curry2_} from './curry2_'
import isString_ from './isString_'

export const nth_ = (i, orderedList) => {
  const idx = i < 0 ? orderedList.length + i : i
  if (isString_(orderedList)) {
    return orderedList.charAt(idx)
  }
  return orderedList[idx]
}
export const nth = curry2_(nth_)
export default nth
