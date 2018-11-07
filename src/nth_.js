// @flow
import isString_ from './isString_'

type Nth_ = (i: number, orderedList: Array<*> | string) => any

const nth_: Nth_ = (i, orderedList) => {
  const idx = i < 0 ? orderedList.length + i : i
  if (isString_(orderedList)) {
    return orderedList.charAt(idx)
  }
  return orderedList[idx]
}
export default nth_
