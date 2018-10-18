import merge_ from './merge_'
import empty_ from './empty_'
import of_ from './of_'
import reduce_ from './reduce_'

export default (fn, functor) =>
  reduce_(
    (accumulated, value, key) =>
      merge_(accumulated, of_(fn(value, key), value, accumulated)),
    empty_(functor),
    functor,
  )
