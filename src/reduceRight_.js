import reduce_ from './reduce_'

export default (reducer, initial, functor) =>
  reduce_(reducer, initial, functor, true)
