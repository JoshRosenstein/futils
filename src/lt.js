import curry2_ from './curry2_'

export const lt_ = (a, b) => a < b
export const lt = curry2_(lt_)

export default lt
