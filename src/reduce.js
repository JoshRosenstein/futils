import curry3_ from './curry3_'
import reduce_ from './reduce_'
export default curry3_((reducer, initial, functor) =>
  reduce_(reducer, initial, functor, false)
)
