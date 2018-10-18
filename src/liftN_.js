import reduce_ from './reduce_'
import ap_ from './ap_'
import curryN_ from './curryN_'
import mapValues_ from './mapValues_'

export default (arity, fn) =>
  curryN_(arity, (x, ...args) =>
    reduce_((acc, v) => ap_(acc, v), mapValues_(curryN_(arity, fn), x), args),
  )
