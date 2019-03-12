import {curry2_} from './_internal/curry2_'

export const defaultTo_ = (d, v) => (v == null || v !== v ? d : v)
export const defaultTo = curry2_(defaultTo_)

export default defaultTo
