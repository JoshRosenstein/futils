import {curryN_} from './curryN'
import maxArgs_ from './_internal/maxArgs_'
import {reduceWhile_} from './reduceWhile'
import toArray from './toArray'

export const dispatchWith_ = (pred, fns, ...args) =>
  reduceWhile_(
    (val, nextFn, idx) => {
      if (idx > 0 && !pred(val)) {
        return true
      }
      return pred(nextFn(...args))
    },

    (_acc, fn, _idx) => fn(...args),

    undefined,
    toArray(fns),
  )

export const dispatchWith = curryN_(2, (pred, fns) =>
  curryN_(maxArgs_(fns), (...args) => dispatchWith_(pred, fns, ...args)),
)

export default dispatchWith
