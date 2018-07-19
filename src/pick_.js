import merge_ from './merge_'
import reduceValues_ from './reduceValues_'
import objOf_ from './objOf_'
import prop_ from './prop_'
import empty_ from './empty_'


export default   (keys, keyedEnumerable) => reduceValues_(
  (acc, key) => {
    const v = prop_(key, keyedEnumerable)
    return v ? merge_(acc, objOf_(key, v)) : acc
  },
  empty_(keyedEnumerable),
  keys
)
