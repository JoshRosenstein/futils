import {curry2_} from './curry2_'

export const multiply_ = (a, b) => a * b
export const multiply = curry2_(multiply_)
export default multiply
