import curry2_ from './curry2_'

export const and_ = (a, b) => a && b

const and = curry2_(and_)

export default and
