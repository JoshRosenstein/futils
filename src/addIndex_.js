// @flow
import curryN_ from './curryN_'
import last from './last'

type AddIndex_ = <A, B>(
  iterFn: (fn: (x: A) => B, xs: Array<A>) => Array<B>,
) => (fn: (x: A, idx: number, xs: Array<A>) => B, xs: Array<A>) => Array<B>

const addIndex_: AddIndex_ = iterFn =>
  curryN_(iterFn.length, (fn, ...rest) => {
    let idx = 0

    const newFn = (...args) => fn(...args, idx++, last(rest))

    return iterFn(newFn, ...rest)
  })

export default addIndex_
