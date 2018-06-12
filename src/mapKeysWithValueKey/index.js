import { mergeRight_ } from "../mergeRight"
import empty from "../empty"
import { of_ } from "../of"
import reduce, { reduce_ } from "../reduce"
import { curry2 } from "../curry"

const mapKeysWithValueKey_ = (fn, functor) => {
  return reduce_(
    (accumulated, value, key) => {
      return mergeRight_(accumulated, of_(fn(value, key), value, accumulated))
    },
    empty(functor),
    functor
  )
}

export default curry2(mapKeysWithValueKey_)
