import mergeRight from "../mergeRight"
import empty from "../empty"
import of from "../of"
import reduceWithValueKey from "../reduceWithValueKey"
import { curry2 } from "../curry"
const mapKeysWithValueKey_ = (fn, functor) => {
  return reduceWithValueKey(accumulated => value => key => {
    return mergeRight(accumulated)(of(fn(value,key))(value)(accumulated))
  })(empty(functor))(functor)
}

export default curry2(mapKeysWithValueKey_)
