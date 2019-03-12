import reduceValues_ from './reduceValues_'
import mergeDeepLeft_ from './mergeDeepLeft_'
import first_ from './first_'
import empty_ from './empty_'

export default functors=> {
  if (first_(functors)) {
    return reduceValues_(mergeDeepLeft_,empty_(first_(functors)),functors)
  }

  return functors
}
