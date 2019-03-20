import {curryN_} from './curryN'

export const complement_ = pred =>
  curryN_(pred.length, (...args) => !pred(...args))

export const complement = complement_

export default complement
