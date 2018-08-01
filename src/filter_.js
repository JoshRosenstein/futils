import empty_ from './empty_'
import attach_ from './attach_'
import reduce_ from './reduce_'


export default (predicate, enumerable) => {
  if (enumerable.filter) {
    return enumerable.filter(predicate)
  }

  return reduce_(
    (accumulated, value, key) =>
      predicate(value,key) ? attach_(key, value, accumulated) : accumulated,
    empty_(enumerable),
    enumerable
  )
}
