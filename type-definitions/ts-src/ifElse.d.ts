import {Morphism, Predicate} from './vendorTypes/npm-ramda/$types'

type ifElse_100<T> = {
  <U>(onTrue: Morphism<T, U>): ifElse_110<T, U>
  <$SEL extends '11'>(): <U, V>(
    onTrue: Morphism<T, U>,
    onFalse: Morphism<T, V>,
  ) => ifElse_111<T, U, V>
  <$SEL extends '1'>(): <U>(onTrue: Morphism<T, U>) => ifElse_110<T, U>
  <U, V>(onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>
}
type ifElse_110<T, U> = {
  <V>(onFalse: Morphism<T, V>): ifElse_111<T, U, V>
}
type ifElse_111<T, U, V> = Morphism<T, U | V>

export type IfElse = {
  <T>(pred: Predicate<T>): ifElse_100<T>
  <T, U>(pred: Predicate<T>, onTrue: Morphism<T, U>): ifElse_110<T, U>
  <T, U, V>(
    pred: Predicate<T>,
    onTrue: Morphism<T, U>,
    onFalse: Morphism<T, V>,
  ): ifElse_111<T, U, V>
}
