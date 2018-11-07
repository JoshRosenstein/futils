//@flow
import curry2_ from './curry2_'
import type {CurriedFunction2} from 'types'

type flip2 = {
  <T1, T2, R>(fn: (v1: T1, v2: T2) => R): flip_2arity_1<T1, T2, R>,

  <T1, T2, R>(
    fn: (v1: T1, v2: T2, ...args: Array<mixed>) => R,
  ): flip_variadic_1<T1, T2, R>,
}
type flip_2arity_1<T1, T2, R> = CurriedFunction2<T2, T1, R>
type flip_variadic_1<T1, T2, R> = (v2: T2, v1: T1, ...args: Array<mixed>) => R

const flip2curry2: flip2 = fn => curry2_((a, b) => fn(b, a))

export default flip2curry2
