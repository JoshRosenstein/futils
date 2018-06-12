import { mergeRight_ } from "../mergeRight"
import empty from "../empty"
import { of_ } from "../of"
import reduceWithValueKey, { reduceWithValueKey_ } from "../reduceWithValueKey"
import { curry2 } from "../curry"

const mapKeysWithValueKey_ = (fn, functor) => {
  return reduceWithValueKey_(
    (accumulated, value, key) => {
      return mergeRight_(accumulated, of_(fn(value, key), value, accumulated))
    },
    empty(functor),
    functor
  )
}

export default curry2(mapKeysWithValueKey_)
