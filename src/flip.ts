import {curryN_} from './curryN'

export const flip_ = fn =>
  curryN_(fn.length, (x, y, ...args) => fn(y, x, ...args))
export const flip = flip_

export default flip
