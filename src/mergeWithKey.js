import {curry3_} from './curry3_'
import {attach_} from './attach'
import {reduce_} from './reduce'

export const mergeWithKey_ = (fn, initial, functor) =>
  reduce_(
    (acc, value, key) => {
      if (acc[key]) {
        return {
          ...acc,
          [key]: fn(acc[key], value, key),
        }
      }

      return attach_(key, value, acc)
    },
    initial,
    functor,
  )

export const mergeWithKey = curry3_(mergeWithKey_)
export default mergeWithKey
