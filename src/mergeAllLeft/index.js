import { reduceValues_ } from "../reduceValues"
import mergeLeft from "../mergeLeft"
import head from "../head"
import empty from "../empty"

export default functors => {
  if (head(functors)) {
    return reduceValues_(mergeLeft, empty(head(functors)), functors)
  }

  return functors
}
