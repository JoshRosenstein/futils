import reduceWhile_ from './reduceWhile_'
import toArray from './toArray'

export default (fns, ...args) =>
  reduceWhile_(
    acc => acc === false,
    (acc, fn) => fn(...args),
    false,
    toArray(fns),
  )
