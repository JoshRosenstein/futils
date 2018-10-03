import reduceValues_ from './reduceValues_'
import append_ from './append_'
import path_ from './path_'
import splitWhenNoSpace_ from './splitWhenNoSpace_'

export default (keys, keyedEnumerable) =>  reduceValues_(
  (acc, key) => append_(path_(key, keyedEnumerable), acc),
  [],
  splitWhenNoSpace_(keys,',')
)
