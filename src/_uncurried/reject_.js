import filter_ from './filter_'

export default (predicate, enumerable) => {
  if (enumerable.reject) {
    return enumerable.reject(predicate)
  }
  return filter_(v => !predicate(v),enumerable)
}
