import curry3_ from '../_uncurried/curry3_'
import reduce_ from '../_uncurried/reduce_'
export default curry3_((reducer, initial, functor) =>
  reduce_(reducer, initial, functor, true)
)
