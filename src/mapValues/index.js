import { mapValuesWithValueKey_ } from "../mapValuesWithValueKey"
import { curry2 } from "../curry"

export const mapValues_ = (fn, functor) => {
  if (functor.map instanceof Function) {
    return functor.map(value => fn(value))
  }

  return mapValuesWithValueKey_(value => fn(value), functor)
}

export default curry2(mapValues_)
