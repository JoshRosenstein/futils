import reduceValues_ from './reduceValues_'
import merge_ from './merge_'
import last_ from './last_'
import empty_ from './empty_'

export default functors => {
  if (last_(functors)) {
    return reduceValues_(merge_, empty_(last_(functors)), functors)
  }

  return functors
}
