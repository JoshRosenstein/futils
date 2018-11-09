import {curry3_} from './curry3_'
import {prop_} from './prop'
import {attach_} from './attach'
import {reduce_} from './reduce'

export const mergeWith_ = (fn, initial, functor) =>
  reduce_(
    (acc, value, key) => {
      if (prop_(key, acc)) {
        return attach_(key, fn(prop_(key, acc), value), acc)
      }

      return attach_(key, value, acc)
    },
    initial,
    functor,
  )
export const mergeWith = curry3_(mergeWith_)

export default mergeWith
