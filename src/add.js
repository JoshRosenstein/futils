import curry2_ from './curry2_'

export const add_ = (a, b) => Number(a) + Number(b)
export const add = curry2_(add_)
export default add
