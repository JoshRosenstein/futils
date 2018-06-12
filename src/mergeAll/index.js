import { reduceValues_ } from "../reduceValues"
import { merge_ } from "../merge"
import last from "../last"
import empty from "../empty"

export default functors => {
  if (last(functors)) {
    return reduceValues_(merge_, empty(last(functors)), functors)
  }

  return functors
}
