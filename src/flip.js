import {curry3_} from './_internal/curry3_'

export const flip_ = fn => curry3_((x, y, ...args) => fn(y, x, ...args))
export const flip = flip_

export default flip
