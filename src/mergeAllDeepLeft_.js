import reduceValues_ from "./reduceValues_";
import mergeDeepLeft_ from "./mergeDeepLeft_";
import head_ from "./head_";
import empty_ from "./empty_";

export default functors=> {
  if (head_(functors)) {
    return reduceValues_(mergeDeepLeft_,empty_(head_(functors)),functors)
  }

  return functors;
}
