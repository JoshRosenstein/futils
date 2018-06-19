import reduceValues_ from "./reduceValues_"
import mergeLeft_ from "./mergeLeft_"
import first_ from "./first_"
import empty_ from "./empty_"

export default functors => {
  if (first_(functors)) {
    return reduceValues_(mergeLeft_, empty_(first_(functors)), functors)
  }

  return functors
}
