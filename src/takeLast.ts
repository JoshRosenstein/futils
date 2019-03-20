import {curry2_} from './_internal/curry2_'
import {lt_} from './lt'
import {append_} from './append'
import {reduce_} from './reduce'
import {empty_} from './empty'
import {length_} from './length'

//TODO use reduce while
export const takeLast_ = (count, orderedList) => {
  if (count < 0) return orderedList
  const cnt = length_(orderedList) - count
  return reduce_(
    (acc, v, idx) => (lt_(idx, cnt) ? acc : append_(v, acc)),
    empty_(orderedList),
    orderedList,
  )
}
export const takeLast = curry2_(takeLast_)
export default takeLast
