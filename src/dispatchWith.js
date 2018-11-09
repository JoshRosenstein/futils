import curryN_ from './curryN_'
import maxArgs_ from './maxArgs_'
import {reduceWhile_} from './reduceWhile'
import toArray from './toArray'

export const dispatchWith_ = (pred, fns, ...args) =>
  reduceWhile_(
    (val, nextFn, idx) => idx === 0 || pred(val) === false,
    (acc, fn, idx) => idx > 0 && fn(...args),
    undefined,
    toArray(fns),
  )

export const dispatchWith = (pred, fns) =>
  curryN_(maxArgs_(fns), (...args) => dispatchWith_(pred, fns, ...args))

export default dispatchWith
