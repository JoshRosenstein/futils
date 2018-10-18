// @flow
import is_ from './is_'

declare function nth_<V, T: Array<V>>(i: number, orderedList: T): ?V
declare function nth_<T: string>(i: number, orderedList: T): T

function nth_(i, orderedList) {
  const idx = i < 0 ? orderedList.length + i : i
  return is_('String', orderedList) ? orderedList.charAt(idx) : orderedList[idx]
}

export default nth_
