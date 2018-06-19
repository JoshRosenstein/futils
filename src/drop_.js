import gt_ from "./gt_"
import append_ from "./append_"
import reduce_ from "./reduce_"
import empty_ from "./empty_"


export default (count, orderedList) =>  reduce_((acc, value, index) =>
 gt_(index, count - 1)? append_(value, acc):acc,
    empty_(orderedList),
    orderedList
  )
