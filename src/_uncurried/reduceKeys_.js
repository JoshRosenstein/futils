
import reduce_ from "./reduce_"

export default (fn, initial, functor) =>
  reduce_((acc, val, key) => fn(acc, key), initial, functor)
