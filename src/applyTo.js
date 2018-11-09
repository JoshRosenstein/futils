import curry2_ from './curry2_'

export const applyTo_ = (value, fn) => fn(value)
export const applyTo = curry2_(applyTo_)
export default applyTo
