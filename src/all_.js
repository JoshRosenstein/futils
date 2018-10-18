// @flow
import reduceWhile_ from './reduceWhile_'
import type {FunctorTypeT, PredicateFunctionTypeWithKeyT} from 'types'

const all_: <T>(
  fn: PredicateFunctionTypeWithKeyT<T>,
  functor: FunctorTypeT<T>,
) => boolean = (fn, functor) =>
  reduceWhile_(
    acc => acc === true,
    (acc, value, key) => fn(value, key),
    true,
    functor,
  )

export default all_
