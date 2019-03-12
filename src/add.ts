import {curry2_} from './_internal/curry2_'
export type Add_ = (a: number, b: number) => number

export const add_: Add_ = (a, b) => Number(a) + Number(b)

export type Add = Add_ & ((a: number) => (b: number) => number)

export const add: Add = curry2_(add_)
export default add
