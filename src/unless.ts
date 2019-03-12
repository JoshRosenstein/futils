import {curry3_} from './_internal/curry3_'

export const unless_ = (cond, fn, val) => (cond(val) ? val : fn(val))

export const unless = curry3_(unless_)

export default unless
