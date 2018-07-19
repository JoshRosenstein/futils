import merge_ from './merge_'
import empty_ from './empty_'
import of_ from './of_'
import reduce_ from './reduce_'


export default  (fn, functor) => {
  if (functor.map instanceof Function) {
    return functor.map((value, key) => fn(value, key))
  }

  return reduce_(
    (accumulated, value, key) => merge_(accumulated, of_(key, fn(value, key), accumulated)),
    empty_(functor),
    functor
  )
}
