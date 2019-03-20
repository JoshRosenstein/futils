import {curry2_} from './_internal/curry2_'
// partial_ :: ((a... -> b), [a]) -> a... -> b
export const partial_ = (f, args) => f.bind(null, ...args)
export const partial = curry2_(partial_)
export default partial
