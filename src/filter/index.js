import empty from "../empty"
import attach, { attach_ } from "../attach"
import { reduce_ } from "../reduce"
import { curry2 } from "../curry"

export const filter_ = (predicate, enumerable) => {
  if (enumerable.filter) {
    return enumerable.filter(predicate)
  }

  return reduce_(
    (accumulated, value, key) =>
      predicate(value) ? attach_(key, value, accumulated) : accumulated,
    empty(enumerable),
    enumerable
  )
}

export default curry2(filter_)
