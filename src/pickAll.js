import {curry2_} from './curry2_'
import {merge_} from './merge'
import {reduceValues_} from './reduceValues'
import {objOf_} from './objOf'
import {prop_} from './prop'
import {empty_} from './empty'

export const pickAll_ = (keys, keyedEnumerable) =>
  reduceValues_(
    (acc, key) => merge_(acc, objOf_(key, prop_(key, keyedEnumerable))),
    empty_(keyedEnumerable),
    keys,
  )
export const pickAll = curry2_(pickAll_)
export default pickAll
