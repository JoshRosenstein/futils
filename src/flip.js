import {curry_} from './curry'

const flip_ = fn => curry_((x, y, ...args) => fn(y, x, ...args))
const flip = flip_

export default flip
