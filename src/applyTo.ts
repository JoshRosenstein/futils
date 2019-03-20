import {curry2_} from './_internal/curry2_'

export const applyTo_ = <T, R>(value: T, fn: (arg: T) => R) => fn(value)
export const applyTo = curry2_(applyTo_)
export default applyTo
