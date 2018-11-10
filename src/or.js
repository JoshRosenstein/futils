import {curry2_} from './_internal/curry2_'
export const or_ = (a, b) => a || b
export const or = curry2_(or_)
export default or
