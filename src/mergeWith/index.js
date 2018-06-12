import  { prop_ } from "../prop"
import  { attach_ } from "../attach"
import  { reduce_ } from "../reduce"
import { curry3 } from "../curry"
export const mergeWith_ = (fn, initial, functor) =>
  reduce_(
    (acc, value, key) => {
      if (prop_(key, acc)) {
        return attach_(key, fn(prop_(key, acc), value), acc)
      }

      return attach_(key, value, acc)
    },
    initial,
    functor
  )

export default curry3(mergeWith_)
