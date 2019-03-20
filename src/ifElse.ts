import {curryN_} from './curryN'
import {Morphism, Predicate} from './_types/$types'

export type IfElse_ = {
  <T, U, V>(
    pred: Predicate<T>,
    onTrue: Morphism<T, U>,
    onFalse: Morphism<T, V>,
    value: T,
  ): U | V
}

export type IfElse = {
  <T>(pred: Predicate<T>): ifElse_100<T>
  <T, U>(pred: Predicate<T>, onTrue: Morphism<T, U>): ifElse_110<T, U>
  <T, U, V>(
    pred: Predicate<T>,
    onTrue: Morphism<T, U>,
    onFalse: Morphism<T, V>,
  ): ifElse_111<T, U, V>
  <T, U, V>(
    pred: Predicate<T>,
    onTrue: Morphism<T, U>,
    onFalse: Morphism<T, V>,
    value: T,
  ): U | V
}

type ifElse_100<T> = {
  <U>(onTrue: Morphism<T, U>): ifElse_110<T, U>
  <U, V>(onTrue: Morphism<T, U>, onFalse: Morphism<T, V>): ifElse_111<T, U, V>
}
type ifElse_110<T, U> = {
  <V>(onFalse: Morphism<T, V>): ifElse_111<T, U, V>
}
type ifElse_111<T, U, V> = Morphism<T, U | V>

export const ifElse_: IfElse_ = (predicate, consequent, alternative, value) =>
  predicate(value) ? consequent(value) : alternative(value)

export const ifElse: IfElse = curryN_(4, ifElse_)

export default ifElse
