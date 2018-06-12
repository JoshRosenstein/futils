import { reduceWithValueKey_ } from "../reduceWithValueKey"
import { curry3 } from "../curry"

export const reduceKeys_ = (fn, initial, functor) =>
  reduceWithValueKey_((acc, val, key) => fn(acc, key), initial, functor)

export default curry3(reduceKeys_)
