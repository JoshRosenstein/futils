import reduceWhile_ from './reduceWhile_'
import toArray from './toArray'


export default (pred,fns, ...args) =>
  reduceWhile_(
    (val,nextFn,idx) => idx===0 || pred(val) === false,
    (acc, fn,idx) => idx>0 && fn(...args),
    undefined,
    toArray(fns)
  )
