import attach_ from './attach_'
import reduce_ from './reduce_'

export default (fn, initial, functor) =>
  reduce_(
    (acc, value, key) => {
      if (acc[key]) {
        return {
          ...acc,
          [key]: fn(acc[key], value, key)
        }
      }

      return attach_(key, value, acc)
    },
    initial,
    functor
  )
