import {curry2_} from './curry2_'
import {toArray_} from './toArray'
import {first_} from './first'

export const max_ = (a, b) =>
  first_([...toArray_(a), ...toArray_(b)].sort((a, b) => a < b))
export const max = curry2_(max_)

export default max
