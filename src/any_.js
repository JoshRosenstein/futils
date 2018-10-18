//@flow
import reduceWhile_ from './reduceWhile_'
import type {FunctorType, PredicateFunctionTypeWithKeyT} from 'types'

function any_<T>(
  handlerFn: PredicateFunctionTypeWithKeyT<T>,
  functor: FunctorType,
): boolean {
  return reduceWhile_(
    acc => acc === false,
    (acc, value, key) => handlerFn(value, key),
    false,
    functor,
  )
}
export default any_
