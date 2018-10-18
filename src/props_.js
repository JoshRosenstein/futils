import reduceValues_ from './reduceValues_'
import append_ from './append_'
import prop_ from './prop_'
import splitWhenNoSpace_ from './splitWhenNoSpace_'

export default (keys, keyedEnumerable) =>
  reduceValues_(
    (acc, key) => append_(prop_(key, keyedEnumerable), acc),
    [],
    splitWhenNoSpace_(keys, ','),
  )
