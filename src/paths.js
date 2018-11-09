import {curry2_} from './curry2_'
import {reduceValues_} from './reduceValues'
import {append_} from './append'
import {path_} from './path'
import {splitWhenNoSpace_} from './splitWhenNoSpace_'

export const paths_ = (keys, keyedEnumerable) =>
  reduceValues_(
    (acc, key) => append_(path_(key, keyedEnumerable), acc),
    [],
    splitWhenNoSpace_(keys, ','),
  )
export const paths = curry2_(paths_)
export default paths
