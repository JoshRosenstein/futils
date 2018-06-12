import { reduceValues_ } from "../reduceValues"
import { mergeRight_ } from "../mergeRight"
import last from "../last"
import empty from "../empty"

export default functors => {
  if (last(functors)) {
    return reduceValues_(mergeRight_, empty(last(functors)), functors)
  }

  return functors
}
