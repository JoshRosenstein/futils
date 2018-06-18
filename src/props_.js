import reduceValues_ from "./reduceValues_"
import is_ from "./is_"
import append_ from './append_'
import prop_ from './prop_'

export default (keys, keyedEnumerable) => {
  if(is_('String',keys)){
    keys = keys.trim().split(",")
  }
   if (!Array.isArray(keys)) return []

  return reduceValues_(
    (acc, key) => append_(prop_(key, keyedEnumerable), acc),
    [],
    keys
  )
}
