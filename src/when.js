// @flow
import curry3_ from './curry3_'
import when_ from './when_'
type UnaryPredicateFn<T> = (x: T) => boolean
// prettier-ignore

type When_FN<V,S>=(x: S) => V
type When_Data<T, S> = T | S

// prettier-ignore
type When_100<T, V, S> = ((fn: When_FN<V,S>) => (x: When_Data<T, S>) => When_Data<T, S> ) &
((fn: When_FN<V,S>,x: When_Data<T, S>) => When_Data<T, S>)

type When_110<T, S> = (x: When_Data<T, S>) => When_Data<T, S>

// prettier-ignore
type When_=
(<T, V, S>(
  pred: UnaryPredicateFn<T>,
)=> When_100<T, V, S>) &
  (<T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: When_FN<V,S>,
  )=> When_110<T, S>) &
 ( <T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: (x: S) => V,
    x: T | S
  )=> T | V)

const when: When_ = curry3_(when_)

export default when
