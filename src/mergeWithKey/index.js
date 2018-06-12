import { reduceWithValueKey_ } from "../reduceWithValueKey"
import { attach_ } from "../attach"
import { curry3 } from "../curry"
export const mergeWithKey_ = (fn, initial, functor) =>
  reduceWithValueKey_(
    (accumulated, value, key) => {
      if (accumulated[key]) {
        return {
          ...accumulated,
          [key]: fn(accumulated[key], value, key)
        }
      }

      return attach_(key, value, accumulated)
    },
    initial,
    functor
  )

export default curry3(mergeWithKey_)
