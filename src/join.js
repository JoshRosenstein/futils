import curry2_ from './curry2_'

export const join_ = (del, arr) => arr.join(del)
export const join = curry2_(join_)
export default join
