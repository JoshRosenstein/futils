import { reduceWithValueKey_ } from "../reduceWithValueKey"

import { curry3 } from "../curry"

export const reduceValues_ = (fn, initial, functor) =>
  reduceWithValueKey_((acc, value) => fn(acc, value), initial, functor)

export default curry3(reduceValues_)
