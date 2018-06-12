import { mergeRight_ } from "../mergeRight"
import empty from "../empty"
import { of_ } from "../of"
import { reduceWithValueKey_ } from "../reduceWithValueKey"
import { curry2 } from "../curry"

export const mapValuesWithValueKey_ = (fn, functor) => {
  if (functor.map instanceof Function) {
    return functor.map((value, key) => fn(value, key))
  }

  return reduceWithValueKey_(
    (accumulated, value, key) => {
      return mergeRight_(accumulated, of_(key, fn(value, key), accumulated))
    },
    empty(functor),
    functor
  )
}

export default curry2(mapValuesWithValueKey_)
