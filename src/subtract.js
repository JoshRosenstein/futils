import {curry2_} from './curry2_'

const subtract_ = (a, b) => Number(a) - Number(b)
const subtract = curry2_(subtract_)
export default subtract
