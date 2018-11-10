import {curry3_} from './curry3_'
import {assoc_} from './assoc'

export const update_ = (i, v, l) =>
  Math.abs(i) >= l.length ? l : assoc_(i < 0 ? l.length + i : i, v, l)

export const update = curry3_(update_)

export default update
