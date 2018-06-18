import reduce_ from "./reduce_"

export default (fn, initial, functor) =>
  reduce_((acc, value) => fn(acc, value), initial, functor)
