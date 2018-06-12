import { gt_ } from "../gt"
import { append_ } from "../append"
import { reduceWithValueKey_ } from "../reduceWithValueKey"
import empty from "../empty"
import { curry2 } from "../curry"

export const dropFirst_ = (count, orderedList) => {
  return reduceWithValueKey_(
    (acc, value, index) => {
      if (gt_(index, count - 1)) {
        return append_(value, acc)
      }
      return acc
    },
    empty(orderedList),
    orderedList
  )
}

export default curry2(dropFirst_)
