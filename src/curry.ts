import {curryN_} from './curryN'
import {Curried} from './_types/$curried'

export const curry_ = (f => curryN_(f.length, f)) as Curried
export const curry = curry_

export default curry
