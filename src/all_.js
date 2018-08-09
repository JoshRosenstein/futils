import reduceWhile_ from './reduceWhile_'

export default (fn, functor) =>
  reduceWhile_(
    acc => acc === true,
    (acc, value, key) => fn(value,key),
    true,
    functor
  )
