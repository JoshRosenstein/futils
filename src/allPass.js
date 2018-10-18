// @flow
import curryN_ from './curryN_'
import allPass_ from './allPass_'
import maxArgs_ from './maxArgs_'

type AllPass = <T>(
  fns: Array<(...args: Array<T>) => boolean>,
) => (...args: Array<T>) => boolean

const allPass: AllPass = fns =>
  curryN_(maxArgs_(fns), (...args) => allPass_(fns, ...args))

export default allPass
