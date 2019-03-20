import {curry2_} from './_internal/curry2_'

export const split_ = (separator, str) => str.split(separator)
export const split = curry2_(split_)

export default split
