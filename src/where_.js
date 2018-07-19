import reduce_ from './reduce_'
import path_ from './path_'
import toArray_ from './toArray_'

 
export default (matcher, keyedEnumerable) =>
  reduce_(
    (latest, value, key) =>
      latest && value(path_(toArray_(key), keyedEnumerable)),
    true,
    matcher)
