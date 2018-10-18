import filter_ from './filter_'
import complement_ from './complement_'

export default (predicate, enumerable) => {
  if (enumerable.reject) {
    return enumerable.reject(predicate)
  }
  return filter_(complement_(predicate), enumerable)
}
