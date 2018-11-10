import {divide_} from './divide'
import flip2curry2_ from './_internal/flip2curry2_'

export const divideBy = flip2curry2_(divide_)
export default divideBy
