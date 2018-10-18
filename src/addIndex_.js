import curryN_ from './curryN_'
import last from './last'

export default functor =>
  curryN_(functor.length, (fn, ...rest) => {
    let cnt = 0

    const newFn = (...args) => fn(...args, cnt++, last(rest))

    return functor(newFn, ...rest)
  })
