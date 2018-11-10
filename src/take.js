import {curry2_} from './curry2_'
import {gt_} from './gt'
import {append_} from './append'
import {reduce_} from './reduce'
import {empty_} from './empty'

/// todo: use reduce while
export const take_ = (count, orderedList) =>
  count < 0
    ? orderedList
    : reduce_(
        (acc, v, idx) => (gt_(idx, count - 1) ? acc : append_(v, acc)),
        empty_(orderedList),
        orderedList,
      )
export const take = curry2_(take_)
export default take
