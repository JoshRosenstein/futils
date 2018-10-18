import curryN_ from './curryN_'
import allPass_ from './allPass_'
import maxArgs_ from './maxArgs_'

export default fns =>
  curryN_(maxArgs_(fns), (...args) => allPass_(fns, ...args))
