import {curry2_} from './_internal/curry2_'

export const multiply_ = (a, b) => a * b
export const multiply = curry2_(multiply_)
export default multiply
