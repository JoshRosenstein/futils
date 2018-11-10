import {curryN_} from './curryN'

export const curry_ = f => curryN_(f.length, f)
export const curry = curry_

export default curry
