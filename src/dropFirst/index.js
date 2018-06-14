import { gt_ } from "../gt"
import append_ from '../_uncurried/append_'
import { reduce_ } from "../reduce"
import empty from "../empty"
import { curry2 } from "../curry"

export const dropFirst_ = (count, orderedList) => {
  return reduce_(
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
