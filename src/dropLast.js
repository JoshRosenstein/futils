import curry2_ from './curry2_'
import {gt_} from './gt'
import {append_} from './append'
import {reduce_} from './reduce'
import {empty_} from './empty'
import {length_} from './length'

export const dropLast_ = (count, orderedList) => {
  if (count < 0) return orderedList
  const cnt = length_(orderedList) - count - 1
  return reduce_(
    (acc, v, idx) => (gt_(idx, cnt) ? acc : append_(v, acc)),
    empty_(orderedList),
    orderedList,
  )
}
export const dropLast = curry2_(dropLast_)

export default dropLast
