import mergeRight from "../mergeRight"
import empty from "../empty"
import of from "../of"
import reduceWithValueKey from "../reduceWithValueKey"
import { curry2 } from "../curry"

export const mapValuesWithValueKey_ = (fn, functor) => {
  if (functor.map instanceof Function) {
    return functor.map((value, key) => fn(value, key))
  }

  return reduceWithValueKey(accumulated => value => key => {
    return mergeRight(accumulated)(of(key)(fn(value, key))(accumulated))
  })(empty(functor))(functor)
}

export default curry2(mapValuesWithValueKey_)
