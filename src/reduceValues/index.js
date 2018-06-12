import { reduce_ } from "../reduce"

import { curry3 } from "../curry"

export const reduceValues_ = (fn, initial, functor) =>
  reduce_((acc, value) => fn(acc, value), initial, functor)

export default curry3(reduceValues_)
