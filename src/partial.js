import {curry2_} from './curry2_'
// partial_ :: ((a... -> b), [a]) -> a... -> b
export const partial_ = (f, args) => f.bind(null, ...args)

export default curry2_(partial_)
