import fnOrError_ from "./fnOrError_"
import curryN_ from './curryN_'


export default (fn, ...argsToCurry) =>
  curryN_(fnOrError_("`fn` in `curry(fn, ...args)`", fn).length, fn, ...argsToCurry)
