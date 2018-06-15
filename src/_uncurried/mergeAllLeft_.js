import reduceValues_ from "./reduceValues_"
import mergeLeft_ from "./mergeLeft_"
import head_ from "./head_"
import empty_ from "./empty_"

export default functors => {
  if (head_(functors)) {
    return reduceValues_(mergeLeft_, empty_(head_(functors)), functors)
  }

  return functors
}
