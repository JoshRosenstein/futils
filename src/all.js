// @flow
import all_ from './all_'
import type {FunctorTypeT, PredicateFunctionTypeWithKeyT} from 'types'
import curry2_ from './curry2_'

export const all: (<T>(
  fn: PredicateFunctionTypeWithKeyT<T>,
  functor: FunctorTypeT<T>,
) => boolean) &
  (<T>(
    fn: PredicateFunctionTypeWithKeyT<T>,
  ) => (functor: FunctorTypeT<T>) => boolean) = curry2_(all_)

export default all
