import {gt_} from './gt'
import {append_} from './append'
import {reduce_} from './reduce'
import {empty_} from './empty'

export default (count, orderedList) =>
  reduce_(
    (acc, value, index) => (gt_(index, count - 1) ? append_(value, acc) : acc),
    empty_(orderedList),
    orderedList,
  )
