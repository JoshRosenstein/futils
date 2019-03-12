import {reduce_} from './reduce'
import {ap_} from './ap'
import {curryN_} from './curryN'
import {mapValues_} from './mapValues'

export const liftN_ = (arity, fn) =>
  curryN_(arity, (x, ...args) =>
    reduce_((acc, v) => ap_(acc, v), mapValues_(curryN_(arity, fn), x), args),
  )
export const liftN = curryN_(2, liftN_)

export default liftN
