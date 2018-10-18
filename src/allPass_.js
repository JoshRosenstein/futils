// @flow
import reduceWhile_ from './reduceWhile_'
import toArray from './toArray'

type AllPass_ = <T>(
  fns: Array<(...args: Array<T>) => boolean>,
  ...args: Array<T>
) => boolean

const allPass_: AllPass_ = (fns, ...args) =>
  reduceWhile_(
    acc => acc === true,
    (acc, fn) => fn(...args),
    true,
    toArray(fns),
  )

export default allPass_
