import reduceValues_ from './reduceValues_'
import mergeDeepRight_ from './mergeDeepRight_'
import last_ from './last_'
import empty_ from './empty_'

export default functors => {
  if (last_(functors)) {
    return reduceValues_(mergeDeepRight_, empty_(last_(functors)), functors)
  }

  return functors
}
