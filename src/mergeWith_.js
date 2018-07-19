import prop_ from './prop_'
import attach_ from './attach_'
import reduce_ from './reduce_'

export default (fn, initial, functor) =>
  reduce_(
    (acc, value, key) => {
      if (prop_(key, acc)) {
        return attach_(key, fn(prop_(key, acc), value), acc)
      }

      return attach_(key, value, acc)
    },
    initial,
    functor
  )
