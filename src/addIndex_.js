import curryN_ from './curryN_'
import last from './last'

const addIndex_ = iterFn =>
  curryN_(iterFn.length, (fn, ...rest) => {
    let idx = 0

    const newFn = (...args) => fn(...args, idx++, last(rest))

    return iterFn(newFn, ...rest)
  })

export default addIndex_
