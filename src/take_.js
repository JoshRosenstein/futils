import gt_ from './gt_'
import append_ from './append_'
import reduce_ from './reduce_'
import empty_ from './empty_'

/// todo: use reduce while
export default (count, orderedList) =>
  count < 0
    ? orderedList
    : reduce_(
        (acc, v, idx) => (gt_(idx, count - 1) ? acc : append_(v, acc)),
        empty_(orderedList),
        orderedList,
      )
