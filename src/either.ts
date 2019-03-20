import {curry2_} from './_internal/curry2_'
import {isFunction} from 'typed-is'
import {Variadic} from './_types/$types'

export type Either_ = {
  <F extends Variadic<boolean>>(fn1: F, fn2: F): either_11<F>
  <T1, T2>(fn1: T1, fn2: T2): T1 | T2
}
export type Either = {
  <F extends Variadic<boolean>>(fn1: F): either_10<F>
  <F extends Variadic<boolean>>(fn1: F, fn2: F): either_11<F>
  <T1, T2>(fn1: T1, fn2: T2): T1 | T2
  <T1, T2>(fn1: T1): (fn2: T2) => T1 | T2
}

type either_10<F extends Variadic<boolean>> = {
  (fn2: F): either_11<F>
}
type either_11<F extends Variadic<boolean>> = F

export const either_: Either_ = (funcA, funcB) => (...args) =>
  isFunction(funcA) ? funcA(...args) || funcB(...args) : funcA || funcB

export const either: Either = curry2_(either_)

export default either
