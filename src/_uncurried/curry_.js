import fnOrError_ from "./fnOrError_"
import curryN_ from './curryN_'

export default (fn, ...argsToCurry) =>
  curryN_(fnOrError_(notFnErrPrefix, fn).length, fn, ...argsToCurry)
