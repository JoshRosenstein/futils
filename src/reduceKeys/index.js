import { reduce_ } from "../reduce"
import { curry3 } from "../curry"

export const reduceKeys_ = (fn, initial, functor) =>
  reduce_((acc, val, key) => fn(acc, key), initial, functor)

export default curry3(reduceKeys_)
