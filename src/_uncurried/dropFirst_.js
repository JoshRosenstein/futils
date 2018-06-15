import gt_ from "./gt_"
import append_ from "./append_"
import reduce_ from "./reduce_"
import empty_ from "./empty_"


export default (count, orderedList) =>  reduce_(
    (acc, value, index) => {
      if (gt_(index, count - 1)) {
        return append_(value, acc)
      }
      return acc
    },
    empty_(orderedList),
    orderedList
  )
