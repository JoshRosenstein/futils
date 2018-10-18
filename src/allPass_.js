import reduceWhile_ from './reduceWhile_'
import toArray from './toArray'

export default (fns, ...args) =>
  reduceWhile_(
    acc => acc === true,
    (acc, fn) => fn(...args),
    true,
    toArray(fns),
  )
