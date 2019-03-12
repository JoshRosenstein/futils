import {curry2_} from './_internal/curry2_'
import {reduceValues_} from './reduceValues'
import {append_} from './append'
import {prop_} from './prop'
import {splitWhenNoSpace_} from './_internal/splitWhenNoSpace_'

export const props_ = (keys, keyedEnumerable) =>
  reduceValues_(
    (acc, key) => append_(prop_(key, keyedEnumerable), acc),
    [],
    splitWhenNoSpace_(keys, ','),
  )

export const props = curry2_(props_)
export default props
