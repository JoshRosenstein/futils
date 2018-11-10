import {curryN_} from './curryN'
import {maxArgs_} from './maxArgs_'

const internalConverge = (after, fns) => (...args) =>
  after.apply(internalConverge, fns.map(fn => fn.apply(internalConverge, args)))

export const converge_ = (after, fns) =>
  curryN_(maxArgs_(fns), internalConverge(after, fns))

export const converge = curryN_(2, converge_)

export default converge
